# Gemini Project Context: Vault-Tec OS Portfolio

## 1. Project Overview
**Name:** Vault-Tec OS Portfolio
**Type:** Retro-futuristic Interactive Portfolio
**Core Concept:** A dual-mode interface featuring a "Terminal Mode" (Fallout-inspired CLI) and a "Standard Mode" (Modern UI with retro aesthetics).
**Primary Tech Stack:** React, Vite, Tailwind CSS, Framer Motion.

## 2. Architecture & Structure

### Directory Map
- **`/client`**: The heart of the application. All frontend code lives here.
    - **`/components`**:
        - **`/ui`**: Reusable primitives (Buttons, Toasts, etc.).
        - **`ProjectCard.tsx`**: The signature component for displaying work.
        - **`TerminalConsole.tsx`**: The CLI interface implementation.
    - **`/lib`**:
        - **`terminal-logic.ts`**: Implements the virtual file system (VFS) and command parser.
    - **`/pages`**: Route-level components (`Index`, `CommsUplink`, `ServiceRecord`).
    - **`/hooks`**: Global state management (`use-background`, `use-language`).
- **`/server`**: Express app used as **middleware** in Vite for local dev APIs. Not used in the static production build (`dist/spa`).
- **`/shared`**: Types shared between client and server.

### Key Workflows
- **Development**: `npm run dev` (Starts Vite + Express middleware).
- **Build**: `npm run build` (Generates static assets in `dist/spa`).
- **Deploy**: GitHub Pages (via `.github/workflows/deploy.yml`).

## 3. Design Standards (CRITICAL)

### A. Typography & Aesthetics
- **Global Font**: `VT323` (Monospace). Enforced globally via `global.css`.
- **Exception**: `.resume-page` uses system sans-serif fonts for readability.
- **Colors**: Defined in `tailwind.config.ts`.
    - `primary`: Neon Green (`hsl(142.1 76.2% 36.3%)`).
    - `background`: Deep Terminal Black (`hsl(222.2 84% 5%)`).

### B. The "Project Card" Anatomy
**File:** `client/components/ProjectCard.tsx`
**Strict Rules for New Cards:**
1.  **Container**:
    - `bg-[#0a0f0a]` (Darker than standard background).
    - `border-2 border-primary/20` (Subtle green border).
    - `rounded-lg`.
    - **Corner Markers**: Absolute positioned `div`s with `border-l-2/t-2` in the corners to simulate a HUD.
2.  **Typography**:
    - Label: "Module_Data:" must be `text-[10px] font-mono text-primary/30 uppercase tracking-[0.3em]`.
    - Title: `text-3xl font-bold font-mono text-primary uppercase tracking-tight`. Uses `<GlitchText />`.
3.  **Images**:
    - Default state: `grayscale opacity-60`.
    - Hover state: `grayscale-0 opacity-100`.
    - Overlay: Scanline effect using `linear-gradient` pattern.
4.  **Interaction**:
    - Must use Framer Motion `layout` prop for smooth expansion.
    - Hover effect: Border glows (`border-primary/50`) and shadow increases.

### C. Terminal Logic
**File:** `client/lib/terminal-logic.ts`
- **Virtual File System**: A hardcoded object tree (`fileSystem`).
- **Adding Content**: To add a new "file" to the terminal, you must update the `fileSystem` object in this file. Do not expect it to read real files from the disk.

## 4. How to Modify Without Breaking
1.  **Adding Projects**:
    - Update `client/pages/Index.tsx` (or `DossierProjects.tsx`) to add the `<ProjectCard />`.
    - **AND** update `client/lib/terminal-logic.ts` to add the corresponding text entry in the `projects` directory of the VFS.
2.  **Styling**:
    - Use Tailwind utility classes.
    - Avoid inline styles.
    - If a new global animation is needed, add it to `tailwind.config.ts` under `extend`.
3.  **Deployment**:
    - Push to `main`. The GitHub Action will automatically build and deploy to `gh-pages`.
    - **Do not** manually edit `dist/`.

## 5. Quick Reference Commands
- **Check Types**: `npm run typecheck`
- **Lint**: `npm run lint`
- **Start Dev**: `npm run dev`

## 6. Architectural Design Principles (SENIOR STANDARDS)

### A. Interaction Stability Principle
*   **Decouple Events from Motion:** Never attach mouse/touch listeners to elements that undergo 3D transformations (`rotate`, `translateZ`) or heavy animations. 
*   **The Anchor Pattern:** Always use a static, 2D "Anchor" element to capture input. Drive the "Visual" child element via state/motion values. This prevents "recursive hit-testing loops" where an element moves out from under the cursor during its own animation.

### B. Layering & Stacking Context Integrity
*   **Root-Relative Backgrounds:** Any global visual effect (particles, shaders, ASCII rain) must exist at the document root level, sibling to the main content, to avoid being trapped in a parent's `transform` context (which breaks `fixed` positioning).
*   **Transparency over Opaque Overlays:** Avoid solid background colors on layout containers. Use `backdrop-blur` and semi-transparent themed layers to maintain visual depth without creating "dead zones" for the global background.

### C. Animation & Physics Hygiene
*   **Single Source of Truth for Motion:** Avoid mixing CSS Transitions (`transition: all`) with JavaScript physics engines (Framer Motion, GSAP). CSS transitions must be restricted to non-transform properties (colors, opacity) to prevent "frame-fighting" and stuttering.
*   **GPU over CPU:** Performance-heavy effects (glitch, scramble) must be offloaded to CSS Keyframes or `requestAnimationFrame`. Never use `setInterval` for visual updates.

### D. 3D Geometry Constraints
*   **Subtlety is Professionalism:** 3D Tilt effects should never exceed +/- 5 degrees. High angles distort hit-testing and degrade readability.
*   **Z-Space Hierarchy:** Use `translateZ` explicitly within `preserve-3d` contexts to establish a clear hierarchy of depth, ensuring interactive elements are physically "closer" to the user than decorative backgrounds.
