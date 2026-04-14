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

  // City pages will be added here as they are built
  // Example format:
  // {
  //   url: `${BASE_URL}/solar-savings/temecula`,
  //   lastModified: new Date(),
  //   changeFrequency: 'monthly',
  //   priority: 0.8,
  // },

  return [...staticPages];
}
