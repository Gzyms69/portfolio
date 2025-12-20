# Portfolio Animation Overhaul TODO

Implementing techniques from Olivier Larose's "Top 5 Techniques for Web Animation".

## 1. Foundational Smooth Scroll
- [ ] Install and configure **Lenis Scroll** for smooth, non-jerky momentum scrolling.
- [ ] Ensure compatibility with React and existing scroll-to-section logic.

## 2. Text Splitting (Typography)
- [ ] Implement character/word splitting for the Hero Title ("Dawid Czerwiński").
- [ ] Add staggered reveal animations for the split text using Framer Motion.
- [ ] Apply to section headers ("Projects", etc.).

## 3. Viewport Detection & Reveal
- [ ] Create a reusable `Reveal` component using Framer Motion's `whileInView`.
- [ ] Apply "mask-up" or "fade-slide" reveals to Project Cards.
- [ ] Ensure cards stagger as they enter the viewport.

## 4. Scroll Tracking & Parallax
- [ ] Use `useScroll` and `useTransform` to add subtle parallax to the `GradientBackground` in project cards.
- [ ] Add a scroll-progress indicator (e.g., a slim bar at the top or a circular indicator).

## 5. Sticky Transitions
- [ ] Experiment with sticky-positioned headers or a "stacked card" effect for the projects section.

## 6. Polishing & Easing
- [ ] Replace standard easings with custom `cubic-bezier` curves or spring physics for a more "organic" feel.
- [ ] Implement a custom LERP-based cursor (optional/bonus).
