# Vault-Tec OS Portfolio

A retro-futuristic terminal experience inspired by Fallout aesthetics. This is a simulated terminal interface built with React, TypeScript, and Framer Motion.

## Project Overview

This portfolio project explores the concept of glassmorphism and captures the feel of a physical, mechanical object from the 1970s. The interface is designed to feel responsive and weighted, with CRT effects and phosphor glow that mimic the mechanical delay expected from a vintage monitor.

What began as a simple dark mode toggle evolved into a full 3D environment to better suit the classified physical file aesthetic of Dossier mode.

## Features

- Interactive Terminal: A functional command-line interface with custom commands
- Dual Language Support: Full support for both English and Polish
- Retro Aesthetics: Custom CRT effects, scanlines, and vintage typography
- 3D Environment: An immersive view for project details and dossiers
- Responsive Design: Optimized for both desktop and mobile performance

## Tech Stack

- React 18 & Vite: For state management and rapid development
- Framer Motion: Handles complex animation logic and transitions
- Three.js (React Three Fiber): Powers the interactive 3D background elements
- TailwindCSS: Manages layout and styling with a focus on high-contrast readability

## Project Structure

- `client/`: Contains the React frontend, including terminal logic and UI components
- `server/`: Node.js backend for handling API requests
- `shared/`: Shared TypeScript types and utilities used by both client and server
- `docs/`: Detailed documentation regarding performance, security, and architecture
- `scripts/`: Utility scripts for development and deployment

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Gzyms69/portfolio.git
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

## Development Scripts

The project includes a utility script `scripts/dev.sh` to simplify development tasks:

- **Start Local Server**:
  ```bash
  ./scripts/dev.sh start
  ```
- **Stop Local Server**:
  ```bash
  ./scripts/dev.sh stop
  ```
- **Run in Docker**:
  ```bash
  ./scripts/dev.sh docker-start
  ```
- **Stop Docker**:
  ```bash
  ./scripts/dev.sh docker-stop
  ```

## Key Technical Insights

- **3D Optimization**: Real-time 3D backgrounds require careful optimization. Using instanced meshes helped maintain a stable frame rate across different devices
- **Typography and Readability**: Balancing the retro VT323 font with modern readability standards was a key design challenge
- **Contextual Localization**: Internationalization involves more than direct translation. Commands and system messages were adapted to maintain a consistent tone in both languages

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Portfolio by Dawid Czerwiński
