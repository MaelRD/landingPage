/**
 * Genera los PNG de marca a partir de SVG: iconos y la imagen para redes sociales (Open Graph).
 * Ejecuta `npm run images` después de cambiar el logo, los colores o el nombre.
 */
import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const BRAND = { dark: '#0b1f27', primary: '#12303a', accent: '#3bc1a0', light: '#eef6f7' };
const NAME = 'Nova Dental';
const HEADLINE = 'Tu sonrisa merece atención sin complicaciones.';
const TAGLINE = 'Agenda tu valoración por WhatsApp';

const favicon = await readFile('public/favicon.svg');

for (const [file, size] of [
  ['public/favicon-32.png', 32],
  ['public/apple-touch-icon.png', 180],
  ['public/icon-512.png', 512],
]) {
  await sharp(favicon, { density: 72 * (size / 32) * 2 }).resize(size, size).png().toFile(file);
}

// Divide el titular en líneas de ~24 caracteres para el SVG.
const lines = HEADLINE.split(' ').reduce((acc, word) => {
  const last = acc.at(-1);
  if (last && `${last} ${word}`.length <= 24) acc[acc.length - 1] = `${last} ${word}`;
  else acc.push(word);
  return acc;
}, []);

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g1" cx="0.15" cy="0.1" r="0.7"><stop offset="0" stop-color="#2f7887" stop-opacity="0.7"/><stop offset="1" stop-color="${BRAND.dark}" stop-opacity="0"/></radialGradient>
    <radialGradient id="g2" cx="0.95" cy="1" r="0.6"><stop offset="0" stop-color="#1fa586" stop-opacity="0.55"/><stop offset="1" stop-color="${BRAND.dark}" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${BRAND.dark}"/>
  <rect width="1200" height="630" fill="url(#g1)"/>
  <rect width="1200" height="630" fill="url(#g2)"/>
  <circle cx="980" cy="315" r="260" fill="none" stroke="#fff" stroke-opacity="0.08"/>
  <circle cx="980" cy="315" r="170" fill="none" stroke="#fff" stroke-opacity="0.1"/>
  <g transform="translate(890 225) scale(7.5)" fill="none" stroke="#fff" stroke-opacity="0.9" stroke-width="0.9" stroke-linejoin="round">
    <path d="M7 3C4.8 3 3 4.8 3 7.2c0 2.3.9 3.7 1.6 5.4.7 1.8.9 4.1 1.4 6.2.3 1.3.8 2.2 1.8 2.2 1.1 0 1.4-1.2 1.7-2.7.3-1.5.6-3.3 2.5-3.3s2.2 1.8 2.5 3.3c.3 1.5.6 2.7 1.7 2.7 1 0 1.5-.9 1.8-2.2.5-2.1.7-4.4 1.4-6.2.7-1.7 1.6-3.1 1.6-5.4C21 4.8 19.2 3 17 3c-1.9 0-2.9 1-5 1S8.9 3 7 3z"/>
  </g>
  <g transform="translate(80 80)">
    <rect width="56" height="56" rx="17" fill="#fff"/>
    <g transform="scale(1.75)"><path d="M11.2 8.5c-2 0-3.6 1.6-3.6 3.8 0 2 .8 3.2 1.4 4.8.6 1.6.8 3.6 1.2 5.5.3 1.1.7 1.9 1.6 1.9 1 0 1.2-1 1.5-2.4.3-1.3.5-2.9 2.3-2.9s2 1.6 2.3 2.9c.3 1.4.5 2.4 1.5 2.4.9 0 1.3-.8 1.6-1.9.4-1.9.6-3.9 1.2-5.5.6-1.6 1.4-2.8 1.4-4.8 0-2.2-1.6-3.8-3.6-3.8-1.7 0-2.6.9-4.4.9s-2.7-.9-4.4-.9Z" fill="none" stroke="${BRAND.primary}" stroke-width="1.8" stroke-linejoin="round"/><circle cx="23.5" cy="8.5" r="2.2" fill="${BRAND.accent}"/></g>
    <text x="76" y="38" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="700" font-size="32" fill="#fff">${NAME}</text>
  </g>
  <text font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="700" font-size="60" fill="#fff" letter-spacing="-2">
    ${lines.map((line, i) => `<tspan x="80" y="${290 + i * 76}">${line}</tspan>`).join('')}
  </text>
  <text x="80" y="${290 + lines.length * 76 + 30}" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="${BRAND.accent}">${TAGLINE}</text>
</svg>`;

await writeFile('public/og-image.png', await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toBuffer());
console.log('✓ Imágenes generadas en public/');
