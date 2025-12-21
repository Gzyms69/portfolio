# Portfolio Website Performance Analysis & Optimization Guide

**Last Updated**: December 21, 2025

## Executive Summary

Your portfolio website prioritizes visual interactivity and design polish over performance optimization. Current implementation includes heavy dependencies (Three.js, Framer Motion, Lenis) and CPU-intensive animations that may negatively impact mobile users and slow devices.

**Performance Status**: ⚠️ **ATTENTION NEEDED**
- Desktop: Excellent visual experience, moderate performance
- Mobile: Potential lag, high battery drain
- Slow Networks: Slower page load due to Three.js library

---

## Performance Testing Setup

### 1. Core Web Vitals Monitoring

Web Vitals are automatically logged to the browser console. To enable detailed monitoring:

```bash
# In browser console, run:
localStorage.setItem('debug-vitals', 'true')
# Then reload the page
```

**Key Metrics Tracked**:
- **LCP** (Largest Contentful Paint) - Target: < 2.5s
- **FID** (First Input Delay) - Target: < 100ms  
- **CLS** (Cumulative Layout Shift) - Target: < 0.1
- **FCP** (First Contentful Paint) - Target: < 1.8s
- **TTFB** (Time to First Byte) - Target: < 600ms

Monitor these in:
- Chrome DevTools Console
- Production logs
- Analytics platforms (Netlify, Vercel)

### 2. Bundle Analysis

Analyze your bundle size and identify heavy dependencies:

```bash
# Generate bundle visualization
pnpm run build -- --mode analyze

# This creates dist/stats.html - open in browser to see:
# - Chunk breakdown by component
# - Dependency sizes (Three.js, Framer Motion, etc.)
# - Opportunities for code-splitting
```

### 3. Animation Performance Profiling

Use Chrome DevTools to measure frame rates and animation overhead:

1. **Open DevTools** → Performance Tab
2. **Record** → Interact with page (scroll, hover on cards, open modals)
3. **Stop recording** → Analyze:
   - **Frame rate**: Should maintain 60 FPS (16.67ms per frame)
   - **Long tasks**: Any task > 50ms blocks interactions
   - **RAF overhead**: Multiple RAF calls (Framer Motion + Three.js + Lenis)

**Test These Scenarios**:
- Home page initial load
- Scroll through project cards
- Hover on interactive elements
- Open/close modals (SnakeGame)
- Route navigation (page transitions)

### 4. Mobile Performance Testing

Simulate mobile devices with throttling:

1. **Chrome DevTools** → Device toolbar (Ctrl+Shift+M)
2. **Click throttling** → CPU throttle: 4x slowdown
3. **Network**: Select "Slow 4G" or custom throttle
4. **Measure**:
   - Time to Interactive (TTI)
   - Scroll smoothness (60 FPS target)
   - Touch response lag

**Critical Issues on Mobile**:
- Lenis smooth scroll vs native mobile scroll
- Three.js rendering at full resolution
- Simultaneous spring physics animations

### 5. Build Performance

```bash
# Measure build time and output size
pnpm run build

# Check output:
ls -lh dist/spa/_assets/
# Look for:
# - Main bundle size (target: < 200KB gzipped)
# - Chunk sizes (identify Three.js, Framer Motion sizes)
```

---

## Current Performance Baselines

### Bundle Metrics (⚠️ To be measured)

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Total Bundle Size (gzipped) | TBM | < 200KB | ❓ |
| Main JS Chunk | TBM | < 150KB | ❓ |
| Three.js Library | ~150KB | < 50KB (lazy) | ❌ |
| Framer Motion | ~52KB | ~35KB (tree-shake) | ⚠️ |
| Code Coverage | TBM | > 80% used | ❓ |

**TBM** = To Be Measured (run bundle analysis)

### Core Web Vitals Baselines (⚠️ To be measured)

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| LCP | TBM | < 2.5s | ❓ |
| FID | TBM | < 100ms | ❓ |
| CLS | TBM | < 0.1 | ❓ |
| FCP | TBM | < 1.8s | ❓ |
| TTFB | TBM | < 600ms | ❓ |

