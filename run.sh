#!/usr/bin/env bash
# Sabi Grow Local Dev & Preview Runner

PORT=8080
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "🌱 Starting Sabi Grow preview server at http://localhost:$PORT ..."
echo "📁 Serving directory: $DIR"
echo "Press Ctrl+C to stop."

# Open in default browser after 1 second
(sleep 1 && open "http://localhost:$PORT") &

# Start python3 http server
cd "$DIR" && python3 -m http.server "$PORT"
