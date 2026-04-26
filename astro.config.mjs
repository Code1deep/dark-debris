import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://code1deep.github.io/dark-debris/',
  integrations: [tailwind()],
  trailingSlash: 'never',
});
