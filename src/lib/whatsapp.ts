import { WHATSAPP_NUMBER } from '@/config/site';

/** Construye un enlace wa.me con mensaje prellenado opcional. */
export function whatsappUrl(message?: string, phone: string = WHATSAPP_NUMBER): string {
  const base = `https://wa.me/${phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export interface AppointmentRequest {
  name: string;
  phone: string;
  /** Nombre del servicio, o vacío si la persona aún no lo sabe. */
  service: string;
  /** Fecha ya formateada para humanos, p. ej. "sábado 10 de octubre". */
  date?: string;
  notes?: string;
}

/** Mensaje de solicitud de cita que se envía por WhatsApp desde el formulario. */
export function buildAppointmentMessage({ name, phone, service, date, notes }: AppointmentRequest): string {
  const lines = [
    `Hola, soy ${name}.`,
    service
      ? `Me interesa agendar una valoración para ${service.toLowerCase()}.`
      : 'Me interesa agendar una valoración general.',
  ];
  if (date) lines.push(`Mi fecha preferida es el ${date}.`);
  lines.push(`Mi número de contacto es ${phone}.`);

  const message = lines.join(' ');
  return notes ? `${message}\n\n${notes}` : message;
}

/** Mensaje corto para preguntar por un servicio concreto. */
export function serviceInquiryMessage(service: string): string {
  return `Hola, me gustaría recibir información sobre ${service.toLowerCase()} y agendar una valoración.`;
}
