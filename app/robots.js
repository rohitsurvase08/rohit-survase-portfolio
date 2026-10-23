/**
 * Robots.txt for rohitsurvase.in
 * 
 * Next.js App Router automatically serves this at /robots.txt
 * Learn more: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */

export default function robots() {
  const baseUrl = 'https://rohitsurvase.in';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
