// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

import expressiveCode from 'astro-expressive-code';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode({
    themes: ['snazzy-light'],
  }), mdx(), react(), icon()],

  markdown: {
    shikiConfig: {
      theme: 'snazzy-light',
    },
  },

  site: 'https://joemaddalone.com',

  vite: {
    plugins: [tailwindcss()],
  },
});
