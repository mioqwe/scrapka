"""
Google Maps Scraper - Simplified sync version with auto-scroll only
"""

import random
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Optional

from camoufox.addons import DefaultAddons
from dotenv import load_dotenv

# from camoufox.addons import download_and_extract
# TAMPER = "https://addons.mozilla.org/firefox/downloads/file/4624137/tampermonkey-5.4.1.xpi"
load_dotenv()


@dataclass
class RateLimitConfig:
  """Config for rate limiting."""

  min_search_delay: float = 5.0
  max_search_delay: float = 15.0
  scroll_interval_min: float = 1.5
  scroll_interval_max: float = 3.0
  scroll_speed: int = 2000
  scroll_count: int = 15
  auto_scroll_enabled: bool = True

  def get_search_delay(self) -> float:
    return random.uniform(self.min_search_delay, self.max_search_delay)

  def get_scroll_interval(self) -> float:
    return random.uniform(self.scroll_interval_min, self.scroll_interval_max)


class AutoScrollManager:
  """Auto-scroll manager with end-of-results detection."""

  def __init__(self, config: RateLimitConfig, page):
    self.config = config
    self.page = page
    self.scrolls_done = 0

  def _check_end_of_results(self) -> bool:
    """Checks if end of results has been reached."""
    try:
      feed = self.page.locator('[role="feed"]')
      if feed.count() == 0:
        return False

      last_child = feed.evaluate("el => el.lastElementChild")
      if not last_child:
        return False

      style = last_child.get_attribute("style")
      if style and "height: 64px" in style:
        print("✓ End of results reached")
        return True
    except Exception:
      pass
    return False

  def _scroll_once(self, speed: int):
    """Performs a single scroll."""
    try:
      feed = self.page.locator('[role="feed"]').first
      if feed.count() > 0:
        feed.evaluate(f"el => el.scrollBy({{top: {speed}, behavior: 'smooth'}})")
      else:
        self.page.mouse.wheel(0, speed)
    except Exception:
      pass

  def scroll_with_config(self) -> int:
    """Performs scrolling according to configuration."""
    if not self.config.auto_scroll_enabled:
      print("Auto-scroll disabled")
      return 0

    scrolls_done = 0
    max_scrolls = self.config.scroll_count

    print(f"Starting auto-scroll ({max_scrolls} max scrolls)")

    for scroll_num in range(1, max_scrolls + 1):
      # Check end of results
      if self._check_end_of_results():
        break

      # Perform scroll
      self._scroll_once(self.config.scroll_speed)

      # Random delay between scrolls
      delay = self.config.get_scroll_interval()
      print(f"↻ Scroll {scroll_num}/{max_scrolls} | Next in {delay:.1f}s")
      time.sleep(delay)

      scrolls_done = scroll_num

    print(f"✓ Auto-scroll completed: {scrolls_done} scrolls")
    self.scrolls_done = scrolls_done
    return scrolls_done


