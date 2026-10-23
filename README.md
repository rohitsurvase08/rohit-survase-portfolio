# Rohit Survase - Developer Portfolio

A professional portfolio website for Rohit Rajesh Survase, showcasing AI-assisted software development projects, skills, and workflow.

## ✨ Features

- **Hero Section**: Animated introduction with video background and personal branding
- **About Section**: Professional introduction explaining AI-assisted development approach
- **Featured Projects**: Three main projects (LinkAudit, Student Result Analysis System, NotiQ)
- **Top 20 Core Skills**: Grid display of primary technical capabilities
- **AI-Assisted Workflow**: Visual breakdown of the development process
- **Additional Skills**: Expandable categories covering technologies, tools, and methodologies
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Smooth Animations**: GSAP, Framer Motion, and Lenis smooth scroll
- **Theme Support**: Light/Dark mode with CSS custom properties
- **Accessible**: Keyboard navigation and reduced-motion support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom CSS variables
- **Animations**: GSAP, Framer Motion, React Spring
- **3D Effects**: Three.js, React Three Fiber (inherited from template)
- **Smooth Scroll**: Lenis
- **Package Manager**: npm

## 📁 Project Structure

```
video-portfolio-template/
├── app/
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.js            # Root layout with metadata
│   └── page.js              # Main page component
├── components/
│   ├── HeroSection/         # Hero with video background
│   ├── Featured/            # About section header and content
│   ├── Projects/            # Featured projects list
│   ├── CoreSkills/          # Top 20 skills grid
│   ├── Workflow/            # AI-assisted workflow visualization
│   ├── AdditionalSkills/    # Expandable skill categories
│   ├── Contact/             # Contact section
│   ├── SiteFooter/          # Footer with links
│   ├── Navbar/              # Navigation bar
│   └── HorizontalScroll/    # Animated horizontal scroll text
├── public/
│   ├── hero-bg-video.mp4    # Hero section video
│   └── avatar-logo.jpg      # Profile image
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Navigate to the project directory:
```bash
cd video-portfolio-template
```

2. Install dependencies (already done):
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Create an optimized production build:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 📝 Content Customization

### Personal Information

Update the following files with your actual information:

1. **Hero Section** (`components/HeroSection/HeroSection.jsx`):
   - Name display text
   - Professional headline
   - GitHub link
   - Resume link

2. **About Section** (`components/Featured/SubHeader.jsx`):
   - Personal introduction
   - Core expertise areas

3. **Contact** (`components/Contact/Contact.jsx`):
   - Email address: `survaser06@gmail.com`
   - Contact buttons

4. **Footer** (`components/SiteFooter/SiteFooter.jsx`):
   - Social links
   - Email contact

5. **Navbar** (`components/Navbar/Navbar.jsx`):
   - Email: `survaser06@gmail.com`
   - WhatsApp: `919112874611`

### Projects

Update project information in `components/Projects/Projects.jsx`:

- **LinkAudit**: https://github.com/rohitsurvase08/linkaudit
- **Student Result Analysis System**: https://github.com/rohitsurvase08/student-result-management-system
- **NotiQ**: Private repository (no public link)

### Assets

Replace placeholder assets in the `public/` directory:

1. **Profile Image**: Replace `/public/avatar-logo.jpg` with your photo
2. **Hero Video**: Replace `/public/hero-bg-video.mp4` or remove video background if preferred
3. **Project Screenshots**: Add images to `/public/images/projects/` and update project configurations

## 🎨 Design Customization

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

### Typography

Fonts are defined in `app/layout.js` and `app/globals.css`:
- Primary: Inter
- Display: Aeonik, Neue Montreal, Druk Condensed

## ⚠️ Important Notes

### Information Accuracy

- All personal information has been updated with verified details from `my_info.txt`
- Project descriptions are based on actual repository status
- No fake metrics, testimonials, or inflated capabilities
- LinkedIn URL is a placeholder (update when profile is created)
- Domain `rohitsurvase.in` mentioned (verify deployment status)

### Placeholders to Update

1. **Email Links**: Currently set to `survaser06@gmail.com` and `comp26_rohit.survase@isbmcoe.org`
2. **LinkedIn**: Update when profile is created
3. **Project Screenshots**: Add actual screenshots to `/public/images/projects/`
4. **Resume PDF**: Replace `/public/Devender_Gopagoni_Resume.pdf` with your resume
5. **Profile Image**: Replace `/public/avatar-logo.jpg` with your photo

### Known Issues

- Some dependencies have security warnings (run `npm audit` for details)
- Browserslist is outdated (run `npx update-browserslist-db@latest`)
- Optional: Install `sharp` for optimized image processing (`npm i sharp`)

## 📊 Build Results

✅ **Development Server**: Running successfully at http://localhost:3000
✅ **Production Build**: Compiled successfully
✅ **Type Checking**: Passed
✅ **Linting**: Passed

### Build Output

```
Route (app)                              Size     First Load JS
┌ ○ /                                    103 kB          218 kB
├ ○ /_not-found                          873 B          88.2 kB
└ ○ /about                               219 kB          334 kB
```

## 🔧 Maintenance

### Regular Updates

1. **Dependencies**: Keep packages up to date
   ```bash
   npm outdated
   npm update
   ```

2. **Security**: Address vulnerabilities
   ```bash
   npm audit
   npm audit fix
   ```

3. **Content**: Update projects and skills as you progress

## 📦 Deployment

### Recommended Platforms

1. **Vercel** (recommended for Next.js):
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Netlify**:
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Custom Domain** (`rohitsurvase.in`):
   - Configure DNS settings with your hosting provider
   - Add domain in deployment platform settings

## 📄 License

This project is based on the video-portfolio template by devendharoff.
Customized for Rohit Rajesh Survase's personal portfolio.

## 🆘 Support

For issues or questions:
- Check Next.js documentation: https://nextjs.org/docs
- Review component code in `/components`
- Test locally before deploying

---

**Built with**: Next.js, Tailwind CSS, GSAP, Framer Motion  
**Maintained by**: Rohit Rajesh Survase  
**Last Updated**: October 2026
