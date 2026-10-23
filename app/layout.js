import { Inter } from 'next/font/google'
import './globals.css'

// Inter is the single typeface used everywhere on the site. Loading it through
// next/font exposes a CSS variable (`--font-inter`) we can reference from any
// global CSS rule, while `inter.className` applies it as the default font on
// the body so every component inherits it automatically.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Rohit Rajesh Survase | AI-Assisted Software Developer',
  description: 'Computer Engineering Student And AI-Assisted Software Developer Specializing In Web Development, Mobile Applications, And AI-Powered Development Workflows.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

// Tiny script that runs synchronously before the body paints. It reads the
// theme the user previously picked from localStorage and applies the
// corresponding `data-theme` attribute on the <html> element. Without this,
// the page would flash the default light theme for one frame on every reload
// when the user is using dark mode. Default is light when nothing is saved.
const themeBootstrap = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var theme = saved === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = 'light';
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} data-theme="light">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
