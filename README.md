# Rohit Survase — Developer Portfolio

> **Personal portfolio website showcasing AI-assisted software development projects, skills, and professional workflow**

[![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black?logo=next.js)](https://nextjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![CI](https://img.shields.io/github/actions/workflow/status/rohitsurvase08/rohit-survase-portfolio/ci.yml?branch=main&label=CI)](https://github.com/rohitsurvase08/rohit-survase-portfolio/actions)

🌐 **Live Site:** [rohitsurvase.in](https://rohitsurvase.in) *(coming soon)*

---

## ✨ Features

- **🎬 Hero Section** — Animated introduction with background video
- **👨‍💻 About Section** — Professional profile explaining AI-assisted development approach
- **🚀 Featured Projects** — Showcase of three production projects:
  - **LinkAudit** — Flask-based broken link detection tool
  - **Student Result System** — Full-stack result management with authentication
  - **NotiQ** — Personal note-taking application
- **💼 Core Skills** — Grid of top 20 technical capabilities
- **⚙️ AI-Assisted Workflow** — Visual breakdown of development process
- **🔧 Additional Skills** — Expandable categories covering technologies, tools, and methodologies
- **📚 Publications** — Showcase of technical books and articles
- **📧 Contact** — Direct email and social media links
- **📱 Fully Responsive** — Optimized for all devices (320px to 1920px+)
- **🎨 Theme Toggle** — Light/Dark mode with CSS custom properties
- **🌊 Smooth Animations** — GSAP, Framer Motion, and Lenis smooth scrolling
- **♿ Accessible** — WCAG 2.1 AA compliant, keyboard navigable
- **⚡ Performance Optimized** — WebP images, responsive design, Core Web Vitals passing

---

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 14](https://nextjs.org/)** — React framework with App Router
- **[React 18](https://react.dev/)** — UI library

### Styling
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework
- **Custom CSS Variables** — Theme system for light/dark mode
- **[@fontsource/inter](https://fontsource.org/fonts/inter)** — Self-hosted typography

### Animations
- **[GSAP](https://greensock.com/gsap/)** — Professional-grade animation library with ScrollTrigger
- **[Framer Motion](https://www.framer.com/motion/)** — React animation library
- **[@react-spring/web](https://www.react-spring.dev/)** — Spring-physics animations
- **[Lenis](https://lenis.studiofreight.com/)** — Smooth scrolling library

### Icons & Utilities
- **[Lucide React](https://lucide.dev/)** — Icon library
- **[React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)** — Scroll-triggered animations
- **[@mediapipe/tasks-vision](https://developers.google.com/mediapipe)** — Computer vision for gesture detection

### Development Tools
- **[ESLint](https://eslint.org/)** — JavaScript/React linting
- **[Prettier](https://prettier.io/)** — Code formatting
- **[sharp](https://sharp.pixelplumbing.com/)** — Image processing for WebP conversion
- **[Tailwind CSS 3D](https://github.com/sambauers/tailwindcss-3d)** — 3D transform utilities

---

## 📁 Project Structure

```
rohit-survase-portfolio/
├── app/
│   ├── globals.css          # Global styles, theme variables, responsive breakpoints
│   ├── layout.js            # Root layout with metadata and font configuration
│   └── page.js              # Homepage with all sections
├── components/
│   ├── HeroSection/         # Hero with video background, name, CTA buttons
│   ├── Featured/            # About section (Header, SubHeader, FeaturedVideo, Skiggle)
│   ├── Projects/            # Featured projects showcase
│   ├── CoreSkills/          # Top 20 skills grid
│   ├── Workflow/            # AI-assisted development workflow
│   ├── AdditionalSkills/    # Expandable skill categories
│   ├── Publications/        # Books and articles section
│   ├── Contact/             # Contact form and social links
│   ├── SiteFooter/          # Footer with copyright and links
│   ├── Navbar/              # Desktop and mobile navigation
│   ├── HorizontalScroll/    # Animated horizontal text scroll
│   ├── GradualBlur/         # Scroll-triggered blur effect
│   └── SmoothScroll.jsx     # Lenis smooth scroll wrapper
├── public/
│   ├── hero-bg-video.mp4              # Hero section background video
│   ├── profile_image.webp             # Profile image (WebP optimized)
│   ├── book_image.webp                # Book cover (WebP optimized)
│   ├── icon.png                       # Favicon
│   ├── python-fundamentals-core-concepts.pdf
│   └── Rohit_Survase_Software_Developer_Resume.pdf
├── .agents/                 # Development documentation and reports
├── .github/                 # GitHub Actions CI, issue templates, PR template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── next.config.js           # Next.js configuration
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18.x or v20.x ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rohitsurvase08/rohit-survase-portfolio.git
   cd rohit-survase-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at http://localhost:3000 |
| `npm run build` | Create optimized production build |
| `npm start` | Start production server (requires `npm run build` first) |
| `npm run lint` | Run ESLint to check for code issues |

---

## 🏗️ Building for Production

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

**Build Output:**
```
Route (app)                    Size     First Load JS
┌ ○ /                          132 kB   219 kB
└ ○ /_not-found                873 B    88.1 kB
```

---

## 🌍 Deployment

This Next.js application can be deployed to:

### Vercel (Recommended)
1. Push code to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js and deploys

### Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

### Custom Server
```bash
npm run build
npm start
```

Configure reverse proxy (Nginx/Apache) to forward traffic to the Next.js server.

---

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/HeroSection/HeroSection.jsx`)
   - Name, headline, CTA buttons

2. **Projects** (`components/Projects/Projects.jsx`)
   - Project titles, descriptions, tech stacks, links

3. **Skills** (`components/CoreSkills/CoreSkills.jsx`, `components/AdditionalSkills/AdditionalSkills.jsx`)
   - Skill names, categories, proficiency levels

4. **Contact** (`components/Contact/Contact.jsx`)
   - Email, social links

5. **Metadata** (`app/layout.js`)
   - SEO title, description, Open Graph tags

### Update Images

Replace files in `/public`:
- `profile_image.webp` — Your profile photo
- `book_image.webp` — Publication cover
- `icon.png` — Favicon
- `hero-bg-video.mp4` — Background video

**Image optimization tip:** Use WebP format for photos (use [Squoosh](https://squoosh.app/) or `sharp`)

### Theme Colors

Edit CSS custom properties in `app/globals.css`:
```css
:root {
  --color-bg: #F9F8FF;
  --color-text: #060607;
  --color-accent: #0016EC;
  /* ... more colors */
}
```

---

## ♿ Accessibility

This portfolio is built with accessibility in mind:

- ✅ **WCAG 2.1 AA compliant**
- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ Touch targets ≥44×44px (mobile-friendly)
- ✅ Alt text for all images
- ✅ Color contrast meets AA standards
- ✅ Focus indicators visible
- ✅ Screen reader friendly

### Testing Accessibility

- Use [axe DevTools](https://www.deque.com/axe/devtools/)
- Test keyboard navigation (Tab, Enter, Space, Escape)
- Test with screen reader (NVDA, JAWS, VoiceOver)

---

## ⚡ Performance

### Optimizations Applied

- **WebP Images** — 94.5% reduction in image data (7.6 MB → 0.42 MB per page)
- **Responsive Images** — Next.js Image component with automatic optimization
- **Code Splitting** — Automatic via Next.js App Router
- **Font Optimization** — Self-hosted fonts with `font-display: swap`
- **Lazy Loading** — Below-fold images load on scroll
- **Smooth Animations** — GPU-accelerated transforms and opacity
- **Bundle Size** — 219 kB First Load JS

### Core Web Vitals

| Metric | Target | Status |
|--------|--------|--------|
| **LCP** (Largest Contentful Paint) | <2.5s | ✅ Pass |
| **FID/INP** (Interaction) | <200ms | ✅ Pass |
| **CLS** (Cumulative Layout Shift) | <0.1 | ✅ Pass |

**Lighthouse Performance Score:** 90-95 (Desktop)

---

## 📱 Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 79+ (2020) |
| Firefox | 75+ (2020) |
| Safari | 13.1+ (2020) |
| Edge | 79+ (2020) |
| iOS Safari | 14+ (2020) |
| Chrome Android | All recent versions |

**Coverage:** 97%+ of global web traffic

---

## 🔒 Security

- ✅ No user authentication (reduces attack surface)
- ✅ No database (static site)
- ✅ No user input forms (contact via external links)
- ✅ Regular dependency audits (`npm audit`)
- ✅ No exposed secrets or API keys

**Report vulnerabilities:** See [SECURITY.md](./SECURITY.md)

---

## 🤝 Contributing

Contributions welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Quick Start for Contributors

```bash
# Fork the repo, then:
git clone https://github.com/YOUR_USERNAME/rohit-survase-portfolio.git
cd rohit-survase-portfolio
npm install
npm run dev

# Make changes, then:
npm run build  # Ensure build succeeds
npm run lint   # Fix any linting issues
git commit -m "feat: your feature description"
git push
```

---

## 📄 License

This project is licensed under the **MIT License** — see [LICENSE](./LICENSE) file for details.

### Third-Party Acknowledgments

This portfolio is based on a video portfolio template. While substantially modified and customized, the original template structure influenced the initial design. All dependencies retain their respective licenses (see `package.json`).

---

## 📧 Contact

**Rohit Rajesh Survase**

- 💼 **Portfolio:** [rohitsurvase.in](https://rohitsurvase.in) *(coming soon)*
- 📧 **Email:** [survaser06@gmail.com](mailto:survaser06@gmail.com)
- 🐙 **GitHub:** [@rohitsurvase08](https://github.com/rohitsurvase08)
- 💼 **LinkedIn:** [Rohit Survase](https://linkedin.com/in/rohitsurvase) *(update with actual URL)*
- 📱 **Telegram:** [@rohitsurvase08](https://t.me/rohitsurvase08)

---

## 📊 Project Statistics

- **Lines of Code:** ~5,000 (application code)
- **Components:** 23 React components
- **Dependencies:** 11 production packages
- **Bundle Size:** 219 kB (First Load JS)
- **Image Optimization:** 94.5% reduction (WebP conversion)
- **Responsive Breakpoints:** 320px to 1920px+
- **Lighthouse Score:** 90-95 (Performance)

---

## 🗺️ Roadmap

- [ ] Add blog section with MDX support
- [ ] Implement contact form with backend API
- [ ] Add more projects to showcase
- [ ] Integrate Google Analytics
- [ ] Add testimonials section
- [ ] Implement case studies for major projects
- [ ] Add dark mode transition animation
- [ ] Optimize hero video for mobile (reduce file size)

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

---

## ⭐ Acknowledgments

- **Original Template:** Video portfolio template by devendharoff
- **Inspiration:** Modern portfolio designs from Awwwards and Dribbble
- **Icons:** Lucide React icon library
- **Fonts:** Inter font family via Fontsource
- **Animations:** GSAP and Framer Motion communities

---

<div align="center">

**Built with ❤️ by Rohit Survase**

⭐ Star this repo if you found it helpful!

[Report Bug](https://github.com/rohitsurvase08/rohit-survase-portfolio/issues) · [Request Feature](https://github.com/rohitsurvase08/rohit-survase-portfolio/issues)

</div>
