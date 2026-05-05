import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { z } from 'zod';

export default defineConfig({
  site: 'https://code1deep.github.io/dark-debris/',
  integrations: [tailwind(), sitemap()],
  trailingSlash: 'never',
  build: {
    format: 'directory'
  },

  // Définition des collections avec schemas
  collections: {
    blog: {
      schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(), // propriété attendue comme une date
        author: z.string(),
        keywords: z.string(),
        niveau: z.string()
      })
    }
  }
});