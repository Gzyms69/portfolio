#!/bin/bash

# Portfolio Development Server Script
# Usage: ./dev.sh start | stop

find_and_cleanup_ports() {
  echo "Searching for processes using ports 8080 and above..."

  # Find all ports starting from 8080 that are in use
  used_ports=$(lsof -i :8080- 2>/dev/null | grep LISTEN | awk '{print $2":"$8}' | cut -d':' -f2 | sort -u)

  if [ -z "$used_ports" ]; then
    echo "No dev server ports (8080+) appear to be in use."
    return
  fi

  echo "Found processes using the following ports:"
  for port in $used_ports; do
    pids=$(lsof -ti :$port 2>/dev/null)
    echo "  Port $port: Process(es) $pids"
  done

  read -p "Kill these processes? (y/n): " confirm
  if [[ "$confirm" =~ ^[Yy]$ ]]; then
    echo "Killing processes..."
    for port in $used_ports; do
      pids=$(lsof -ti :$port 2>/dev/null)
      if [ ! -z "$pids" ]; then
        echo "$pids" | xargs kill -9
      fi
    done
    echo "Cleanup complete."
  else
    echo "Cleanup canceled."
  fi
}

if [ "$1" = "start" ]; then
  # Clean up any existing processes first
  find_and_cleanup_ports

  echo "Starting portfolio development server..."
  echo "Server will be available on http://localhost:8080 (or next available port)"

  # Open browser after a short delay to let server start
  (
    sleep 3
    # Open browser (works on Windows with Git Bash)
    if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
      start http://localhost:8080
    elif [[ "$OSTYPE" == "darwin"* ]]; then
      open http://localhost:8080
    else
      xdg-open http://localhost:8080
    fi
  ) &

  # Start dev server (in foreground)
  pnpm dev

elif [ "$1" = "stop" ]; then
  echo "Stopping all development servers..."
  find_and_cleanup_ports

else
  echo "Usage: ./dev.sh start | stop"
  echo "  start: Start development server (after optional cleanup)"
  echo "  stop: Stop all running processes on ports 8080+ (with confirmation)"
fi
