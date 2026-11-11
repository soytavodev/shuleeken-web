// robots.txt generado en el build: sin dominio se bloquea todo; con dominio se
// permite todo y se indica el sitemap.
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const body = site
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap.xml', site).href}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
