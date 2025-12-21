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
- [ ] **TypeScript Rigor**: Enable `strict: true` in `tsconfig.json` to fix potential type errors and improve code safety.
- [ ] **Linting Standard**: Configure ESLint with `typescript-eslint` to enforce code quality beyond simple formatting.
- [ ] **Test Coverage**: Expand `vitest` suite to cover core components and server routes. Currently only minimal utility tests exist.
- [ ] **Shared Code**: Populate `shared/` directory with meaningful types shared between Client and Server to ensure end-to-end type safety.
