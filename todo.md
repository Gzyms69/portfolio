# Portfolio Animation Overhaul TODO

Implementing techniques from Olivier Larose's "Top 5 Techniques for Web Animation" and advanced interactive features.

## 1. Foundational Smooth Scroll
- [x] Install and configure **Lenis Scroll** for smooth, non-jerky momentum scrolling.
- [x] Ensure compatibility with React and existing scroll-to-section logic.

## 2. Text Splitting (Typography)
- [x] Implement character/word splitting for the Hero Title ("Dawid Czerwiński").
- [x] Add staggered reveal animations for the split text using Framer Motion.
- [x] Apply to section headers ("Projects", etc.).

## 3. Viewport Detection & Reveal
- [x] Create a reusable `Reveal` component using Framer Motion's `whileInView`.
- [x] Apply "mask-up" or "fade-slide" reveals to Project Cards.
- [x] Ensure cards stagger as they enter the viewport.

## 4. Scroll Tracking & Parallax
- [x] Use `useScroll` and `useTransform` to add subtle parallax to the `GradientBackground` in project cards.
- [x] Add a scroll-progress indicator (e.g., a slim bar at the top or a circular indicator).

## 5. Sticky Transitions
- [x] Experiment with sticky-positioned headers or a "stacked card" effect for the projects section.

## 6. Polishing & Easing
- [x] Replace standard easings with custom `cubic-bezier` curves or spring physics for a more "organic" feel.
- [x] Implement a custom LERP-based cursor (optional/bonus).

## 7. Phase 2: High-End Interactive Features
- [x] **Page Transitions**: Implement "curtain" or cross-fade transitions using `AnimatePresence`.
- [x] **Magnetic Interactions**: Add "pull" effect to navigation icons and primary buttons.
- [x] **Advanced Content Reveal**: Use clip-paths/masks for unrolling project card content.
- [x] **Shader Background**: Enhance the interactive background with a liquid/grainy shader effect (using Three.js or high-end CSS/SVG).

## 8. Technical Debt & Quality Improvements
- [x] **TypeScript Rigor**: `strict: true` is enabled. (Evaluated with AI: deeper strictness like `noUncheckedIndexedAccess` deemed unnecessary for this project scope).
- [x] **Linting Standard**: Configure ESLint with `typescript-eslint` to enforce code quality beyond simple formatting.
- [ ] **Test Coverage**: Expand `vitest` suite to cover core components and server routes. Currently only minimal utility tests exist.
- [x] **Shared Code**: Centralized core types (Language, Project, GlobalConfig, etc.) in `shared/types.ts` for end-to-end consistency.

## 9. Snake Game Enhancements
- [ ] **Power-ups**: Add special items that give temporary abilities (speed boost, invincibility, extra points).
- [ ] **Multiple Levels**: Create progressively challenging levels with obstacles and mazes.
- [ ] **Sound Effects**: Integrate retro-style sound effects for movement, eating food, and game over.
- [x] **High Score Persistence**: Store high scores in localStorage with ability to reset.
- [x] **Game Controls UI**: Add on-screen controls for mobile/touch devices.
- [ ] **Visual Themes**: Add different visual themes for the snake game (different color schemes, textures).
- [ ] **Pause Functionality**: Allow players to pause/resume the game.
- [ ] **Statistics Tracking**: Track games played, win rate, longest snake, etc.

## 10. Fallout Terminal UI Improvements
- [x] **Enhanced CRT Effects**: Improved scanlines and flicker logic in `GlitchTransition`.
- [x] **Terminal Animations**: Add typing animations for text content, loading sequences, and boot-up screens.
- [x] **Interactive Console**: Built `TerminalConsole` with bilingual support (`terminal-logic.ts`).
- [ ] **System Status Panel**: Create a persistent status panel showing "system stats" (CPU, memory, etc.).
- [x] **Animated Brackets**: Integrated into `TerminalFrame` and `NavButton`.
- [x] **Glitch Effects**: Implemented `GlitchTransition` and `Sync Jitter` in casing.
- [x] **Loading Screens**: Implemented high-speed terminal boot sequence with data-stream logs.
- [ ] **Custom Cursors**: Replace default cursors with terminal-themed ones.

## 12. Fancy Collapsible Navigation Menu
- [x] **Default Hidden State**: Menu is collapsed by default with a `Power` toggle.
- [x] **Expansion Animation (The Power-Up)**:
    - [x] Added "CRT Boot" glitch effect via `GlitchTransition`.
    - [x] Implemented "Geometric Assembly" via `TerminalFrame`.
    - [ ] Create a "Digital Dust" particle burst radiating from the toggle.
- [x] **Expanded State Polish**:
    - [x] Applied subtle Fisheye distortion and `Sync Jitter`.
- [x] **Collapse Animation (The Power-Down)**:
    - [x] Implemented "TV Turn-Off" effect in `GlitchTransition`.
    - [x] Added "Phosphor Afterglow" look.
- [x] **Interaction & 3D**:
    - [x] Minimalist flat casing with depth shadows implemented.
    - [x] **Mobile-First Navigation**: Fullscreen responsive menu for mobile devices.
    - [ ] Integrate mechanical "clunk" and digital "whine" sound effects (optional).

## 13. Impressive Theme Toggle (Hardware Mode Switch)
- [x] **Transition Glitch**: Implement a full-screen dynamic noise burst when toggling backgrounds to mask the switch.
- [x] **3D Icon Animation**: Add a flipping or spinning 3D transition to the theme icon in the navigation menu.
- [x] **Haptic Surge**: Trigger a momentary brightness spike or color inversion across the UI during the "re-tuning" process.
- [x] **Kernel Status Logs**: Automatically output system messages to the terminal console (or a small HUD) when themes change.

## 14. "Interactive OS" File System (Navigation & Discovery)
- [x] **Command-Line Navigation**: Enabled navigation via terminal commands (`cd`, `ls`, `cat`).
- [x] **3D Document Reveal**: Implemented a physical 3D folder "slide-out" animation when opening files.
- [x] **Decoded Documents**: Created a specialized document viewer with decryption animations and flickering redaction bars.

## 15. Generative "Digital Ghost" (Keystroke & Physics)
- [x] **Keystroke Jolt**: Triggered a chromatic aberration pulse or screen "jolt" synced to console typing.
- [x] **Idle Logo Assembly**: Background particles settle into a cog logo when the mouse is idle for 5+ seconds.

## 16. "Scrollytelling" Boot Sequence
- [ ] **Scroll-Linked HUD**: A persistent sidebar HUD that changes state based on scroll position (`BIOS_LOAD`, `DATA_MOUNT`, etc.).
- [ ] **Live Wireframe HUD**: Display a rotating 3D wireframe model in the HUD that changes based on the hovered tech stack or project.
- [x] **Section "Power-Up"**: Animated section transitions as if different hardware modules are receiving power as they enter the viewport.
