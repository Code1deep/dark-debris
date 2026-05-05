import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://code1deep.github.io/dark-debris/',
  integrations: [tailwind(), sitemap()],
  trailingSlash: 'never',
  build: {
    format: 'directory'
  }
});