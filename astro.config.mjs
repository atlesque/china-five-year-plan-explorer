import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// PUBLIC_SITE_URL can override this for previews or a future production domain.
const site = process.env.PUBLIC_SITE_URL || 'https://china-five-year-plan.atlesque.dev';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
