# Shuleeken · web

Web de Shuleeken, mi canal de contenido gamer: todas mis redes en un solo lugar, sin depender de servicios de terceros para la página de enlaces.

Es una web estática hecha con **Astro 7**, **Tailwind CSS 4** y **TypeScript**. No envía JavaScript salvo el del menú del celular.

## Comandos

- `npm run dev`: servidor de desarrollo en http://localhost:4321
- `npm run build`: comprueba los tipos (`astro check`) y genera `dist/`
- `npm run preview`: sirve `dist/` para probar el resultado final

## Dónde está cada cosa

- `src/data/site.ts`: todos los datos (redes, textos, correo). Es la única fuente de verdad.
- `src/styles/global.css`: colores y tipografía de la marca (`@theme`).
- `src/components/Marca.astro`: el icono, el guerrero y el nombre en SVG, incrustados para que tomen el color del texto.
- `src/components/IconoRed.astro`: iconos de las redes, de [simple-icons](https://simpleicons.org) (CC0).
- `src/pages/`: las páginas (inicio, información legal y 404).

## Despliegue

Cloudflare Workers con archivos estáticos (`wrangler.jsonc`). Mientras no haya dominio, la web se publica con `noindex`.

## Licencia

El **código** se puede reutilizar con licencia MIT. El **nombre Shuleeken, el logotipo, el icono y el guerrero no**: son la marca y no se pueden usar sin permiso. Detalles en [LICENSE](LICENSE).
