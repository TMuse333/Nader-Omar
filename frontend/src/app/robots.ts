import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/', // Disallow everything
      },
    ],
    sitemap: '', // Optionally remove sitemap reference during dev
  }
}