**TBM** = To Be Measured (enable vitals monitoring)

### Animation Performance Baselines (⚠️ To be profiled)

| Component | FPS | CPU Time | Status |
|-----------|-----|----------|--------|
| Home Page (scrolling) | TBP | TBP | ❓ |
| ProjectCard (hover) | TBP | TBP | ❓ |
| GlitchText (active) | TBP | TBP | ❓ |
| InteractiveBackground (Three.js) | TBP | TBP | ❓ |
| Route Transition | TBP | TBP | ❓ |

**TBP** = To Be Profiled (use DevTools Performance tab)

### Mobile Performance Baselines (⚠️ To be tested)

| Device | TTI | Scroll FPS | CPU Throttle | Status |
|--------|-----|-----------|--------------|--------|
| iPhone 12 (simulated) | TBT | TBT | 4x | ❓ |
| Pixel 6 (simulated) | TBT | TBT | 4x | ❓ |
| Slow 4G Network | TBT | TBT | Throttled | ❓ |

**TBT** = To Be Tested

---

## Performance Hotspots Identified

### Critical Issues (High Impact)

#### 1. **Three.js Background Animation** ⚠️⚠️⚠️
- **Location**: [client/components/InteractiveBackground.tsx](client/components/InteractiveBackground.tsx)
- **Issue**: Loads 150KB+ Three.js library for all users on page load
- **Impact**: 
  - +150KB to initial bundle
  - Continuous rendering of 600+ 3D objects
  - 60 FPS drain on lower-end devices
- **Status**: Loaded always, not lazy
- **Optimization Path**: Lazy-load on demand, fallback to CSS gradient

#### 2. **Lenis Smooth Scroll RAF Loop** ⚠️⚠️
- **Location**: [client/components/SmoothScroll.tsx](client/components/SmoothScroll.tsx)
- **Issue**: Continuous requestAnimationFrame for smooth scroll
- **Impact**:
  - Conflicts with Framer Motion RAF
  - High CPU usage on mobile
  - Disables native scroll optimization
- **Status**: Always active
- **Optimization Path**: Detect mobile, disable on low-end devices

#### 3. **Simultaneous Spring Animations** ⚠️⚠️
- **Location**: [client/components/ProjectCard.tsx](client/components/ProjectCard.tsx)
- **Issue**: Multiple Framer Motion springs per card (rotateX, rotateY, parallax)
- **Impact**:
  - Springs run physics calculations every frame
  - 10+ cards = 50+ simultaneous animations
  - Compound on scroll listeners
- **Status**: Active on all cards
- **Optimization Path**: Reduce animation complexity, use will-change CSS

#### 4. **GlitchText CPU Intensive Effect** ⚠️⚠️
- **Location**: [client/components/GlitchText.tsx](client/components/GlitchText.tsx)
- **Issue**: Character scrambling on 40ms interval + SVG filters
- **Impact**:
  - 25 FPS re-render loop (not 60 FPS)
  - Multiple DOM nodes per character
  - SVG filter redraws
- **Status**: Active on page title
- **Optimization Path**: Reduce character count, increase interval, remove on mobile

### High Priority Issues

#### 5. **Scroll Listener Storm** ⚠️
- **Issue**: [ScrollProgress.tsx](client/components/ScrollProgress.tsx) + each ProjectCard has useScroll()
- **Impact**: Multiple scroll event listeners
- **Solution**: Single scroll listener context, broadcast to components

#### 6. **PageTransition Route Animations** ⚠️
- **Issue**: Full-screen slide + perspective on every route change
- **Impact**: Heavy on slower devices, noticeable delay
- **Solution**: Conditional animations based on device capability

#### 7. **No Code Splitting** ⚠️
- **Issue**: All pages loaded upfront (Index, Contact, CV)
- **Impact**: Larger initial bundle
- **Solution**: React lazy loading + Suspense

#### 8. **Image Optimization** ⚠️
- **Issue**: Project images in ProjectCard not optimized
- **Impact**: Large uncompressed images
- **Solution**: WebP with fallbacks, lazy loading, responsive srcset

