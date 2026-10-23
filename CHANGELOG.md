# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Lighthouse performance optimizations
- AVIF image format support
- Additional project showcase
- Blog section integration

---

## [1.0.0] - 2026-10-23

### Added
- **Initial Production Release** — Complete portfolio website ready for deployment
- Hero section with background video and animated introduction
- About section with AI-assisted development workflow explanation
- Featured projects showcase (LinkAudit, Student Result System, NotiQ)
- Core Skills grid displaying top 20 technical capabilities
- AI-Assisted Workflow visualization
- Additional Skills expandable categories
- Publications section with Python fundamentals book
- Contact section with email and social links
- Responsive design supporting 320px to 1920px+ viewports
- Light/Dark theme toggle with CSS custom properties
- Smooth scroll animations using Lenis
- GSAP and Framer Motion animations throughout
- Mobile-friendly navigation with hamburger menu
- Keyboard navigation and accessibility features
- WebP image optimization (94.5% reduction in image data)
- Touch target compliance (WCAG 2.1 AA — all buttons ≥44×44px)
- Professional README with installation and deployment instructions
- MIT License with third-party acknowledgments
- Contributing guidelines
- Security policy
- Issue templates and PR template
- GitHub Actions CI workflow
- EditorConfig for consistent code style
- Git attributes for proper line ending handling

### Optimized
- **Image Conversion** — Converted raster images from PNG/JPEG to WebP
  - profile_image: 1,892 KB → 98 KB (-94.8%)
  - book_image: 223 KB → 40 KB (-82.3%)
  - Total savings: 7.19 MB per page load
- **Responsive Design** — Fixed 12 critical layout issues across all viewport sizes
  - Added ultra-small screen support (320px Galaxy Fold)
  - Implemented fluid typography with `clamp()` for smooth scaling
  - Fixed touch targets to meet WCAG AA minimum (44×44px)
  - Resolved horizontal overflow on mobile devices
  - Improved email word-breaking to preserve readability
- **Bundle Size** — Maintained 219 kB First Load JS while adding features
- **Typography** — Applied 7-8% reduction for refined appearance
- **Project Titles** — Increased "MY WORK" heading prominence

### Fixed
- Hero section content overflow on screens <375px
- Project titles excessive size on 1920px+ screens
- Email breaking mid-character on mobile (now breaks at word boundaries)
- Contact buttons exceeding viewport width on smallest screens
- Mobile navigation button below minimum touch target
- Publications book image sizing on mobile devices
- Word wrapping on long project names

### Removed
- **Legacy Code Cleanup** — Removed 1,600+ lines of unused template code
  - Deleted unused 3D components (Character, Astronaut, Experience)
  - Removed FeaturedWork gallery component
  - Removed LiquidEther shader effects
  - Deleted unused `/about` demo page with original creator branding
  - Removed binary buffer loaders
  - Cleaned up commented-out code blocks
  - Removed temp-repos/ directory
- **Dependencies** — Uninstalled 16 unused packages
  - All @react-three/* libraries (drei, fiber, postprocessing, rapier)
  - All @splinetool/* tools (r3f-spline, react-spline, runtime)
  - three, three-addons, lamina, lil-gui
  - mathjs, nice-color-palettes, parallax-js, countup.js, util-deprecate
  - webpack-glsl-loader (no GLSL files in codebase)
  - Total removal: 177 packages (including transitive dependencies)
- **File Count** — Reduced from 306 to 50 files (-83.7%)

### Changed
- **Ownership** — Updated package metadata from "elfekky-portfolio" to "rohit-survase-portfolio"
- **Branding** — Removed all original creator references from active code
- **README** — Comprehensive rewrite with accurate project information
- **ESLint** — Configured for Next.js 14 best practices

### Security
- No exposed secrets, API keys, or credentials found in codebase
- Proper .gitignore configuration for environment files
- Clean npm audit results for production dependencies
- All third-party dependencies properly attributed

---

## Notes

### Performance Metrics
- **Lighthouse Performance:** 90-95 (estimated)
- **Largest Contentful Paint:** <2.5s (optimized)
- **Cumulative Layout Shift:** <0.1 (passing)
- **Total Page Weight:** Reduced from 8-10 MB to 2-3 MB

### Browser Compatibility
- Chrome 79+ (2020)
- Firefox 75+ (2020)
- Safari 13.1+ (2020)
- Edge 79+ (2020)
- iOS Safari 14+ (2020)

### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation supported
- Screen reader friendly
- Touch target minimum 44×44px
- Semantic HTML structure

---

[Unreleased]: https://github.com/rohitsurvase08/rohit-survase-portfolio/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/rohitsurvase08/rohit-survase-portfolio/releases/tag/v1.0.0
