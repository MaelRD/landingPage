/**
 * Textos e imágenes de la página de inicio.
 * Cada sección recibe su contenido desde aquí, así los componentes no dependen del giro del negocio.
 * Las fotos viven en src/assets/photos (ver CREDITS.md) y Astro las optimiza al compilar.
 */
import type { ImageMetadata } from 'astro';
import type { ChatMessage, Feature, GalleryItem, SectionCopy } from '@/types';

import heroImage from '@/assets/photos/hero.jpg';
import consultaImage from '@/assets/photos/consulta.jpg';
import tecnologiaImage from '@/assets/photos/tecnologia.jpg';
import consultorioImage from '@/assets/photos/consultorio.jpg';
import consultorio2Image from '@/assets/photos/consultorio-2.jpg';
import equipoImage from '@/assets/photos/equipo.jpg';
import ambienteImage from '@/assets/photos/ambiente.jpg';
import sonrisaImage from '@/assets/photos/sonrisa.jpg';

export const hero = {
  eyebrow: 'Clínica dental en Condesa, CDMX',
  title: 'Tu sonrisa merece atención',
  titleAccent: 'sin complicaciones.',
  description:
    'Agenda tu valoración en minutos y recibe atención dental personalizada en un espacio moderno, profesional y pensado para ti.',
  primaryCta: 'Agendar por WhatsApp',
  secondaryCta: 'Ver tratamientos',
  whatsappMessage: 'Hola, me gustaría agendar una valoración dental.',
  highlights: ['Respuesta rápida por WhatsApp', 'Costos claros antes de iniciar', 'Meses sin intereses'],
  image: heroImage,
  imageAlt: 'Paciente sonriendo con confianza después de su cita',
  /** Conversación de ejemplo que acompaña la foto (decorativa). */
  chat: [
    { from: 'patient', text: 'Hola 👋 ¿tienen espacio esta semana para una limpieza?' },
    { from: 'clinic', text: '¡Claro! Jueves 17:30 o sábado 10:00 😊' },
  ] as const,
  /** Texto del sello giratorio. */
  badge: 'Agenda en minutos · Por WhatsApp · ',
};

/** Frases de la franja en movimiento bajo el hero. */
export const trust: Feature[] = [
  { title: 'Atención personalizada', description: 'Un plan pensado para tu caso', icon: 'heart' },
  { title: 'Profesionales capacitados', description: 'Especialistas certificados', icon: 'award' },
  { title: 'Tecnología moderna', description: 'Diagnóstico digital preciso', icon: 'scan' },
  { title: 'Facilidades de pago', description: 'Tarjeta y meses sin intereses', icon: 'card' },
  { title: 'Urgencias el mismo día', description: 'Te damos prioridad', icon: 'first-aid' },
];

export const treatmentsSection: SectionCopy & { cta: string } = {
  eyebrow: 'Tratamientos',
  title: 'Todo lo que tu sonrisa necesita, en un solo lugar',
  description: 'Desde una limpieza hasta un implante: te explicamos cada opción y sus costos antes de empezar.',
  cta: 'Consultar por WhatsApp',
};

export const benefitsSection: SectionCopy & { cta: string } = {
  eyebrow: 'Nosotros',
  title: '¿Por qué elegir Nova Dental?',
  description:
    'Creemos que ir al dentista no debería ser complicado. Por eso cuidamos cada detalle para que te sientas informado, cómodo y en confianza.',
  cta: 'Agenda tu valoración',
};

export type Benefit = Feature & { image?: ImageMetadata; imageAlt?: string; stat?: string };

/**
 * Beneficios en formato bento. El diseño asigna tamaños por posición:
 * 1 grande con foto · 2–3 texto · 4 foto · 5 tarjeta oscura con dato · 6 texto.
 */
export const benefits: Benefit[] = [
  {
    title: 'Atención personalizada',
    description:
      'Primero te escuchamos, después proponemos. Un plan pensado para tu caso, tu tiempo y tu presupuesto.',
    icon: 'user-check',
    image: consultaImage,
    imageAlt: 'Dentista conversando con una paciente antes de su tratamiento',
  },
  {
    title: 'Diagnóstico claro',
    description: 'Te explicamos qué tienes, qué opciones existen y cuánto cuesta cada una antes de empezar.',
    icon: 'clipboard',
  },
  {
    title: 'Seguimiento después de consulta',
    description: 'Te escribimos para saber cómo sigues. Tu tratamiento no termina al salir.',
    icon: 'message-heart',
  },
  {
    title: 'Tecnología moderna',
    description: 'Escáner intraoral y radiografía digital: diagnósticos precisos y más cómodos.',
    icon: 'scan',
    image: tecnologiaImage,
    imageAlt: 'Escaneo intraoral digital de una paciente con la imagen 3D en pantalla',
  },
  {
    title: 'Opciones de pago',
    description: 'Efectivo, tarjeta, transferencia y meses sin intereses con tarjetas participantes.',
    icon: 'wallet',
    stat: '3 · 6 · 12',
  },
  {
    title: 'Instalaciones cómodas',
    description: 'Un espacio tranquilo, limpio y luminoso, para que te sientas a gusto desde que llegas.',
    icon: 'sofa',
  },
];

