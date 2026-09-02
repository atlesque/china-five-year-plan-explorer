import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// Replace this placeholder at deploy time with the public origin of the site.
const site = process.env.PUBLIC_SITE_URL || 'https://china-five-year-plan-explorer.example.com';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
