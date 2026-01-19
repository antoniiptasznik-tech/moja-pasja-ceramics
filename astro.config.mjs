// @ts-check
// Force restart
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import keystatic from '@keystatic/astro';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mojapasja.pl', // Placeholder site URL
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), keystatic(), sitemap()],

  output: 'server',
  adapter: vercel()
});