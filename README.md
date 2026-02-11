# Vault-Tec OS Portfolio

A high-performance, retro-futuristic terminal experience inspired by Fallout aesthetics and 1970s mechanical hardware. This interactive portfolio explores the intersection of glassmorphism, 3D environments, and mechanical UI design.

---

## Tech Stack

### Frontend Core
- React 18 & Vite: Lightning-fast state management and build pipeline.
- TypeScript: Strict typing for data integrity across the "OS".
- Framer Motion: Powering complex layout transitions and "mechanical" UI animations.
- Tailwind CSS: Utility-first styling with custom CRT phosphor themes.

### 3D & Effects
- Three.js (React Three Fiber): An immersive 3D scene for Dossier Mode.
- Post-processing: Custom CRT scanlines, screen curvature, and bloom effects.

### Data & Infrastructure
- Web3Forms: Integrated serverless contact system.
- Playwright: Automated screenshot engine for real-time project card updates.
- Express/Node.js: Backend logic for form handling and service record retrieval.

---

## Key Features

### Interactive Terminal CLI
A fully functional command-line interface. Users can navigate the site, trigger system commands, and access "classified" data through a vintage terminal prompt.

### Dossier Mode (3D Environment)
A transition from the digital terminal into a physical "classified file" aesthetic. This mode uses Three.js to render a 3D desk environment where projects are presented as physical dossiers.

### Dual Language Support
Full localization for English and Polish. The system dynamically adapts technical terminology and "OS" messages to maintain immersion in both languages.

### Service Record (Resume)
A dedicated, print-optimized resume generator that produces a clean, A4-formatted PDF version of the developer's experience and education.

---

## Flagship Projects

### WikiGraph Lab
A language-agnostic Knowledge Graph engine. It processes Wikipedia database dumps into a hybrid Neo4j (Topological) + SQLite (Metadata) structure, enabling sub-millisecond pathfinding and similarity scoring.

### LeadFinder & Katalog Ecosystem
An end-to-end sales automation pipeline.
- Pipeline (Python): Automated scraping engine with Playwright-patched logic.
- Marketplace (Next.js 15): A high-performance Turborepo marketplace featuring a Dynamic Sales Architecture for personalized "Magic Link" demos.

### ROMHub
A privacy-focused, browser-based N64 emulator running entirely on the client side via WebAssembly (WASM).

---

## Development

### Setup
1. Clone: git clone https://github.com/Gzyms69/portfolio.git
2. Install: pnpm install
3. Run: pnpm dev

### Automation Scripts
The project includes specialized utilities in scripts/:
- capture_local.cjs: Uses Playwright to take fresh high-res screenshots of the live site for the "Portfolio" project card.
- dev.sh: A multi-purpose controller for starting/stopping the stack in local or Docker environments.

---

## Architecture
The project follows an Offline-First philosophy where data is strictly separated from UI components in client/lib/terminal-db.tsx, allowing the entire "OS" to function instantly without database latency.

---
**Vault-Tec OS v4.0** | *Better Living Through Technology*
