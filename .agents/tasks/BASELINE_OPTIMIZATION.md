# BASELINE OPTIMIZATION AUDIT REPORT
## Rohit Survase Portfolio — Pre-Optimization Baseline

**Generated:** 23 October 2026  
**Working Directory:** `c:\Users\surva\Desktop\PORTFOLIO\video-portfolio-template`  
**Purpose:** Document current state before responsive design, image conversion & performance optimization

---

## 1. PRODUCTION BUILD METRICS

### Build Status: ✅ SUCCESS (with ESLint warning)

```
⚠️ ESLint: Invalid Options: - Unknown options: useEslintrc, extensions - 'extensions' has been removed.
```

### Route Analysis

| Route              | Size   | First Load JS |
|--------------------|--------|---------------|
| `/` (Homepage)     | 132 kB | 219 kB        |
| `/_not-found`      | 873 B  | 88.1 kB       |

### Shared JavaScript Bundles

| Bundle                                  | Size    |
|-----------------------------------------|---------|
| **Total First Load JS (Shared)**        | 87.3 kB |
| `chunks/117-7cf1ef3231a909f2.js`        | 31.7 kB |
| `chunks/fd9d1056-20a4ee49978263e4.js`   | 53.6 kB |
| Other shared chunks                     | 1.9 kB  |

### Key Findings
- ✅ Production build completes successfully
- ⚠️ ESLint configuration uses deprecated options (non-blocking)
- ✅ First Load JS for homepage: **219 kB** (reasonable for portfolio site)
- ✅ Page-specific JS: **132 kB** for main route

---

## 2. IMAGE ASSET INVENTORY

### Current Assets (All Unoptimized)

| Filename                                        | Format  | Size (KB)  | Status         | References                                    |
|-------------------------------------------------|---------|------------|----------------|-----------------------------------------------|
| `profile_image.png`                             | PNG     | 1,892.53   | ❌ UNOPTIMIZED | HeroSection, Navbar, FeaturedVideo (3 refs)   |
| `book_image.jpeg`                               | JPEG    | 223.22     | ❌ UNOPTIMIZED | Publications component (1 ref)                |
| `icon.png`                                      | PNG     | 552.90     | ❌ UNOPTIMIZED | `app/layout.js` metadata (favicon/apple icon) |
| `hero-bg-video.mp4`                             | MP4     | 2,150.27   | ⚠️ LARGE VIDEO | HeroSection component                         |
| `Rohit_Survase_Software_Developer_Resume.pdf`   | PDF     | 49.02      | ✅ OPTIMIZED   | HeroSection download link                     |
| `python-fundamentals-core-concepts.pdf`         | PDF     | 6,012.77   | ℹ️ DOCUMENT    | Publications download link                    |

### Detailed References

#### `profile_image.png` (1,892.53 KB — **CRITICAL OPTIMIZATION TARGET**)
- **HeroSection.jsx** (line 206): Loader overlay — 20x20 / 24x24 rounded avatar
- **Navbar.jsx** (line 94): Small screen nav — 8x8 rounded avatar  
- **Navbar.jsx** (line 200): Large screen nav — 10x10 rounded avatar  
- **FeaturedVideo.jsx** (line 33): Next.js `<Image>` component with `fill` (responsive)  
  - `sizes="(max-width: 768px) 80vw, 40vw"`
  - Priority loading enabled
  - Aspect ratio: `[3/4]` mobile, `[856/1024]` desktop

#### `book_image.jpeg` (223.22 KB)
- **Publications.jsx** (line 135): Book cover display
  - Max width: 280px
  - Object-fit: contain
  - Shadow and hover scale animation

#### `icon.png` (552.90 KB — **SEVERE BLOAT**)
- **app/layout.js** (lines 19-20): Favicon and Apple touch icon metadata
- **Issue:** 552 KB is excessive for a favicon (should be <50 KB, ideally <20 KB)

#### `hero-bg-video.mp4` (2.10 MB)
- **HeroSection.jsx** (line 245): Full-screen background video
- **Current state:** 
  - Preload: `auto` (aggressive)
  - PlaysInline: Yes
  - Autoplay with audio attempt → fallback to muted
  - Session-based autoplay flag

