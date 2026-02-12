#!/bin/bash

# Scrapka - Playwright Firefox Scraper starter script

# Default CSV file
DEFAULT_CSV="data/search_ua_params.csv"

# Check if output file is provided
if [ $# -lt 1 ]; then
    echo "Usage: $0 <output_file> [csv_file] [extra_args...]"
    echo "Example: $0 output.csv"
    echo "Example: $0 output.csv data/my_params.csv --scroll-speed 1000 --export-format xlsx"
    echo "Example: $0 output.json --scroll-interval-min 3 --no-auto-scroll"
    echo ""
    echo "Default CSV file: $DEFAULT_CSV"
    echo "Extra args: --scroll-speed, --scroll-interval-min, --scroll-interval-max, --no-auto-scroll, --export-format, --log-level, etc."
    exit 1
fi

OUTPUT_FILE="$1"
CSV_FILE="${2:-$DEFAULT_CSV}"

# If CSV_FILE is an argument flag (starts with --), treat as no CSV file provided
if [[ "$CSV_FILE" == --* ]]; then
    CSV_FILE="$DEFAULT_CSV"
    EXTRA_ARGS=("${@:2}")
else
    EXTRA_ARGS=("${@:3}")
fi

# Check if CSV file exists
if [ ! -f "$CSV_FILE" ]; then
    echo "Error: CSV file not found: $CSV_FILE"
    exit 1
fi

echo "Using CSV file: $CSV_FILE"
echo "Output will be saved to: $OUTPUT_FILE"
echo "Extra arguments: ${EXTRA_ARGS[@]}"
echo ""

# Run the scraper with all arguments
uv run python main.py "$CSV_FILE" "$OUTPUT_FILE" "${EXTRA_ARGS[@]}"
