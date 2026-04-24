import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Code1deep.github.io/dark-debris/',
  integrations: [tailwind()],
  trailingSlash: 'never',
});