---

## 3. FONT AUDIT

### Fonts Loaded via Next.js Font Optimization

**File:** `app/layout.js`

```javascript
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],  // 4 weights
  display: 'swap',
})
```

### External Font Imports (NOT OPTIMIZED)

**File:** `app/globals.css`

#### Google Fonts (via CDN)
```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@800;900&family=Anton&family=Inter:wght@300;400;500;600;700;800&display=swap');
```

**Fonts loaded:**
- Bebas Neue (unknown weights)
- Barlow Condensed (800, 900)
- Anton (unknown weights)
- Inter (300, 400, 500, 600, 700, 800) — **DUPLICATE OF NEXT/FONT**

#### CDN Fonts (cdnfonts.com)
```css
@import url('https://fonts.cdnfonts.com/css/druk-heavy');
```

**Plus two `@font-face` declarations:**
- Druk Condensed Bold (700-900)
- Neue Montreal Medium (500)

### Font Loading Issues

| Issue                                    | Impact                                          | Priority |
|------------------------------------------|-------------------------------------------------|----------|
| **Inter loaded twice**                   | Duplicate requests, wasted bandwidth            | HIGH     |
| **External CDN fonts**                   | Render-blocking, no preconnect                  | HIGH     |
| **4 Google Font families**               | Multiple network requests                       | MEDIUM   |
| **2 additional @font-face from CDN**     | Unoptimized loading, no fallbacks               | MEDIUM   |
| **Total font weights: 10+ variants**     | Excessive weight for actual usage               | MEDIUM   |

---

## 4. RESPONSIVE DESIGN AUDIT

### Tailwind Breakpoints Defined

**File:** `tailwind.config.js`

```
Default Tailwind breakpoints in use:
- sm: 640px
- md: 768px  
- lg: 1024px
- xl: 1280px
- 2xl: 1536px
```

### Custom Breakpoints (globals.css)

```css
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile landscape */ }
@media (max-width: 480px)  { /* Mobile portrait */ }
```

### Responsive Patterns Found

#### ✅ Well-Implemented Responsive Components

1. **HeroSection.jsx**
   - Mobile: `left-6`, `sm:left-12`, `lg:left-20` (fluid spacing)
   - Text: `text-3xl`, `sm:text-4xl`, `lg:text-[2.95rem]`
   - Max-width constraint: `max-w-[480px]` prevents overflow
   - Overlay: `bg-bg/85` on mobile, transparent on `lg:bg-transparent`

2. **CoreSkills.jsx**
   - Grid: `grid-cols-1`, `sm:grid-cols-2`, `lg:grid-cols-3`, `xl:grid-cols-4`
   - Padding: `py-12`, `sm:py-16`, `md:py-20`
   - Text: `text-3xl`, `sm:text-4xl`, `md:text-5xl`, `lg:text-6xl`

3. **Publications.jsx**
   - Layout: `flex-col` → `lg:flex-row`
   - Book image: Constrained with `max-w-[280px]`
   - Grid: Single column on mobile, responsive spacing

4. **Navbar.jsx**
   - Mobile: Full overlay menu (`lg:hidden`)
   - Desktop: Fixed navbar (`hidden lg:flex`)
   - Avatar sizes: `w-8` mobile → `w-10` desktop

#### ⚠️ Potential Responsive Issues

1. **HeroSection Hero Heading (globals.css)**
   ```css
   #hero-heading {
     font-size: 20vw;  /* Mobile may be too large */
     white-space: nowrap;  /* Mobile override: normal */
   }
   ```
   - **Risk:** 20vw on 320px = 64px (acceptable)
   - **Mitigation exists:** Mobile media query changes to `clamp(3.2rem, 14vw, 6rem)`

2. **Projects Section (globals.css)**
   ```css
   .pj-title {
     font-size: 9.2vw;  /* Could be excessive on wide screens */
   }
   ```
   - **Risk:** On 1920px = 176px (very large)
   - **No explicit max-width cap found**