class GoogleMapsScraper:
  """Simplified Google Maps scraper with auto-scroll only."""

  def __init__(
    self,
    headless: bool = False,
    rate_limit_config: Optional[RateLimitConfig] = None,
    profile_path: Optional[str] = None,
  ):
    self.headless = headless
    self.rate_limit = rate_limit_config or RateLimitConfig()
    self.profile_path = Path(profile_path) if profile_path else None
    self.browser = None
    self.context = None
    self.page = None
    self.camoufox = None

  def start(self):
    """Start Camoufox browser with persistent profile."""
    from camoufox.sync_api import Camoufox

    print("Starting Camoufox...")

    # Ensure profile directory exists
    if self.profile_path:
      self.profile_path.mkdir(parents=True, exist_ok=True)
      print(f"Using profile: {self.profile_path.absolute()}")

    # Start Camoufox with addons
    import os

    addon_paths = [
      os.path.abspath("extensions/tampermonkey-5.4.1"),
    ]

    # Build Camoufox kwargs
    camoufox_kwargs = {
      "addons": addon_paths,
      "headless": self.headless,
      "humanize": True,
      "os": ["macos", "windows", "linux"],
    }

    # Use persistent context if profile path is specified
    if self.profile_path:
      camoufox_kwargs["persistent_context"] = True
      camoufox_kwargs["user_data_dir"] = str(self.profile_path.absolute())

      # With persistent context, we get context directly
      self.camoufox = Camoufox(**camoufox_kwargs)
      self.context = self.camoufox.__enter__()
      self.browser = None  # No separate browser in persistent mode

      # Reuse existing page or create new one if none exist
      existing_pages = self.context.pages
      if existing_pages:
        self.page = existing_pages[0]
        # Close extra pages if any
        for page in existing_pages[1:]:
          try:
            page.close()
          except:
            pass
      else:
        self.page = self.context.new_page()
    else:
      # Normal mode - get browser first
      self.camoufox = Camoufox(**camoufox_kwargs)
      self.browser = self.camoufox.__enter__()

      # Load saved profile state if exists
      storage_state = None
      if self.profile_path and (self.profile_path / "state.json").exists():
        try:
          import json

          storage_state = json.loads((self.profile_path / "state.json").read_text())
          print("Loaded saved session state")
        except Exception as e:
          print(f"Could not load session state: {e}")

      # Create browser context
      context_kwargs = {
        "viewport": {"width": 1920, "height": 1080},
        "device_scale_factor": 1,
        "locale": "en-US",
        "timezone_id": "America/New_York",
        "permissions": ["geolocation"],
      }

      if storage_state:
        context_kwargs["storage_state"] = storage_state

      self.context = self.browser.new_context(**context_kwargs)
      self.page = self.context.new_page()

    # Set timeouts
    self.page.set_default_navigation_timeout(60000)
    self.page.set_default_timeout(30000)

    print("✓ Browser ready!")

  def configure_tampermonkey(self):
    """Open Tampermonkey dashboard and wait for configuration."""
    import os
    import re

    # Check if we should skip configuration
    if os.environ.get("SKIP_TM_CONFIG"):
      print("Skipping Tampermonkey configuration (SKIP_TM_CONFIG set)")
      return

    print("\n🔄 Opening Tampermonkey preferences...")

    # Find extension ID from profile directory
    profile_dir = self.profile_path or Path("./camoufox_profile")
    ext_id = None

    if profile_dir.exists():
      for json_file in profile_dir.rglob("*.json"):
        try:
          with open(json_file, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
            matches = re.findall(r"moz-extension://([0-9a-f-]+)", content)
            for match in matches:
              test_dir = profile_dir / "storage" / "default" / f"moz-extension+++{match}"
              if test_dir.exists() or "tampermonkey" in content.lower():
                ext_id = match
                break
          if ext_id:
            break
        except:
          continue

    # Fallback to common ID
    if not ext_id:
      ext_id = os.environ.get("EXT_ID")

    # Navigate to blank page first (helps extensions initialize)
    self.page.goto("about:blank")
    time.sleep(2)

    # Open Tampermonkey dashboard
    url = f"moz-extension://{ext_id}/options.html#nav=dashboard"

    try:
      self.page.goto(url)
    except Exception as e:
      print(f"Error occured \n {e}")
      # Try without hash fragment
      try:
        url = f"moz-extension://{ext_id}/options.html"
        self.page.goto(url, timeout=15000)
      except Exception:
        print(f"⚠️  Could not open Tampermonkey automatically")
        print("   Please click the Tampermonkey icon (🐵) in the toolbar")
        print("   and select 'Dashboard' to configure it")
        input("\nPress ENTER when ready to continue to scraper... ")
        return

    print(f"✓ Opened Tampermonkey dashboard")

    # Wait for user to configure
    print("\n⚠️  Configure Tampermonkey in the browser window, then...")
    input("Press ENTER in terminal to continue to scraper... ")

  def search(self, query: str, wait_for_results: bool = True) -> bool:
    """Search with human-like behavior."""
    import math

    print(f"Search: {query}")

    try:
      # Find search input
      selectors = [
        'input[id*="searchboxinput"]',
        'input[aria-label*="Search"]',
        'input[name="q"]',
      ]
      search_input = None
      for selector in selectors:
        try:
          input_field = self.page.locator(selector).first
          if input_field.count() > 0:
            input_field.wait_for(state="visible", timeout=5000)
            search_input = input_field
            break
        except:
          continue

      if not search_input:
        print("Search field not found")
        return False

      # Click
      search_input.click()

      # Clear
      search_input.fill("")
      time.sleep(random.uniform(0.3, 0.7))

      # Gaussian typing
      for char in query:
        if char == " ":
          mu = 60
        elif char in ".!":
          mu = 200
        elif char.isupper():
          mu = 120
        else:
          mu = 90

        sigma = 25
        u1, u2 = random.random(), random.random()
        z = math.sqrt(-2 * math.log(u1)) * math.cos(2 * math.pi * u2)
        delay_ms = max(20, mu + sigma * z)

        search_input.type(char, delay=delay_ms)

      # Press Enter
      time.sleep(random.uniform(0.5, 1.5))
      search_input.press("Enter")

      if wait_for_results:
        time.sleep(3)
        self.scroll_results()

      return True

    except Exception as e:
      print(f"Search error: {e}")
      return False

  def scroll_results(self, scroll_count: Optional[int] = None):
    """Scroll results using AutoScrollManager."""
    if scroll_count is not None:
      original_scroll_count = self.rate_limit.scroll_count
      self.rate_limit.scroll_count = scroll_count
      try:
        manager = AutoScrollManager(self.rate_limit, self.page)
        return manager.scroll_with_config()
      finally:
        self.rate_limit.scroll_count = original_scroll_count
    else:
      manager = AutoScrollManager(self.rate_limit, self.page)
      return manager.scroll_with_config()

  def stop(self):
    """Stop Camoufox and save profile."""
    # Save session state (only needed for non-persistent mode)
    if self.context and self.profile_path and not self.browser:
      try:
        import json

        self.profile_path.mkdir(parents=True, exist_ok=True)
        storage = self.context.storage_state()
        (self.profile_path / "state.json").write_text(json.dumps(storage, indent=2))

        print(f"✓ Session state saved to: {self.profile_path / 'state.json'}")
      except Exception as e:
        print(f"Could not save session state: {e}")

    if self.context:
      try:
        self.context.close()
      except Exception:
        pass

    if self.camoufox:
      self.camoufox.__exit__(None, None, None)
    print("Camoufox closed")


def scrape_google_maps(
  search_queries: list[str],
  headless: bool = False,
  profile_path: str = "./camoufox_profile",
):
  """Simple interface for scraping."""
  scraper = GoogleMapsScraper(headless=headless, profile_path=profile_path)

  try:
    scraper.start()

    for i, query in enumerate(search_queries, 1):
      print(f"\n{'=' * 50}")
      print(f"[{i}/{len(search_queries)}] {query}")
      print(f"{'=' * 50}")
      scraper.search(query)

    print("\nDone!")

  finally:
    scraper.stop()
