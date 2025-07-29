import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '', // This means no pages are restricted.
      },
    ],
    sitemap: 'https://www.naderomarrealestate.ca/sitemap.xml',
  }
}