---

## Performance Testing Checklist

### Phase 1: Baseline Measurement (This Week)

- [ ] **Bundle Analysis**
  - [ ] Run: `pnpm run build -- --mode analyze`
  - [ ] Record: Total bundle size (gzipped)
  - [ ] Record: Three.js chunk size
  - [ ] Record: Framer Motion chunk size
  - [ ] Document in table above

- [ ] **Core Web Vitals**
  - [ ] Enable: `localStorage.setItem('debug-vitals', 'true')`
  - [ ] Load production build: `pnpm start`
  - [ ] Record: LCP, FID, CLS, FCP, TTFB
  - [ ] Test 5x, average results
  - [ ] Document in baselines table

- [ ] **Animation Performance**
  - [ ] DevTools > Performance tab
  - [ ] Test: Home scroll (scroll to bottom)
  - [ ] Test: ProjectCard hover (all cards)
  - [ ] Test: GlitchText render (title)
  - [ ] Record: Frame rate, long tasks
  - [ ] Document FPS and CPU time

- [ ] **Mobile Performance**
  - [ ] DevTools Device Mode > iPhone 12
  - [ ] CPU Throttle: 4x slowdown
  - [ ] Network: Slow 4G
  - [ ] Record: TTI, scroll smoothness
  - [ ] Repeat for Pixel 6
  - [ ] Document results

### Phase 2: Optimization (Next Week)

Priority order by impact:
1. Lazy-load Three.js InteractiveBackground
2. Reduce animation complexity on mobile
3. Add code-splitting for pages
4. Optimize project images
5. Consolidate scroll listeners

### Phase 3: Re-baseline & Validation

- [ ] Run all tests again after each optimization
- [ ] Track improvements in metrics
- [ ] Update baselines table
- [ ] Validate mobile performance

---

## Performance Best Practices Applied

✅ **Completed**:
- Web Vitals monitoring integrated ([client/App.tsx](client/App.tsx))
- Vite visualizer plugin configured for bundle analysis
- DevTools profiling methodology documented

⚠️ **In Progress**:
- Initial baseline measurements (pending execution)
- Optimization planning per hotspot

📋 **Next Steps**:
1. Execute Phase 1 testing checklist
2. Document actual metrics in baselines tables
3. Prioritize optimizations by impact/effort
4. Implement high-impact changes
5. Re-measure and iterate

---

## Debugging Commands

### Enable Vitals Logging
```javascript
// In browser console:
localStorage.setItem('debug-vitals', 'true');
location.reload();
```

### Build for Analysis
```bash
pnpm run build -- --mode analyze
# Opens dist/stats.html automatically
```

### Production Build Performance Test
```bash
pnpm build  # Creates dist/
pnpm start  # Runs in production mode on port 8080
# Test in browser, check console for vitals
```

### Mobile Throttling Test
```
Chrome DevTools:
- Ctrl+Shift+M (Device Mode)
- CPU Throttle: 4x slowdown
- Network: Slow 4G
- Scroll & interact to measure FPS
```

---

## Performance Budget Guidelines

Once baselines are established, maintain these budgets:

```
Main JS Chunk: ≤ 150KB (gzipped)
Total Bundle: ≤ 300KB (gzipped)
Images: ≤ 50KB per image (WebP)
LCP: ≤ 2.5s
FID: ≤ 100ms
CLS: ≤ 0.1
FCP: ≤ 1.8s
```

---

## References

- [Web.dev Core Web Vitals](https://web.dev/vitals/)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)
- [Vite Visualizer Plugin](https://github.com/btd/rollup-plugin-visualizer)
- [Framer Motion Performance](https://www.framer.com/motion/animation-performance/)
- [Three.js Performance](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects)

---

## Notes

- This document is a living guide - update metrics and add findings as testing progresses
- Share baseline measurements with team for awareness
- Use metrics to drive optimization decisions (data-driven)
- Profile in production builds, not dev mode (dev has extra overhead)