3. **Fixed Pixel Widths**
   - Workflow connector line: `w-[2px]` (acceptable — decorative)
   - Featured video max-width: `max-w-[280px]` (acceptable)
   - Hero content: `max-w-[480px]` (acceptable)

4. **Horizontal Overflow Risk Areas**
   - Long project names in `pj-name` class
   - Email addresses in contact section
   - **Mitigation exists:** Mobile CSS includes `word-break: break-word`

#### ⚠️ Typography Scaling Issues

1. **Contact Section Email**
   ```css
   @media (max-width: 480px) {
     #ct-email {
       font-size: 3.7vw;
       word-break: break-all;  /* Too aggressive — breaks mid-word */
     }
   }
   ```

2. **Ultra-Small Viewports (320px-360px)**
   - No explicit breakpoint below 480px
   - Default mobile styles may need tightening

---

## 5. IMAGE DELIVERY ANALYSIS

### Current Implementation

#### ✅ Optimized: FeaturedVideo Component
```jsx
<Image
  src="/profile_image.png"
  alt="Rohit Survase - Portfolio"
  fill
  priority
  sizes="(max-width: 768px) 80vw, 40vw"
  className="object-cover"
/>
```
- Uses Next.js `<Image>` component
- Responsive `sizes` attribute
- Priority loading for LCP
- **Issue:** Source file is 1.9 MB PNG (not optimized)

#### ❌ Unoptimized: Direct `<img>` Tags

1. **HeroSection loader avatar** (line 206)
   ```jsx
   <img src="/profile_image.png" ... className="w-20 h-20 sm:w-24 sm:h-24" />
   ```
   - No `srcset`, no lazy loading
   - Loading full 1.9 MB image for 80×80 display

2. **Navbar avatars** (lines 94, 200)
   ```jsx
   <img src="/profile_image.png" ... className="w-8 h-8" />
   <img src="/profile_image.png" ... className="w-10 h-10" />
   ```
   - Loading 1.9 MB for 8×8 and 10×10 displays
   - Should use thumbnail or Next.js Image

3. **Publications book cover** (line 135)
   ```jsx
   <img src="/book_image.jpeg" ... className="w-full max-w-[280px]" />
   ```
   - No `srcset`, no responsive variants
   - 223 KB for 280px display (acceptable but could be WebP)

### Issues Summary

| Component          | Issue                                  | Wasted Bandwidth | Priority |
|--------------------|----------------------------------------|------------------|----------|
| Navbar (mobile)    | 1.9 MB for 8×8 avatar                  | ~1.89 MB         | CRITICAL |
| Navbar (desktop)   | 1.9 MB for 10×10 avatar                | ~1.89 MB         | CRITICAL |
| HeroSection loader | 1.9 MB for 80×80 avatar                | ~1.85 MB         | HIGH     |
| FeaturedVideo      | 1.9 MB source (Next.js optimizes)      | Varies           | MEDIUM   |
| Publications       | 223 KB JPEG (should be WebP)           | ~50-80 KB        | MEDIUM   |
| Favicon            | 552 KB PNG (should be <20 KB)          | ~532 KB          | HIGH     |

**Total unnecessary image data per page load:** ~**5-7 MB**

---

## 6. PERFORMANCE BOTTLENECKS IDENTIFIED

### 1. Image Loading
- **Critical:** 1.9 MB profile image loaded 3× on page load
- **High:** 552 KB favicon
- **Medium:** No WebP format usage

### 2. Font Loading
- **High:** Duplicate Inter font (next/font + Google Fonts)
- **High:** Multiple external CDN requests (blocking)
- **Medium:** 10+ font weights loaded (likely only 3-4 used)

### 3. Video Loading
- **Medium:** 2.1 MB hero video with `preload="auto"` (aggressive)
- **Suggestion:** Consider `preload="metadata"` or lazy load

### 4. JavaScript Bundle
- **Low:** 219 kB First Load JS (reasonable for modern portfolio)
- **Info:** No obvious code-splitting issues

