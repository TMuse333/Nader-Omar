import { MetadataRoute } from 'next';

const currentDate = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://naderomarrealtor.com/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://naderomarrealtor.com/buy-home-fall-river',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
