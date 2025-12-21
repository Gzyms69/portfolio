# Performance Testing Instructions

Your portfolio website is now running on **http://localhost:8081/**

## Quick Start Performance Testing

### 1. Enable Core Web Vitals Logging

Open your browser's Developer Console (F12) and run:

```javascript
localStorage.setItem('debug-vitals', 'true');
location.reload();
```

You'll see real-time Core Web Vitals metrics logged to the console as they occur:
```
📊 Core Web Vitals Monitoring Enabled
⏱️  LCP (Largest Contentful Paint): 1234.56ms
🖱️  FID (First Input Delay): 45.23ms
📐 CLS (Cumulative Layout Shift): 0.015
🎨 FCP (First Contentful Paint): 876.34ms
🌐 TTFB (Time to First Byte): 12.45ms
```

---

## Complete Performance Testing Workflow

### Step 1: Lighthouse Audit (Built-in Chrome DevTools)

**This gives you a comprehensive performance score**

1. **Open DevTools**: F12
2. **Go to Lighthouse Tab** (or use menu: ⋮ → More tools → Lighthouse)
3. **Select categories**: Performance, Accessibility, Best Practices, SEO
4. **Click "Analyze page load"**
5. **Wait ~60 seconds** for full report
6. **Review results**:
   - Performance Score (0-100)
   - Metrics section (LCP, FID, CLS, etc.)
   - Opportunities (what to optimize)
   - Diagnostics (what's slowing it down)

**Record these findings** in [PERFORMANCE.md](PERFORMANCE.md) under "Lighthouse Baselines"

---

### Step 2: Core Web Vitals Real-Time Monitoring

**Track actual user experience metrics**

1. **Enable debug mode** (run console command above)
2. **Reload page**: F5
3. **Scroll through the page** - watch console for metrics
4. **Hover over project cards** - check animation impact
5. **Click on links** - watch for CLS issues
6. **Wait 5+ seconds** - capture final metrics

**Expected Output** (varies by device):
```
⏱️  LCP: 1200-2500ms (target: <2.5s)
🖱️  FID: 10-100ms (target: <100ms)
📐 CLS: 0.01-0.05 (target: <0.1)
🎨 FCP: 800-1500ms (target: <1.8s)
🌐 TTFB: 10-50ms (target: <600ms)
```

---

### Step 3: Animation Performance Profiling

**Measure frame rates and CPU usage during animations**

#### 3a: Scroll Performance
1. Open DevTools → **Performance tab**
2. Click **Record** button
3. **Scroll slowly** through entire page to bottom
4. **Stop recording**
5. Analyze:
   - Look for **FPS meter** (should stay at 60 FPS)
   - Check **"Main"** thread (red bars = long tasks)
   - Identify which components cause drops

**Specific areas to test**:
- Home page initial scroll
- Hover on each ProjectCard
- Scroll quickly to stress test

#### 3b: Hover/Interaction Performance
1. Open DevTools → **Performance tab**
2. Click **Record**
3. **Hover over a ProjectCard** (hold for 2 seconds)
4. **Move mouse away**
5. **Stop recording**
6. Check frame rate consistency

#### 3c: GlitchText Rendering
1. Open DevTools → **Performance tab**
2. Click **Record**
3. **Hover over the title** text for 3 seconds
4. **Stop recording**
5. Note the 40ms render intervals in the timeline

---

### Step 4: Mobile Performance Testing

**Simulate mobile devices with throttling**

1. Open DevTools
2. Click **Device Toolbar** (Ctrl+Shift+M on Windows/Linux)
3. **Select device**: iPhone 12 or Pixel 6
4. **Enable throttling**:
   - Click **⋮** → More tools → Network conditions
   - **CPU Throttling**: Select "4x slowdown"
   - **Network**: Select "Slow 4G"
5. **Test interactions**:
   - Reload page - measure load time
   - Scroll through content - watch FPS
   - Hover on cards - check responsiveness
   - Open modals - measure interaction delay

**Checklist**:
- [ ] Page loads without blocking interactions
- [ ] Scroll remains smooth at 30+ FPS on 4x CPU throttle
- [ ] Touch interactions respond within 100ms
- [ ] No layout shifts during scroll

---

### Step 5: Bundle Size Analysis

**See which dependencies are largest**

1. **Build the project**:
```bash
cd /mnt/c/Users/PC/portfolio
pnpm run build 2>&1 | tee build.log
```

2. **Check output sizes**:
```bash
# List all chunks by size
ls -lh dist/spa/_assets/ | sort -k5 -h
```

3. **Review dependency sizes**:
   - Look for `three.` chunks (Three.js)
   - Look for `framer-motion` references
   - Check main bundle size

4. **Generate visualization** (optional):
```bash
# This creates an interactive HTML visualization
pnpm run build -- --mode analyze
# Opens dist/stats.html in browser
```

---

### Step 6: Network Waterfall Analysis

**See what's loading and how long each request takes**

1. Open DevTools → **Network tab**
2. **Clear logs** (trash icon)
3. **Hard reload** (Ctrl+Shift+R to bypass cache)
4. **Analyze**:
   - Which files take longest to load?
   - Are large files (Three.js) blocking rendering?
   - Any requests in parallel vs sequential?

**Expected sequence**:
```
1. HTML (should load first)
2. CSS (critical for above-fold)
3. JS chunks (can delay non-critical content)
4. Images (lazy load after scroll)
```

---

## Performance Issues Found & Solutions

### Issue #1: Three.js Library (150KB+)
- **Problem**: Loads on every page, not just home
- **Impact**: +150KB to initial bundle, slows first page load
- **Solution** (Priority: HIGH):
  1. Make Three.js load only on demand
  2. Show CSS gradient fallback while loading
  3. Lazy-load component when visible

### Issue #2: Simultaneous Scroll Listeners
- **Problem**: ScrollProgress + ProjectCard scroll tracking
- **Impact**: Multiple RAF calls, high CPU on scroll
- **Solution** (Priority: HIGH):
  1. Consolidate into single scroll context
  2. Use passive event listeners
  3. Throttle updates to 30FPS on mobile

### Issue #3: Lenis Smooth Scroll + Framer Motion RAF
- **Problem**: Two competing RAF loops fighting for control
- **Impact**: Frame drops on lower-end devices
- **Solution** (Priority: MEDIUM):
  1. Disable Lenis on mobile
  2. Use CSS scroll-behavior for simplicity
  3. Limit animation complexity on low-end devices

### Issue #4: GlitchText 40ms Interval
- **Problem**: Character scrambling runs at 25 FPS independently
- **Impact**: CPU spike when active, janky text
- **Solution** (Priority: MEDIUM):
  1. Increase interval to 100ms or longer
  2. Reduce character count being scrambled
  3. Disable on mobile/low-end devices

### Issue #5: ProjectCard 3D Animations
- **Problem**: Multiple springs per card (rotateX, rotateY, parallax)
- **Impact**: 10+ cards × multiple animations = CPU intensive
- **Solution** (Priority: MEDIUM):
  1. Reduce animation complexity (rotate only X OR Y, not both)
  2. Use will-change CSS for GPU acceleration
  3. Disable on mobile or low-end devices

---

## Optimization Priority Order

Based on performance impact:

1. **CRITICAL** - Lazy-load Three.js background (150KB savings + FCP improvement)
2. **CRITICAL** - Consolidate scroll listeners (reduce RAF overhead)
3. **HIGH** - Reduce ProjectCard animation complexity (smooth scroll)
4. **HIGH** - Optimize GlitchText rendering (CPU usage)
5. **MEDIUM** - Code-split page routes (reduce initial bundle)
6. **MEDIUM** - Lazy-load images in ProjectCard
7. **LOW** - CSS optimizations (minor improvements)

---

## Testing Commands

```bash
# Start dev server
./dev.sh start

# Stop dev server
./dev.sh stop

# Build for production (shows bundle sizes)
pnpm run build

# Build with bundle visualization (requires mode config)
pnpm run build -- --mode analyze

# Start production server (test real perf)
pnpm start
```

---

## Metrics Reference

| Metric | Target | Current |
|--------|--------|---------|
| **LCP** (Largest Contentful Paint) | < 2.5s | TBM |
| **FID** (First Input Delay) | < 100ms | TBM |
| **CLS** (Cumulative Layout Shift) | < 0.1 | TBM |
| **FCP** (First Contentful Paint) | < 1.8s | TBM |
| **TTFB** (Time to First Byte) | < 600ms | TBM |
| **Lighthouse Score** | > 90 | TBM |
| **Bundle Size (gzipped)** | < 300KB | TBM |
| **Mobile FPS** (on 4x throttle) | > 30 FPS | TBM |

**TBM** = To Be Measured (use testing steps above)

---

## Quick Copy-Paste Console Commands

```javascript
// Enable vitals monitoring
localStorage.setItem('debug-vitals', 'true'); location.reload();

// Measure page height and content
console.log('Page Height:', document.documentElement.scrollHeight, 'px');
console.log('Total Images:', document.querySelectorAll('img').length);

// Measure animation count
console.log('Animated Elements:', document.querySelectorAll('[style*="transform"]').length);

// Check bundle load
console.log('Resources:', performance.getEntriesByType('resource').map(r => ({
  name: r.name.split('/').pop(),
  duration: r.duration.toFixed(0) + 'ms',
  size: (r.transferSize/1024).toFixed(1) + 'KB'
})));
```

---

## Next Steps After Testing

1. **Document findings** in PERFORMANCE.md baselines tables
2. **Prioritize optimizations** by impact
3. **Implement changes** for highest-impact items
4. **Re-test** with same methodology
5. **Compare metrics** to baseline
6. **Iterate** until targets are met

Happy testing! 🚀
