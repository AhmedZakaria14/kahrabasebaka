import { MetadataRoute } from 'next';
import { siteConfig, servicesData, blogPosts } from '@/lib/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.SITE_URL;
  const currentDate = new Date();

  // Core static pages
  const staticPages = [
    '',
    '/services',
    '/about',
    '/contact',
    '/blog',
    '/privacy-policy',
    '/terms'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Service pages (12 services)
  const servicePages = servicesData.map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Blog pages (4 guides)
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
