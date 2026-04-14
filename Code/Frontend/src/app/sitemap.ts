import { MetadataRoute } from 'next';

const BASE_URL = 'https://ratereliefca.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Core public pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Blog posts
  const blogPosts: MetadataRoute.Sitemap = [
    'sce-rate-increase-2026',
    'california-24-dollar-fixed-charge-explained',
    'solar-tax-credit-expired-2026-options',
    'nem-3-california-still-worth-it',
    'pge-vs-sce-vs-sdge-rates-compared',
  ].map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date('2026-04-14'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // City pages will be added here as they are built
  // Example format:
  // {
  //   url: `${BASE_URL}/solar-savings/temecula`,
  //   lastModified: new Date(),
  //   changeFrequency: 'monthly',
  //   priority: 0.8,
  // },

  return [...staticPages, ...blogPosts];
}