### 5. Layout Shifts (Potential)
- **Warning:** Images without explicit width/height may cause CLS
- **Warning:** Video dimensions not explicitly set

### 6. Animations
- **✅ Good:** Using `transform` and `opacity` (GSAP, Framer Motion)
- **✅ Good:** `will-change` used appropriately
- **ℹ️ Note:** No `prefers-reduced-motion` checks found

---

## 7. ACCESSIBILITY CHECKS

### ✅ Strengths

1. **Semantic HTML**
   - `<section>`, `<article>`, `<nav>` used correctly
   - Proper heading hierarchy (`<h1>`, `<h2>`, `<h3>`)

2. **ARIA Labels**
   - Navbar: `aria-label="Home"`, `aria-expanded` on menu button
   - Images: Alt text present on all images

3. **Keyboard Navigation**
   - All interactive elements are `<a>` or `<button>` tags
   - No div-based buttons without proper attributes

4. **Focus States**
   - Hover states present on links and buttons
   - Visible focus indicators via browser defaults

### ⚠️ Issues

1. **Motion Accessibility**
   - No `prefers-reduced-motion` media query implementations
   - Heavy GSAP/Framer Motion animations may affect sensitive users

2. **Touch Targets (Mobile)**
   - Some buttons approach 44px minimum but may be borderline
   - Example: Navbar avatar + text (combined target is adequate)

3. **Contrast** (Visual inspection needed)
   - `text-fg-muted` and `text-fg-subtle` may fail WCAG AA on some backgrounds
   - Theme switching tested: Yes (light/dark mode present)

---

## 8. TOOL AVAILABILITY

### Lighthouse CLI: ⚠️ NOT INSTALLED
```
Command: npx lighthouse --version
Result: Prompt to install (not available globally)
Action: Would require installation on demand
```

### sharp (Image Processing): ❌ NOT INSTALLED
```
Command: npm list sharp
Result: (empty)
Status: NOT INSTALLED
```
**Recommendation:** Install `sharp` for WebP conversion
```bash
npm install --save-dev sharp
```

### Existing Dev Dependencies
- Next.js 14.2.35 ✅
- GSAP (with ScrollTrigger) ✅
- Framer Motion ✅
- Tailwind CSS ✅

---

## 9. TOP PRIORITY ISSUES TO ADDRESS

### CRITICAL (Performance Impact: High)

1. **Profile Image Optimization**
   - Current: 1.9 MB PNG loaded 3× per page
   - Target: Convert to WebP, generate responsive variants (80px, 280px, 640px, 1024px)
   - Expected savings: ~5-6 MB per page load

2. **Favicon Bloat**
   - Current: 552 KB PNG
   - Target: Optimize to <20 KB (16×16, 32×32, 180×180 variants)
   - Expected savings: ~530 KB

### HIGH (Performance Impact: Medium-High)

3. **Font Loading Strategy**
   - Remove duplicate Inter from Google Fonts CDN
   - Self-host or use next/font for all fonts
   - Reduce loaded weights to 3-4 actually used
   - Expected savings: 100-200 KB + reduced render blocking

4. **Convert JPEG to WebP**
   - Convert `book_image.jpeg` (223 KB → ~120-150 KB WebP)
   - Expected savings: ~70-100 KB

5. **Direct `<img>` to Next.js `<Image>`**
   - Replace navbar and loader avatars with `<Image>` component
   - Enable automatic optimization and responsive variants

### MEDIUM (Performance Impact: Medium)

6. **Hero Video Preload Strategy**
   - Change `preload="auto"` to `preload="metadata"`
   - Consider lazy-loading video after page interactive
   - Expected savings: Deferred 2.1 MB until needed

7. **Image Width/Height Attributes**
   - Add explicit dimensions or aspect-ratio to prevent CLS
   - Particularly for book cover and direct `<img>` tags

8. **Responsive Design Polish**
   - Test all viewports (320px, 375px, 768px, 1024px, 1920px)
   - Fix `word-break: break-all` on email (should be `break-word`)
   - Verify no horizontal overflow on narrow screens

### LOW (UX/Accessibility)

