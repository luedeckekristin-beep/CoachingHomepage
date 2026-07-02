import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://luedeckekristin-beep.github.io',
  base: '/CoachingHomepage',
  outDir: './docs',
  integrations: [tailwind()],
  build: {
    format: 'directory',
  },
});
