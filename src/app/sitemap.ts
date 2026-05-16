import { MetadataRoute } from 'next';
import { getAllDocSlugs } from '@/lib/docs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://esdocu.com';
  
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  const slugs = getAllDocSlugs();
  
  const docRoutes = slugs.map((slug) => ({
    url: `${baseUrl}/${slug.join('/')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...routes, ...docRoutes];
}