9. **Add `prefers-reduced-motion` Support**
   - Wrap GSAP/Framer Motion animations in media query checks
   - Provide simpler transitions for motion-sensitive users

10. **ESLint Configuration**
    - Update ESLint config to remove deprecated options
    - Non-blocking but shows in build output

---

## 10. ESTIMATED PERFORMANCE GAINS

### Before Optimization (Current State)

| Metric                     | Estimated Value |
|----------------------------|-----------------|
| Total Page Weight          | ~8-10 MB        |
| Image Weight               | ~6-7 MB         |
| First Load JS              | 219 KB          |
| Largest Contentful Paint   | 3-5s (estimate) |
| Cumulative Layout Shift    | 0.1-0.3 (estimate) |

### After Optimization (Target State)

| Metric                     | Target Value    | Improvement  |
|----------------------------|-----------------|--------------|
| Total Page Weight          | ~2-3 MB         | -70%         |
| Image Weight               | ~800 KB-1.2 MB  | -80%         |
| First Load JS              | 200-210 KB      | -5%          |
| Largest Contentful Paint   | <2.5s           | LCP ✅       |
| Cumulative Layout Shift    | <0.1            | CLS ✅       |

**Expected Lighthouse Performance Score:** 90-95+ (currently unknown, likely 60-75)

---

## 11. NEXT STEPS (DO NOT EXECUTE — MEASUREMENT ONLY)

This report establishes the baseline. Next steps for optimization workflow:

### Phase 1: Image Optimization
- [ ] Install `sharp` for image processing
- [ ] Convert `profile_image.png` to WebP with multiple sizes
- [ ] Convert `book_image.jpeg` to WebP
- [ ] Optimize `icon.png` to appropriate favicon sizes
- [ ] Update all image references to use optimized variants
- [ ] Replace direct `<img>` with Next.js `<Image>` components

### Phase 2: Font Optimization
- [ ] Remove Google Fonts import from globals.css
- [ ] Self-host or use next/font for all custom fonts
- [ ] Reduce Inter weights to 400, 600, 700 (remove 300, 500, 800)
- [ ] Verify all fonts display correctly after optimization

### Phase 3: Responsive Design Testing
- [ ] Test at 320px, 360px, 375px, 390px, 430px
- [ ] Test at 768px, 1024px, 1280px, 1366px, 1440px, 1920px
- [ ] Fix horizontal overflow if found
- [ ] Verify touch targets ≥44px
- [ ] Test light and dark themes at all breakpoints

### Phase 4: Performance Tuning
- [ ] Change hero video preload strategy
- [ ] Add explicit image dimensions
- [ ] Implement `prefers-reduced-motion`
- [ ] Run Lighthouse audit (install if needed)
- [ ] Measure Core Web Vitals

### Phase 5: Verification
- [ ] Build for production
- [ ] Test all functionality (navigation, theme, video, animations)
- [ ] Verify all images load correctly
- [ ] Check console for errors
- [ ] Compare before/after metrics

---

## 12. CONCLUSIONS

### Current State Assessment

**Strengths:**
- ✅ Clean Next.js 14 setup with App Router
- ✅ Responsive design framework in place (Tailwind + custom breakpoints)
- ✅ Modern animation libraries (GSAP, Framer Motion)
- ✅ Semantic HTML and basic accessibility
- ✅ Theme switching (light/dark mode)
- ✅ Production build succeeds

**Critical Issues:**
- ❌ **5-7 MB of unnecessary image data** per page load
- ❌ Duplicate font loading and external CDN dependencies
- ❌ Unoptimized image formats (PNG/JPEG instead of WebP)
- ⚠️ Aggressive video preloading
- ⚠️ No `prefers-reduced-motion` support

**Overall Assessment:**
The website is **functionally complete** but **severely unoptimized** for production deployment. 
Primary optimization targets are **image conversion** (WebP), **font consolidation**, and **responsive 
image delivery**. Expected performance improvement: **60-80% reduction in page weight** with proper 
optimization.

**Ready for Optimization:** ✅ YES

---

**End of Baseline Audit Report**
