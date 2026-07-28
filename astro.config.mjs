// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const base = process.env.BASE_PATH ?? '/';
const site = process.env.SITE_URL ?? 'https://patrickpinace.github.io';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()]
  }
});