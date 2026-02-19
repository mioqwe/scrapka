"""
Google Maps Scraper - Simplified sync version with auto-scroll only
"""

import random
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Optional

from camoufox.addons import DefaultAddons

# from camoufox.addons import download_and_extract
# TAMPER = "https://addons.mozilla.org/firefox/downloads/file/4624137/tampermonkey-5.4.1.xpi"


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
    """Start Camoufox browser."""
    from camoufox.sync_api import Camoufox

    print("Starting Camoufox...")

    # Load saved profile state if exists
    storage_state = None
    if self.profile_path and (self.profile_path / "state.json").exists():
      try:
        import json

        storage_state = json.loads((self.profile_path / "state.json").read_text())
        print("Loaded saved profile")
      except Exception as e:
        print(f"Could not load profile: {e}")

    # Start Camoufox with addons (use absolute paths for local addons)
    import os

    addon_paths = [
      os.path.abspath("extensions/tampermonkey-5.4.1"),
    ]
    self.camoufox = Camoufox(
      addons=addon_paths,
      headless=self.headless,
      humanize=True,
      os=["macos", "windows", "linux"],
    )

    self.browser = self.camoufox.__enter__()

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
    """Stop Camoufox."""
    if self.context and self.profile_path:
      try:
        import json

        self.profile_path.mkdir(parents=True, exist_ok=True)
        storage = self.context.storage_state()
        (self.profile_path / "state.json").write_text(json.dumps(storage, indent=2))
        print(f"Profile saved: {self.profile_path}")
      except Exception as e:
        print(f"Could not save profile: {e}")

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
