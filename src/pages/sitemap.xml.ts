// Sitemap hecho a mano: para webs de pocas páginas basta con esta lista y nos
// ahorramos una dependencia. Al añadir una página nueva, añadirla aquí.
import type { APIRoute } from 'astro';

const pages = ['/', '/informacion-legal/'];

export const GET: APIRoute = ({ site }) => {
  // Sin dominio el sitemap sale vacío (robots.txt ya bloquea la indexación).
  const urls = !site ? '' : pages.map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
