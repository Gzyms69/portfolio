#!/bin/bash

# Portfolio Development Server Script
# Starts the development server and opens browser

echo "Starting portfolio development server..."
echo "Opening http://localhost:8080"

# Open browser (works on Windows with Git Bash)
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
  start http://localhost:8080
elif [[ "$OSTYPE" == "darwin"* ]]; then
  open http://localhost:8080
else
  xdg-open http://localhost:8080
fi

# Start dev server
pnpm dev
