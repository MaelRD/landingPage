/**
 * Configuración central del negocio.
 *
 * Todo lo que identifica al negocio (nombre, contacto, horarios, redes, SEO)
 * vive aquí. Para reutilizar la plantilla en otro giro, empieza por este archivo.
 */
import type { DayOfWeek, NavLink, OpeningHours, SocialLink } from '@/types';

/**
 * Número de WhatsApp que recibe las citas.
 * Formato internacional, solo dígitos: código de país + número (sin +, espacios ni guiones).
 * Ejemplo México: 52 + 10 dígitos → '525512345678'.
 */
export const WHATSAPP_NUMBER = '525512345678';

const hours: OpeningHours[] = [
  {
    label: 'Lunes a viernes',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '20:00',
  },
  { label: 'Sábado', days: ['Saturday'], opens: '09:00', closes: '15:00' },
];

export const SITE = {
  name: 'Nova Dental',
  legalName: 'Nova Dental Clínica Odontológica',
  /** URL pública de producción (sin barra final). Se usa en canonical, Open Graph y sitemap. */
  url: 'https://www.novadental.example',
  lang: 'es',
  locale: 'es_MX',
  /** Locale para formatear fechas en el navegador. */
  dateLocale: 'es-MX',

  seo: {
    title: 'Nova Dental · Clínica dental en Ciudad de México | Agenda por WhatsApp',
    description:
      'Agenda tu valoración dental en minutos por WhatsApp. Limpieza, ortodoncia, blanqueamiento, resinas, implantes y urgencias con diagnóstico claro y facilidades de pago.',
    ogImage: '/og-image.png',
    themeColor: '#0b1f27',
  },

  contact: {
    whatsapp: WHATSAPP_NUMBER,
    phone: '+525512345678',
    phoneDisplay: '55 1234 5678',
    email: 'hola@novadental.example',
    address: {
      street: 'Av. Ámsterdam 210, Col. Hipódromo Condesa',
      locality: 'Cuauhtémoc',
      region: 'Ciudad de México',
      postalCode: '06100',
      country: 'MX',
    },
    mapsUrl: 'https://maps.google.com/?q=Av.+%C3%81msterdam+210,+Hip%C3%B3dromo+Condesa,+CDMX',
  },

  hours,
  /** Días sin servicio, solo para mostrar en el pie de página. */
  closedDays: 'Domingo',
  /** Resumen corto para chips y badges. */
  hoursSummary: 'Lun a Sáb · desde las 9:00',

  social: [
    { label: 'Instagram', href: 'https://instagram.com/', icon: 'instagram' },
    { label: 'Facebook', href: 'https://facebook.com/', icon: 'facebook' },
    { label: 'TikTok', href: 'https://tiktok.com/', icon: 'tiktok' },
  ] satisfies SocialLink[],

  nav: [
    { label: 'Inicio', href: '/#inicio' },
    { label: 'Tratamientos', href: '/#tratamientos' },
    { label: 'Nosotros', href: '/#nosotros' },
    { label: 'Opiniones', href: '/#opiniones' },
    { label: 'Preguntas frecuentes', href: '/#preguntas-frecuentes' },
    { label: 'Contacto', href: '/#contacto' },
  ] satisfies NavLink[],

  /** Rango de precios para Schema.org ($, $$, $$$). */
  priceRange: '$$',
} as const;

/** Días en que el negocio abre, derivados de `hours` (0 = domingo … 6 = sábado). */
const DAY_INDEX: Record<DayOfWeek, number> = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};
export const OPEN_DAYS = [...new Set(hours.flatMap((h) => h.days.map((d) => DAY_INDEX[d])))];
