// Datos de Shuleeken: la única fuente de verdad. Los componentes leen de aquí,
// así que cambiar un enlace es tocar una sola línea.
//
// Regla: nada inventado. Lo que no sepamos va como `null` (y la sección no se
// muestra) o con el texto [PENDIENTE] para que salte a la vista en la revisión.

export type RedSocial = {
  /** Nombre del icono en simple-icons (ver src/components/IconoRed.astro). */
  id: 'youtube' | 'twitch' | 'tiktok' | 'instagram' | 'facebook';
  nombre: string;
  usuario: string;
  url: string;
  /** Qué encuentra la gente en esa red, en pocas palabras. */
  contenido: string;
};

export const site = {
  name: 'Shuleeken',
  // Va detrás del nombre en el título de la portada (pestaña, Google y al compartir).
  tagline: 'Contenido gamer sin ser pro',
  description:
    'No soy pro y no pasa nada. Juego, pierdo, me río y lo vuelvo a intentar. Partidas, directos y clips de varios juegos, en español.',
  // Dirección definitiva con https y sin barra final. null = aún sin dominio.
  url: null as string | null,
  // Dirección provisional de Cloudflare mientras no hay dominio.
  previewUrl: null as string | null,

  lang: 'es',
  locale: 'es-ES',
  currency: 'EUR',

  // Descripción de los perfiles (la misma en todas las redes).
  bio: 'No soy pro y no pasa nada. Juego, pierdo, me río y lo vuelvo a intentar.',

  // Orden = orden en el que aparecen los botones.
  redes: [
    { id: 'youtube', nombre: 'YouTube', usuario: '@Shuleeken', url: 'https://www.youtube.com/@Shuleeken', contenido: 'Partidas y vídeos' },
    { id: 'twitch', nombre: 'Twitch', usuario: 'shuleeken', url: 'https://www.twitch.tv/shuleeken', contenido: 'Directos' },
    { id: 'tiktok', nombre: 'TikTok', usuario: '@soyshuleeken', url: 'https://www.tiktok.com/@soyshuleeken', contenido: 'Clips cortos' },
    { id: 'instagram', nombre: 'Instagram', usuario: '@soyshuleeken', url: 'https://www.instagram.com/soyshuleeken/', contenido: 'Clips y novedades' },
    { id: 'facebook', nombre: 'Facebook', usuario: 'soyshuleeken', url: 'https://www.facebook.com/soyshuleeken/', contenido: 'Vídeos y novedades' },
  ] satisfies RedSocial[],

  contact: {
    email: 'shuleeken@gmail.com',
  },

  // Plataforma de donaciones (Ko-fi, PayPal...). null = la sección no se muestra.
  donaciones: null as { nombre: string; url: string } | null,

  // Datos legales: NUNCA inventarlos. Mientras falten, la página legal muestra el hueco.
  legal: {
    owner: null as string | null,
    taxIdLabel: 'NIF',
    taxId: null as string | null,
    address: null as string | null,
    country: 'España',
  },

  // Crédito del pie (portfolio).
  credit: { prefix: 'Web:', name: 'Gustavo Delnardo', url: 'https://gustavo-delnardo.vercel.app' },
};
