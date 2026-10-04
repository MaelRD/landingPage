import type { ImageMetadata } from 'astro';
import type { IconName } from '@/components/ui/icons';

export type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink extends NavLink {
  icon: IconName;
}

export interface OpeningHours {
  label: string;
  days: DayOfWeek[];
  /** Formato 24 h, "HH:MM". */
  opens: string;
  closes: string;
}

/** Bloque genérico de icono + título + texto (confianza, beneficios, pasos). */
export interface Feature {
  title: string;
  description: string;
  icon: IconName;
}

export interface Service extends Feature {
  id: string;
  /** Dato breve que acompaña al servicio (beneficio clave). */
  highlight: string;
  /** Duración aproximada de la sesión. */
  duration: string;
  /** Para quién es ideal, en una frase. */
  idealFor: string;
  /** Qué incluye, en 2–3 puntos. */
  includes: string[];
}

export interface Testimonial {
  name: string;
  service: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type MediaTone = 'brand' | 'accent' | 'sand';

export interface GalleryItem {
  title: string;
  caption: string;
  icon: IconName;
  tone: MediaTone;
  /** Imagen real opcional (importada desde src/assets). Si falta, se muestra un placeholder. */
  image?: ImageMetadata;
  alt?: string;
}

/** Mensaje del chat de ejemplo en la sección de proceso. */
export interface ChatMessage {
  from: 'patient' | 'clinic';
  text: string;
  /** Paso del proceso (1…n) en el que aparece el mensaje. */
  step: number;
}

/** Encabezado estándar de sección. */
export interface SectionCopy {
  eyebrow: string;
  title: string;
  description?: string;
}
