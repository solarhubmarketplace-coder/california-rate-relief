import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard/',
          '/login',
          '/api/',
          '/testing-guide',
        ],
      },
    ],
    sitemap: 'https://ratereliefca.com/sitemap.xml',
  };
}
