// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yonkostash.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'hinglish', 'gu', 'es', 'fr', 'zh', 'ja'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

