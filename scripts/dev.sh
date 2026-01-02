#!/bin/bash

# Portfolio Development Server Script
# Usage: ./dev.sh [command]

find_free_port() {
  local port=8080
  while lsof -i :$port >/dev/null 2>&1; do
    port=$((port+1))
  done
  echo $port
}

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

case "$1" in
  start)
    # Clean up any existing processes first
    # find_and_cleanup_ports # Optional: auto-cleanup or let user manage

    PORT=$(find_free_port)
    echo "Starting portfolio development server on port $PORT..."
    
    # Open browser after a short delay to let server start
    (
      sleep 3
      # Open browser (works on Windows with Git Bash)
      if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
        start http://localhost:$PORT
      elif [[ "$OSTYPE" == "darwin"* ]]; then
        open http://localhost:$PORT
      else
        xdg-open http://localhost:$PORT
      fi
    ) &

    # Start dev server (in foreground)
    # Vite will use the port specified
    pnpm dev --port $PORT
    ;;

  stop)
    echo "Stopping all development servers..."
    find_and_cleanup_ports
    ;;

  docker-start)
    PORT=$(find_free_port)
    echo "Building and starting Docker container on port $PORT..."
    docker build -t portfolio-app . && \
    docker run -d -p $PORT:8080 --name portfolio-app portfolio-app
    echo "Container 'portfolio-app' started on http://localhost:$PORT"
    ;;

  docker-stop)
    echo "Stopping Docker container..."
    docker stop portfolio-app
    docker rm portfolio-app
    echo "Container 'portfolio-app' stopped and removed."
    ;;

  *)
    echo "Usage: ./dev.sh [command]"
    echo "Commands:"
    echo "  start       : Start local development server (auto-detects port)"
    echo "  stop        : Stop local development server processes"
    echo "  docker-start: Build and run via Docker (auto-detects port)"
    echo "  docker-stop : Stop and remove Docker container"
    ;;
esac
