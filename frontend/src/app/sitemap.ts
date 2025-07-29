import { MetadataRoute } from 'next';

const currentDate = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.naderomarrealestate.ca/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://www.naderomarrealestate.ca/buy-home-fall-river',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
