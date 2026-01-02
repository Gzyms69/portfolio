# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build client and server
RUN ls -F server/
RUN pnpm build:client
RUN pnpm build:server

# Stage 2: Run the server
FROM node:20-alpine

WORKDIR /app

# Install production dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --prod --frozen-lockfile

# Copy built assets
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 8080

# Start command (adjust based on your actual server entry point)
CMD ["node", "dist/server/node-build.mjs"]
