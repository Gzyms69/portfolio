# Project Documentation: Dawid Czerwiński's Portfolio

This document provides a comprehensive overview of the portfolio project, detailing its architecture, key features, and development guidelines. It serves as a guide for understanding the codebase and navigating it during development.

---

## 1. Project Overview

This project is a personal portfolio website designed to showcase projects with a unique **Retro-Futuristic Terminal (Fallout-inspired)** aesthetic. It features interactive elements, dynamic backgrounds, a functional contact form, a minigame, and full localization support. The primary goal is to create an immersive and highly stylized experience for visitors.

---

## 2. Key Technologies

The project leverages a modern web development stack:

*   **Frontend**:
    *   **React 18**: For building the user interface.
    *   **TypeScript**: For type safety and improved code quality.
    *   **Vite**: As the build tool for a fast development experience.
    *   **Tailwind CSS**: For utility-first CSS styling, enabling rapid UI development.
    *   **Framer Motion**: For declarative and fluid animations, key to the interactive and dynamic elements.
    *   **Three.js**: For rendering the 3D "sticks" interactive background.
    *   **Lucide React**: For a consistent set of SVG icons.
    *   **React Router DOM**: For client-side routing.
*   **Fonts**:
    *   **VT323**: For general terminal text (readable monospace).
    *   **Major Mono Display**: For abstract/stylized text (e.g., terminal titles, some UI elements for unique feel).
*   **Backend/Deployment**:
    *   **Netlify Forms**: For handling contact form submissions without custom backend logic.
    *   **Express.js / Node.js**: (Existing `server/` directory, currently not fully utilized for frontend features).

---

## 3. Project Structure

The project follows a standard React/Vite application structure:

```
portfolio/
├── client/                      # Frontend (React/TypeScript) source code
│   ├── components/              # Reusable UI components
│   │   ├── ui/                  # UI primitives (buttons, dialogs, etc.)
│   │   ├── ContactForm.tsx      # Contact form component
│   │   ├── GlitchImage.tsx      # Pixelated image reveal for project cards
│   │   ├── Navigation.tsx       # Main navigation sidebar/mobile bar
│   │   ├── ProjectCard.tsx      # Interactive project display cards
│   │   └── SnakeGame.tsx        # The pixel-art Snake minigame component
│   ├── hooks/                   # Custom React hooks (e.g., useTheme, useBackground, useLanguage)
│   ├── lib/                     # Utility functions, constants, data definitions
│   │   └── data.tsx             # Centralized project data and translations
│   └── pages/                   # Top-level page components (Index, Contact, CV, NotFound)
├── public/                      # Static assets (images, favicon, robots.txt)
├── scripts/                     # Utility scripts (e.g., for screenshot capture)
├── server/                      # Backend (Node.js/Express) source code (currently light)
│   └── routes/                  # API routes (e.g., contact form endpoint)
├── .github/                     # GitHub specific configurations (e.g., workflows for GitHub Actions)
│   └── workflows/
│       └── deploy.yml           # GitHub Actions workflow for deployment (currently reverted)
├── package.json                 # Project dependencies and scripts
├── netlify.toml                 # Netlify specific configuration
├── postcss.config.js            # PostCSS configuration (TailwindCSS)
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── vite.config.ts               # Vite build configuration
```

---

## 4. Core Features & Implementation Details

### 4.1. Fallout Terminal Aesthetic

The entire UI is styled to mimic a retro-futuristic computer terminal, inspired by games like Fallout.

*   **Fonts**:
    *   `font-['VT323']`: Used for most readable text, labels, and UI elements.
    *   `font-['Major_Mono_Display']`: Used sparingly for prominent titles (`SNAKE`, `PROJECTS`) and some UI elements to create an abstract, "corrupted data" feel.
