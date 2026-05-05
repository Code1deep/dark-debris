import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { defineCollection, z } from 'astro:content';

export default defineConfig({
  site: 'https://code1deep.github.io/dark-debris/',
  integrations: [tailwind(), sitemap()],
  trailingSlash: 'never',
  build: {
    format: 'directory'
  },

  // Définir la collection avec son schéma
  collections: {
    blog: defineCollection({
      schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.string(), // Stocké comme chaîne ISO, à convertir en Date lors du rendu
        author: z.string(),
        keywords: z.string(),
        niveau: z.string()
      }),
    }),
  },
}); 
