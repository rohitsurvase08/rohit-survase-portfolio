/**
 * Sitemap for rohitsurvase.in
 * 
 * Next.js App Router automatically serves this at /sitemap.xml
 * Learn more: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

export default function sitemap() {
  const baseUrl = 'https://rohitsurvase.in';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