*   **Color Palette**: Dominated by dark backgrounds (`#0a0f0a`, `#030712`) and a vibrant **primary green (`--primary`)** for text and accents, with **amber (`#ffaa00`)** and **yellow (`#ffff00`)** used for secondary highlights (e.g., Snake food, glitch effects).
*   **CRT Effects**:
    *   **Scanlines**: Subtle horizontal lines (`linear-gradient` overlays) creating a CRT screen texture.
    *   **Flicker**: Minimal, slow-pulsing white `motion.div` overlays with low opacity for an authentic screen flicker.
    *   **Glow**: `drop-shadow` and `box-shadow` on text and elements to simulate phosphor glow.
    *   **Borders & Brackets**: Components feature thick, green borders and decorative corner brackets for a rugged, industrial terminal look.

### 4.2. Interactive Backgrounds

The background can be toggled between two modes, accessible via the `[ THEME / BACKGROUND ]` button in the navigation.

*   **`ascii` Mode (Default)**:
    *   **Implementation**: Canvas 2D rendering in `InteractiveBackground.tsx`.
    *   **Effect**: Falling "Matrix rain" characters with varying speeds, sizes, and colors (green, amber, yellow) for depth.
    *   **Performance**: Highly optimized, uses lightweight Canvas 2D API.
*   **`sticks` Mode**:
    *   **Implementation**: Three.js rendering in `InteractiveBackground.tsx`.
    *   **Effect**: Falling 3D stick-like objects with ambient lighting.
    *   **Performance**: Shadows disabled for significant performance boost, pixel ratio capped at 1.5, `powerPreference: "high-performance"`.
*   **Persistence**: The chosen background type is saved in `localStorage` via the `useBackground` hook and persists across sessions.

### 4.3. Project Cards (`client/components/ProjectCard.tsx`)

*   **Terminal Frame**: Each card is encased in a terminal-style frame with corner brackets and status bars.
*   **Image Reveal**: Uses `client/components/ui/GlitchImage.tsx` to display project screenshots.
    *   **Effect**: A smooth fade from grayscale to color with a subtle zoom, minimalist scanlines, and corner accents, creating a "Digital Dossier" feel.
    *   **Content**: Images are high-quality stock photos from Pexels, representing the project's theme.
*   **Interactive Hover**:
    *   **3D Tilt**: Subtle 3-degree rotation on hover based on mouse position.
    *   **CRT Jitter**: Minimal position jitter (1px range, 0.8s duration) with soft chromatic aberration (green/amber layers, low opacity, high blur) simulating a "screen interference" effect.
*   **Smooth Expansion**: Cards expand smoothly using `framer-motion`'s `layout` animations and a `cubic-bezier` easing. When expanded, the card scrolls into the center of the viewport.
*   **Content Styling**: Project titles, descriptions, and buttons use `VT323` font and terminal-style prompts.

### 4.4. Contact Form (`client/components/ContactForm.tsx`)

*   **Location**: Integrated on the right side of the Hero section on `Index.tsx`.
*   **Terminal Style**: Follows the same aesthetic as project cards (frame, fonts, colors, CRT effects).
*   **Functionality**:
    *   Frontend form with fields for Name, Email, Subject, Message.
    *   Submits data to a Netlify Forms endpoint. (Email notifications require Netlify deployment).
    *   Clears form fields on successful submission.
    *   Local submission status shown via `alert()` for development.
*   **Localization**: All labels and placeholders are translated via `useLanguage` hook.

### 4.5. Snake Minigame (`client/components/SnakeGame.tsx`)

*   **Accessibility**: Opened as a modal from the left navigation menu via a confirmation dialog.
*   **Pixel Art Visuals**:
    *   **Game Board**: Clear pixel grid overlay with CRT effects.
    *   **Snake**: Pixelated segments, with a head featuring animated "eyes" that track movement direction.
    *   **Food**: Pixelated "data byte" square with a pulsing inner pixel.
*   **Gameplay**:
    *   Classic Snake mechanics (arrow keys to move, eat food to grow).
    *   Speed increases with score.
    *   High score tracking (session-based).
*   **Terminal UI**: Scores, game-over screen, and buttons are styled with `VT323` and `Major Mono Display` fonts.
*   **Exit Mechanism**: Dedicated "EXIT_SYSTEM" button returns to the main page.
*   **Modal Implementation**:
    *   Uses `client/components/ui/TerminalDialog.tsx` for a styled confirmation prompt.
    *   The game itself is rendered in a full-screen `motion.div` modal, allowing the background to persist.

