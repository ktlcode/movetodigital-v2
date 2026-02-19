// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://movetodigital.au',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
