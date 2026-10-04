# Nova Dental: landing page

Landing comercial para una clínica dental ficticia, orientada a conseguir citas por WhatsApp.
Está hecha con **Astro 7 + TypeScript + Tailwind CSS 4**. Genera HTML estático con muy poco JavaScript, que solo se usa en el menú móvil, el formulario y el botón flotante.

Está pensada como **plantilla reutilizable**: los datos del negocio, los textos y los colores están separados de los componentes.

## Requisitos (macOS)

- Node.js **22.12 o superior** (`node -v`). Con Homebrew: `brew install node`. Con nvm: `nvm use` (lee `.nvmrc`).

## Comandos

| Comando           | Qué hace                                                        |
| ----------------- | --------------------------------------------------------------- |
| `npm install`     | Instala las dependencias                                        |
| `npm run dev`     | Servidor de desarrollo en http://localhost:4321                 |
| `npm run build`   | Verifica tipos (`astro check`) y genera el sitio en `dist/`     |
| `npm run preview` | Sirve `dist/` localmente para revisar la versión de producción  |
| `npm run images`  | Regenera favicon PNG, apple-touch-icon e imagen Open Graph      |

## Estructura

```
src/
  config/site.ts        ← Negocio: nombre, WhatsApp, teléfono, dirección, horarios, redes, SEO
  data/
    content.ts          ← Textos de cada sección (hero, beneficios, proceso, galería, CTA…)
    treatments.ts       ← Tratamientos / servicios
    testimonials.ts     ← Testimonios (de DEMOSTRACIÓN, reemplazar antes de publicar)
    faq.ts              ← Preguntas frecuentes
  styles/global.css     ← Tokens de diseño: colores, tipografías, sombras, animaciones
  components/
    Navbar, Hero, TrustBar, Treatments, Benefits, Process, Gallery,
    Testimonials, ContactForm, FAQ, FinalCTA, Footer, WhatsAppFloat
    ui/                 ← Piezas base: Button, Icon (+ icons.ts), SectionHeading, Field, Logo, Media
  layouts/Layout.astro  ← <head>: SEO, Open Graph, favicon, JSON-LD
  lib/
    whatsapp.ts         ← Enlaces wa.me y mensaje del formulario
    schema.ts           ← Schema.org (Dentist + FAQPage)
  pages/
    index.astro         ← Ensambla la landing
    aviso-de-privacidad.astro
    404.astro
    robots.txt.ts
scripts/generate-images.mjs
public/                 ← favicon, og-image, iconos
```

## Personalización

### Número de WhatsApp
`src/config/site.ts` → constante `WHATSAPP_NUMBER`. Escribe solo dígitos, con código de país (México: `52` + 10 dígitos).
Todos los botones, el formulario y el botón flotante usan esta constante.
En el mismo archivo están `contact.phone` y `contact.phoneDisplay`, el teléfono para llamadas.

### Colores y tipografías
`src/styles/global.css` → bloque `@theme`:
- `--color-brand-*` es el color primario (azul petróleo).
- `--color-accent-*` es el acento (aqua o menta), y también colorea los botones de WhatsApp.
- `--color-canvas`, `--color-ink` y `--color-muted` son el fondo, el texto y el texto secundario.
- `--font-sans` y `--font-display` son las tipografías. Para cambiarlas, instala otra fuente de Fontsource y actualiza los imports en `Layout.astro`.

Si cambias colores o el nombre, actualiza también `public/favicon.svg` y la paleta de `scripts/generate-images.mjs`, y ejecuta `npm run images`.

### Textos
- Textos de secciones: `src/data/content.ts`
- Tratamientos: `src/data/treatments.ts`
- FAQ: `src/data/faq.ts` (también alimenta el schema FAQPage)
- Title y description SEO, dirección, horarios y redes: `src/config/site.ts`

### Testimonios
`src/data/testimonials.ts` contiene **ejemplos ficticios**, y la interfaz muestra un aviso visible.
Cuando tengas opiniones reales (con autorización del paciente), reemplázalas y cambia `testimonialsAreDemo` a `false`.

### Fotos
Las fotos están en `src/assets/photos/` y son de Unsplash (uso comercial libre; créditos en `CREDITS.md`). Son de **referencia**: reemplázalas por fotos reales de la clínica.
- La forma más fácil es sustituir el archivo y conservar su nombre, por ejemplo `hero.jpg`.
- También puedes cambiar los imports en `src/data/content.ts`.

Astro las optimiza al compilar (AVIF/WebP y tamaños responsivos). Si quitas `image` de un elemento de la galería, se muestra un placeholder.

### Reutilizar para otro giro
Los componentes no saben que se trata de una clínica dental, porque todo llega por props desde `index.astro`.
Para un psicólogo, una barbería u otro negocio:
1. Edita `config/site.ts` y `data/*`.
2. Agrega los iconos que necesites en `components/ui/icons.ts`.
3. En `lib/schema.ts`, cambia `@type: 'Dentist'` por el tipo adecuado, por ejemplo `Physiotherapy`, `BeautySalon`, `HairSalon` o `LocalBusiness`.
4. Revisa el aviso de privacidad.

## Despliegue

Antes de publicar, cambia `SITE.url` en `src/config/site.ts` por el dominio real. Esta URL se usa en canonical, Open Graph, sitemap y robots.txt.

El sitio es 100 % estático. Cualquier hosting estático funciona:

- **Netlify**: conecta el repo con build command `npm run build` y publish directory `dist`.
- **Vercel**: importa el repo; detecta Astro automáticamente.
- **Cloudflare Pages**: usa el preset “Astro”, con build `npm run build` y output `dist`.
- **Manual**: ejecuta `npm run build` y sube el contenido de `dist/` a tu servidor.

## Calidad

- Lighthouse (local, producción): 100 en Performance, Accessibility, Best Practices y SEO, tanto en móvil como en escritorio.
- Probado desde 320 px de ancho, sin scroll horizontal.
- Accesibilidad: enlace “Saltar al contenido”, menú móvil con `aria-expanded`, cierre con Escape, `inert` en el fondo y foco gestionado. Los acordeones son `<details>` nativos. El formulario tiene labels, `aria-invalid` y `aria-describedby` en los errores. Se respeta `prefers-reduced-motion`.
- SEO: title, description, canonical, Open Graph y Twitter Card, sitemap, robots.txt, JSON-LD `Dentist` y `FAQPage`. Las reseñas ficticias no se incluyen en el schema.