### 4.6. Localization (i18n)

*   **Hook**: `client/hooks/use-language.tsx` provides the `language` state and a `t()` (translate) function.
*   **Data Structure**: Translations for UI strings and content (bio, project descriptions) are stored in `client/lib/data.tsx` under `pl` and `en` keys.
*   **Default**: Polish (`pl`) is the default language.
*   **Switcher**: A `[ JEZYK ]` / `[ LANG ]` toggle in the navigation menu.

### 4.7. Navigation (`client/components/Navigation.tsx`) & Footer (`client/components/Footer.tsx`)

*   **Unified Terminal Style**: Both components fully adhere to the Fallout terminal aesthetic with `VT323` font, primary green accents, corner brackets (on navigation container), and terminal status displays.
*   **Responsive**: Desktop sidebar and mobile top bar.
*   **Functionality**: Links for Home, Projects, Background Toggle, Language Toggle, GitHub, and Snake Minigame.
*   **Footer**: Displays copyright, build version, and system status in a terminal-like fashion.

---

## 5. Development Workflow

*   **Start Development Server**: `npm run dev`
    *   The `--host` flag is included to allow access from other devices on your local network (e.g., for mobile testing using your local IP address).
*   **Build for Production**: `npm run build`
*   **Type Checking**: `npm run typecheck`
*   **Code Formatting**: `npm run format.fix`

---

## 6. Troubleshooting & Debugging

*   **"Page doesn't load" / Blank Screen**:
    *   Check your terminal for compilation errors (from `npm run dev` or `npm run typecheck`).
    *   Check your browser's console (F12) for runtime JavaScript errors.
    *   Ensure all React components are correctly imported and exported.
    *   Verify JSX syntax (balanced tags).
*   **Background Always Green**:
    *   This usually indicates the `useBackground` hook is consistently returning `'ascii'`.
    *   Clear `localStorage` for `portfolio-bg-type` in browser DevTools -> Application -> Local Storage.
    *   Perform a hard refresh (`Ctrl+Shift+R`).
*   **Framer Motion Warnings (`useScroll` non-static container)**:
    *   Ensure the `body` tag in `client/global.css` has `position: relative;`.
*   **Netlify Form `404` Locally**:
    *   This is expected. Netlify Forms only processes submissions when deployed on Netlify. It will work correctly in production.
*   **Unclickable Elements after Modal**:
    *   Ensure modal overlays (like `TerminalDialog` or the Snake game modal) have `pointerEvents: 'none'` on their `exit` animation to prevent blocking clicks during fade-out.

---

## 7. Future Enhancements

*   **Contact Form Backend**: Implement the `server/routes/contact.ts` endpoint (or a Netlify Function) for more robust form handling, custom success messages, and server-side validation.
*   **Full CV Localization**: Translate all content on the CV page to English.
*   **Mobile Responsiveness**: Thoroughly test and refine the UI across various mobile devices and screen sizes.
*   **Accessibility (a11y)**: Improve keyboard navigation, ARIA attributes, and color contrast ratios where needed.
*   **Minigame Expansion**:
    *   **Snake Power-ups**: Special items for speed, invincibility, or extra points.
    *   **Fallout Hacking**: A hacking puzzle minigame inspired by the Fallout series.
    *   **Memory Game**: A retro-themed memory card game.
*   **Terminal Interactivity**:
    *   **Interactive Console**: A functional terminal emulator for executing basic commands (e.g., `help`, `about`, `contact`).
    *   **Enhanced CRT Effects**: Advanced simulations of phosphor glow, realistic flicker, and phosphor decay.
    *   **Animated Boot-up**: Terminal-style loading sequences and boot screens for page transitions.
*   **Audio Integration**: Retro-style sound effects (beeps, clicks, hums) and optional low-fi background music to enhance the terminal atmosphere.

---

This documentation should provide a solid foundation for anyone looking to understand, maintain, or expand upon this project.