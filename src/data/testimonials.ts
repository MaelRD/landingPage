import type { Testimonial } from '@/types';

/**
 * ⚠️ TESTIMONIOS DE DEMOSTRACIÓN.
 * Son ejemplos ficticios para mostrar el diseño. No corresponden a pacientes reales.
 * Reemplázalos por opiniones reales (con autorización del paciente) antes de publicar
 * y cambia `testimonialsAreDemo` a `false` para ocultar el aviso en la interfaz.
 */
export const testimonialsAreDemo = true;

export const testimonials: Testimonial[] = [
  {
    name: 'Andrea M.',
    service: 'Limpieza dental',
    quote:
      'Agendé por WhatsApp en la mañana y me atendieron esa misma semana. Me explicaron todo con calma y sin presionarme a hacer tratamientos extra.',
    rating: 5,
  },
  {
    name: 'Luis R.',
    service: 'Ortodoncia',
    quote:
      'Desde la primera cita me dieron un plan con tiempos y costos. Llevo ocho meses con alineadores y el seguimiento ha sido constante.',
    rating: 5,
  },
  {
    name: 'Fernanda G.',
    service: 'Blanqueamiento',
    quote:
      'Me daba miedo la sensibilidad, pero me prepararon antes del tratamiento. El resultado se ve natural y el lugar es muy cómodo.',
    rating: 5,
  },
  {
    name: 'Jorge P.',
    service: 'Urgencias dentales',
    quote:
      'Escribí un sábado con mucho dolor y me dieron espacio ese mismo día. Salí sin dolor y con indicaciones claras para los días siguientes.',
    rating: 5,
  },
];
