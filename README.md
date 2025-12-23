# Vault-Tec OS v4.0 | Portfolio

A retro-futuristic terminal experience inspired by Fallout aesthetics. This isn't just a portfolio; it's a simulated terminal interface built with React, TypeScript, and Framer Motion. 

I built this because I wanted to push the boundaries of "Glassmorphism" and see if I could make a website feel like a physical, mechanical object from the 70s.

## 🕹️ Why I Built This
Most portfolios look the same. I wanted something that felt **alive**. Getting the "CRT zap" and the "phosphor glow" to feel right was a massive headache. I spent way too many hours tweaking animation timings in Framer Motion just to get that specific "mechanical delay" you'd expect from a 50-year-old monitor.

The Dossier mode was originally supposed to be just a dark mode toggle, but it evolved into a full 3D environment once I realized how much better the "Vault-Tec" vibe works when you feel like you're actually looking at a classified physical file.

## 🛠️ Tech Stack & Struggles
*   **React 18 & Vite**: Standard choice for speed, but necessary for the complex state management between theme transitions.
*   **Framer Motion**: The backbone of the experience. Without the `AnimatePresence` logic, the "TV Power Off" effect would have looked like a cheap glitch.
*   **Three.js (R3F)**: Powering the "Sticks" background. **Performance Note:** I had to scale back the stick count from 200 to 120 because, while it looked great on my desktop, it was absolute murder on mobile GPUs.
*   **TailwindCSS**: Used for everything layout-related. Managing the "green-on-black" contrast while keeping text readable was a challenge.

## 📂 System Architecture
The project follows a "Shell-first" architecture:
-   `client/components`: Highly specialized UI modules (Terminal components, Snake game logic).
-   `client/hooks`: Custom logic for theme synchronization and language parsing.
-   `client/lib/terminal-db.tsx`: The centralized "database" for the terminal's VFS (Virtual File System).

## ⚡ Lessons Learned
1.  **3D is Heavy**: Real-time 3D backgrounds are cool, but optimization is king. I learned a lot about instanced meshes to keep the frame rate stable.
2.  **Typography Matters**: Finding the right balance between the pixelated `VT323` and readability was hard. 
3.  **i18n is more than translation**: Adapting the terminal commands to sound natural in both Polish and English required more than just literal translation—it required "contextual adaptation" (e.g., ensuring "POLECENIA" feels as authoritative as "COMMANDS").

## 🚀 Installation
```bash
pnpm install
pnpm dev
```

---
**Vault-Tec OS v4.0** - *Better Living, Underground.*
Developed by **Dawid Czerwiński**
