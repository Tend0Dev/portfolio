// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
        prefixDefaultLocale: false,
       
    }
  }


});