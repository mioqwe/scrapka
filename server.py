#!/usr/bin/env python3
"""
Google Maps Scraper Server

Receives data from Tampermonkey script and saves to CSV.

Usage:
    # Install dependencies
    uv pip install fastapi uvicorn

    # Run server
    uv run python server.py

    # Or with custom port/output file
    uv run python server.py --port 8080 --output data.csv
"""

import argparse
import csv
import json
import os
from datetime import datetime
from pathlib import Path
from typing import Any

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from uvicorn import run

# CSV columns order
CSV_COLUMNS = [
  "name",
  "fullAddress",
  "phones",
  "website",
  "domain",
  "averageRating",
  "reviewCount",
  "categories",
  "openingHours",
  "placeId",
  "kgmid",
  "cid",
  "latitude",
  "longitude",
  "googleMapsURL",
  "googleKnowledgeURL",
  "featuredImage",
  "scrapedAt",
]

# Stats
stats = {
  "received": 0,
  "saved": 0,
  "errors": 0,
  "start_time": datetime.now(),
}


class DataItem(BaseModel):
  """Single data item from Google Maps."""

  name: str | None = None
  fullAddress: str | None = None
  phones: str | None = None
  website: str | None = None
  domain: str | None = None
  averageRating: float | None = None
  reviewCount: int | None = None
  categories: str | None = None
  openingHours: str | None = None
  placeId: str | None = None
  kgmid: str | None = None
  cid: str | None = None
  latitude: float | None = None
  longitude: float | None = None
  googleMapsURL: str | None = None
  googleKnowledgeURL: str | None = None
  featuredImage: str | None = None
  scrapedAt: str | None = None


class DataBatch(BaseModel):
  """Batch of data items."""

  items: list[DataItem]


class ServerResponse(BaseModel):
  """Server response."""

  status: str
  received: int
  saved: int
  message: str | None = None


def create_app(output_file: str) -> FastAPI:
  """Create FastAPI application."""
  app = FastAPI(
    title="Google Maps Scraper Server",
    description="Receives data from Tampermonkey script and saves to CSV",
    version="2.0.0",
  )

  # Add CORS middleware
  app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (Tampermonkey runs on any site)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
  )

  # Ensure output file exists with headers
  def init_csv():
    output_path = Path(output_file)
    if not output_path.exists():
      output_path.parent.mkdir(parents=True, exist_ok=True)
      with open(output_file, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_COLUMNS)
        writer.writeheader()
      print(f"📄 Created new CSV file: {output_file}")

  def append_to_csv(items: list[dict[str, Any]]) -> int:
    """Append items to CSV file. Returns number of saved items."""
    saved = 0
    with open(output_file, "a", newline="", encoding="utf-8") as f:
      writer = csv.DictWriter(f, fieldnames=CSV_COLUMNS)
      for item in items:
        # Filter only defined columns
        row = {col: item.get(col, "") for col in CSV_COLUMNS}
        writer.writerow(row)
        saved += 1
    return saved

  @app.on_event("startup")
  async def startup():
    init_csv()
    print(f"\n{'=' * 60}")
    print("🚀 Google Maps Scraper Server")
    print(f"{'=' * 60}")
    print(f"📁 Output file: {os.path.abspath(output_file)}")
    print(f"🌐 Server: http://localhost:{args.port}")
    print(f"{'=' * 60}\n")

  @app.get("/")
  async def root():
    """Root endpoint."""
    return {
      "service": "Google Maps Scraper Server",
      "version": "2.0.0",
      "endpoints": {
        "health": "/health",
        "data": "/api/data (POST)",
        "stats": "/stats",
      },
    }

  @app.get("/health")
  async def health():
    """Health check endpoint."""
    return {
      "status": "ok",
      "timestamp": datetime.now().isoformat(),
    }

  @app.get("/stats")
  async def get_stats():
    """Get server statistics."""
    uptime = datetime.now() - stats["start_time"]
    return {
      "received": stats["received"],
      "saved": stats["saved"],
      "errors": stats["errors"],
      "uptime_seconds": uptime.total_seconds(),
      "output_file": os.path.abspath(output_file),
    }

  @app.post("/api/data", response_model=ServerResponse)
  async def receive_data(batch: DataBatch):
    """Receive data from Tampermonkey script."""
    try:
      # Convert items to dicts
      items = [item.model_dump() for item in batch.items]

      stats["received"] += len(items)

      # Append to CSV
      saved = append_to_csv(items)
      stats["saved"] += saved

      print(f"[{datetime.now().strftime('%H:%M:%S')}] 📥 Received: {len(items)}, 💾 Saved: {saved} | Total: {stats['saved']}")

      return ServerResponse(
        status="success",
        received=len(items),
        saved=saved,
        message=f"Data saved to {output_file}",
      )

    except Exception as e:
      stats["errors"] += 1
      print(f"❌ Error: {e}")
      return ServerResponse(
        status="error",
        received=len(batch.items),
        saved=0,
        message=str(e),
      )

  return app


def main():
  global args
  parser = argparse.ArgumentParser(
    description="Google Maps Scraper Server",
    formatter_class=argparse.RawDescriptionHelpFormatter,
    epilog="""
Examples:
  # Run with defaults (port 8080, output.csv)
  uv run python server.py

  # Custom port and output file
  uv run python server.py --port 9000 --output ./data/results.csv

  # View stats
  curl http://localhost:8080/stats
        """,
  )

  parser.add_argument(
    "--port",
    type=int,
    default=8080,
    help="Server port (default: 8080)",
  )
  parser.add_argument(
    "--output",
    type=str,
    default="output.csv",
    help="Output CSV file (default: output.csv)",
  )
  parser.add_argument(
    "--host",
    type=str,
    default="127.0.0.1",
    help="Server host (default: 127.0.0.1)",
  )

  args = parser.parse_args()

  app = create_app(args.output)

  try:
    run(app, host=args.host, port=args.port, log_level="warning")
  except KeyboardInterrupt:
    print("\n\n👋 Server stopped by user")
    print(f"📊 Total received: {stats['received']}")
    print(f"💾 Total saved: {stats['saved']}")
    print(f"📁 Output: {os.path.abspath(args.output)}")


if __name__ == "__main__":
  main()