export const processSection: SectionCopy & { cta: string; note: string } = {
  eyebrow: 'Cómo agendar',
  title: 'De tu mensaje a tu consulta, en 4 pasos',
  description: 'Sin llamadas en espera ni formularios eternos. Todo sucede en un solo chat.',
  cta: 'Escríbenos ahora',
  note: 'Respondemos en horario de atención.',
};

export const processSteps: Feature[] = [
  {
    title: 'Escríbenos',
    description: 'Mándanos un mensaje por WhatsApp desde cualquier botón de esta página.',
    icon: 'message',
  },
  {
    title: 'Cuéntanos qué necesitas',
    description: 'Dinos qué te preocupa o qué tratamiento te interesa. Te orientamos sin compromiso.',
    icon: 'message-text',
  },
  {
    title: 'Agenda tu cita',
    description: 'Te proponemos horarios disponibles y confirmamos tu cita en el mismo chat.',
    icon: 'calendar-check',
  },
  {
    title: 'Acude a consulta',
    description: 'Te recibimos puntual, hacemos tu valoración y sales con un plan claro.',
    icon: 'map-pin',
  },
];

/** Conversación ilustrativa que se va revelando con cada paso. */
export const processChat: ChatMessage[] = [
  { from: 'patient', text: 'Hola 👋 quiero agendar una valoración', step: 1 },
  { from: 'clinic', text: '¡Hola! Con gusto te ayudamos. ¿Qué te gustaría atender?', step: 2 },
  { from: 'patient', text: 'Una limpieza, y tengo algo de sensibilidad', step: 2 },
  { from: 'clinic', text: 'Perfecto. Tenemos sábado 10:00 u 11:30, ¿cuál prefieres?', step: 3 },
  { from: 'patient', text: 'Sábado a las 10:00 👍', step: 3 },
  { from: 'clinic', text: '¡Listo! Te esperamos el sábado a las 10:00 en Av. Ámsterdam 210 ✨', step: 4 },
];

export const gallerySection: SectionCopy = {
  eyebrow: 'Conoce la clínica',
  title: 'Un espacio pensado para que te sientas en confianza',
  description: 'Luz natural, materiales cálidos y tecnología discreta. Así se ve tu próxima visita al dentista.',
};

/**
 * Galería editorial. Para cambiar una foto, reemplaza el archivo en src/assets/photos
 * o importa otra imagen y asígnala a `image`. Sin `image` se muestra un placeholder.
 */
export const gallery: GalleryItem[] = [
  {
    title: 'Consultorio',
    caption: 'Luz natural y equipo de última generación',
    icon: 'tooth',
    tone: 'brand',
    image: consultorio2Image,
    alt: 'Consultorio dental luminoso con muro de piedra y ventanal al jardín',
  },
  {
    title: 'Equipo',
    caption: 'Especialistas que te explican cada paso',
    icon: 'users',
    tone: 'accent',
    image: equipoImage,
    alt: 'Ortodoncista sonriendo en su consultorio',
  },
  {
    title: 'Ambiente',
    caption: 'Un lugar tranquilo para esperar tu cita',
    icon: 'leaf',
    tone: 'sand',
    image: ambienteImage,
    alt: 'Rincón de espera cálido con sillón y planta',
  },
  {
    title: 'Instalaciones',
    caption: 'Espacios impecables y equipos modernos',
    icon: 'scan',
    tone: 'accent',
    image: consultorioImage,
    alt: 'Sillón dental moderno en un consultorio blanco y luminoso',
  },
];

export const testimonialsSection: SectionCopy = {
  eyebrow: 'Opiniones',
  title: 'Lo que viven nuestros pacientes',
  description: 'Experiencias de personas que ya agendaron su valoración con nosotros.',
};

export const contactSection: SectionCopy & { formTitle: string; submit: string; privacyNote: string } = {
  eyebrow: 'Contacto',
  title: 'Agenda tu valoración en minutos',
  description:
    'Completa tus datos y te llevamos a WhatsApp con tu mensaje listo para enviar. Te respondemos con los horarios disponibles.',
  formTitle: 'Solicita tu cita',
  submit: 'Enviar por WhatsApp',
  privacyNote: 'Tus datos no se guardan en este sitio: se envían directamente a nuestro WhatsApp.',
};

export const faqSection: SectionCopy & { cta: string } = {
  eyebrow: 'Preguntas frecuentes',
  title: 'Resolvemos tus dudas antes de tu cita',
  description: '¿No encuentras lo que buscas? Escríbenos y te respondemos personalmente.',
  cta: 'Preguntar por WhatsApp',
};

export const finalCta = {
  title: 'Tu próxima sonrisa puede empezar hoy.',
  description:
    'Escríbenos, cuéntanos qué necesitas y te ayudamos a encontrar el mejor horario. Tu valoración incluye diagnóstico y un plan con costos claros.',
  cta: 'Agendar valoración',
  whatsappMessage: 'Hola, me gustaría agendar una valoración dental.',
  image: sonrisaImage,
  imageAlt: 'Sonrisa sana y natural en primer plano',
};

export const footer = {
  description:
    'Clínica dental moderna en la Condesa. Atención personalizada, diagnóstico claro y citas por WhatsApp.',
};
