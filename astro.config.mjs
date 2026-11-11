// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/data/site.ts';

// `site.url` es null hasta que el cliente tenga dominio. Mientras tanto la web
// se publica con `noindex` (ver Base.astro y robots.txt.ts) para que Google no
// indexe la dirección provisional.
export default defineConfig({
  site: site.url ?? undefined,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  vite: { plugins: [tailwindcss()] },
});
