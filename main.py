#!/usr/bin/env python3
"""
Scrapka - Google Maps Scraper (Camoufox + Auto-scroll)

Opens Google Maps and auto-scrolls through search results.
Data is captured by the Tampermonkey script and sent to the local server.

Generates ALL COMBINATIONS of search terms × cities (many-to-many).

Usage:
    # Start the server first (in another terminal)
    uv run python server.py --output results.csv

    # Run scraper with CSV file
    uv run python main.py queries.csv

CSV Format:
    search,city,country
    медичний центр,київ,ua
    гінеколог,харків,
    косметолог,одеса,

Example: 3 search terms × 3 cities = 9 total queries
"""

import argparse
import csv
import random
import time
from pathlib import Path

from google_maps_scraper import GoogleMapsScraper, RateLimitConfig


def parse_csv(csv_file: str) -> list[dict]:
  """Parse CSV and generate all combinations of search terms × cities."""
  csv_path = Path(csv_file)
  if not csv_path.exists():
    raise FileNotFoundError(f"CSV not found: {csv_file}")

  # Collect unique search terms and cities
  search_terms = set()
  cities = {}  # city -> country mapping

  with open(csv_path, "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
      search = row.get("search", "").strip()
      city = row.get("city", "").strip()
      country = row.get("country", "").strip()

      if search:
        search_terms.add(search)
      if city:
        # Store city with its country (first occurrence wins if duplicates)
        if city not in cities:
          cities[city] = country

  if not search_terms:
    raise ValueError("No search terms found in CSV")
  if not cities:
    raise ValueError("No cities found in CSV")

  # Generate all combinations: search × city
  queries = []
  for search in sorted(search_terms):
    for city, country in sorted(cities.items()):
      query = f"{search} {city}"
      queries.append(
        {
          "search": search,
          "city": city,
          "country": country,
          "query": query,
        }
      )

  return queries


def run_scraper(args):
  """Run scraper from CSV file."""
  queries = parse_csv(args.csv_file)

  if not queries:
    print("❌ No queries found in CSV file")
    return

  print(f"\n{'=' * 60}")
  print("SCRAPKA - Google Maps Scraper")
  print(f"{'=' * 60}")
  print(f"Search terms × Cities = {len(queries)} total queries:")
  for i, q in enumerate(queries[:5], 1):
    location = f" ({q['city']}, {q['country']})" if q["city"] or q["country"] else ""
    print(f"  {i}. {q['query']}{location}")
  if len(queries) > 5:
    print(f"  ... and {len(queries) - 5} more")
  print(f"{'=' * 60}\n")

  print("⚠️  Make sure:")
  print("   1. Server is running: uv run python server.py")
  print("   2. Tampermonkey script is installed and active")
  print()
  input("Press ENTER to start browser... ")

  # Create rate limit config
  rate_config = RateLimitConfig(
    min_search_delay=args.min_delay,
    max_search_delay=args.max_delay,
    scroll_count=args.scrolls,
    scroll_speed=args.scroll_speed,
    scroll_interval_min=args.scroll_interval_min,
    scroll_interval_max=args.scroll_interval_max,
    auto_scroll_enabled=not args.no_auto_scroll,
  )

  # Create scraper
  scraper = GoogleMapsScraper(
    headless=args.headless,
    rate_limit_config=rate_config,
    profile_path=args.profile,
  )

  try:
    scraper.start()

    # Configure Tampermonkey before starting
    scraper.configure_tampermonkey()

    # Navigate to Google Maps
    print("\n🔄 Navigating to Google Maps...")
    scraper.page.goto(
      "https://www.google.com/maps",
      wait_until="domcontentloaded",
      timeout=30000,
    )
    time.sleep(3)
    print("✓ Google Maps loaded")

    input("\n🔄 Press ENTER when ready to start searching... ")

    print(f"\n{'=' * 60}")
    print("STARTING SEARCHES")
    print(f"{'=' * 60}\n")

    for i, q in enumerate(queries, 1):
      location = f" ({q['city']}, {q['country']})" if q["city"] or q["country"] else ""
      print(f"\n[{i}/{len(queries)}] Searching: {q['query']}{location}")
      print("-" * 40)

      success = scraper.search(q["query"], wait_for_results=True)

      if success:
        print("✓ Search completed")
      else:
        print("✗ Search failed")

      # Delay between searches
      if i < len(queries):
        delay = rate_config.get_search_delay()
        print(f"\n⏱️  Waiting {delay:.1f}s before next search...")
        time.sleep(delay)

    print(f"\n{'=' * 60}")
    print("ALL SEARCHES COMPLETED")
    print(f"{'=' * 60}")
    print("\nCheck the server for saved data.")

  finally:
    scraper.stop()


def main():
  parser = argparse.ArgumentParser(
    description="Scrapka - Google Maps Scraper (Auto-scroll)",
    formatter_class=argparse.RawDescriptionHelpFormatter,
    epilog="""
Examples:
  # Start server first (terminal 1)
  uv run python server.py --output results.csv

  # Run scraper (terminal 2)
  uv run python main.py queries.csv

  # Headless mode
  uv run python main.py queries.csv --headless

  # Even more aggressive scrolling
  uv run python main.py queries.csv --scrolls 20 --scroll-speed 3000 --scroll-interval-min 1

CSV Format:
  search,city,country
  медичний центр,київ,ua
  гінеколог,харків,
  косметолог,одеса,

Note: All search terms will be combined with all cities (many-to-many)
        """,
  )

  parser.add_argument("csv_file", help="CSV file with search queries")
  parser.add_argument(
    "--headless",
    action="store_true",
    help="Run browser without window",
  )
  parser.add_argument(
    "--profile",
    type=str,
    default="./camoufox_profile",
    help="Path to Camoufox profile (default: ./camoufox_profile)",
  )
  parser.add_argument(
    "--min-delay",
    type=float,
    default=5.0,
    help="Min delay between searches (default: 5)",
  )
  parser.add_argument(
    "--max-delay",
    type=float,
    default=15.0,
    help="Max delay between searches (default: 15)",
  )
  parser.add_argument(
    "--scrolls",
    type=int,
    default=15,
    help="Number of scrolls per search (default: 15)",
  )
  parser.add_argument(
    "--scroll-speed",
    type=int,
    default=2000,
    help="Pixels per scroll (default: 2000)",
  )
  parser.add_argument(
    "--scroll-interval-min",
    type=float,
    default=1.5,
    help="Min seconds between scrolls (default: 1.5)",
  )
  parser.add_argument(
    "--scroll-interval-max",
    type=float,
    default=3.0,
    help="Max seconds between scrolls (default: 3)",
  )
  parser.add_argument(
    "--no-auto-scroll",
    action="store_true",
    help="Disable auto-scroll",
  )

  args = parser.parse_args()

  try:
    run_scraper(args)
  except KeyboardInterrupt:
    print("\n\nStopped by user.")


if __name__ == "__main__":
  main()
