import type { Service } from '@/types';

export const treatments: Service[] = [
  {
    id: 'limpieza',
    title: 'Limpieza dental',
    description:
      'Eliminamos sarro y manchas superficiales para prevenir caries y problemas de encías. Sales con una sensación de frescura que se nota.',
    highlight: 'Recomendada cada 6 meses',
    duration: '40–50 min',
    idealFor: 'Mantener tu boca sana y detectar a tiempo cualquier problema.',
    includes: ['Revisión completa', 'Ultrasonido y pulido', 'Recomendaciones personalizadas'],
    icon: 'tooth',
  },
  {
    id: 'ortodoncia',
    title: 'Ortodoncia',
    description:
      'Alinea tu sonrisa con brackets o alineadores transparentes, con un plan de tiempos y costos claro desde la primera cita.',
    highlight: 'Brackets y alineadores',
    duration: 'Plan de 12–24 meses',
    idealFor: 'Dientes chuecos, separados o una mordida que te incomoda.',
    includes: ['Estudio digital de tu sonrisa', 'Plan con tiempos y costos', 'Citas de control mensuales'],
    icon: 'braces',
  },
  {
    id: 'blanqueamiento',
    title: 'Blanqueamiento',
    description:
      'Aclara varios tonos de forma segura y supervisada, cuidando la sensibilidad de tus dientes en todo momento.',
    highlight: 'Resultado natural',
    duration: '60–90 min',
    idealFor: 'Manchas por café, té o el paso del tiempo.',
    includes: ['Limpieza previa', 'Protección de encías', 'Kit de mantenimiento'],
    icon: 'sparkles',
  },
  {
    id: 'resinas',
    title: 'Resinas',
    description:
      'Restauramos dientes con caries o fracturas usando material del mismo tono que tu diente. Nadie notará la diferencia.',
    highlight: 'Del color de tu diente',
    duration: '30–60 min',
    idealFor: 'Caries, desgaste o pequeñas fracturas.',
    includes: ['Anestesia local sin dolor', 'Color a la medida', 'Pulido final'],
    icon: 'droplet',
  },
  {
    id: 'implantes',
    title: 'Implantes',
    description:
      'Recupera piezas perdidas con una solución fija que se ve, se siente y funciona como un diente natural.',
    highlight: 'Solución fija y duradera',
    duration: 'Plan de 3–6 meses',
    idealFor: 'Volver a masticar y sonreír con seguridad tras perder un diente.',
    includes: ['Radiografía y planeación digital', 'Cirugía guiada', 'Corona estética'],
    icon: 'implant',
  },
  {
    id: 'urgencias',
    title: 'Urgencias dentales',
    description:
      '¿Dolor, inflamación o un diente roto? Escríbenos y te damos prioridad para atenderte lo antes posible.',
    highlight: 'Atención prioritaria',
    duration: 'El mismo día',
    idealFor: 'Dolor intenso, inflamación o un golpe en los dientes.',
    includes: ['Valoración inmediata', 'Alivio del dolor', 'Plan para resolver la causa'],
    icon: 'first-aid',
  },
];
