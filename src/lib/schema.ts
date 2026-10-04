/**
 * Datos estructurados (Schema.org) para buscadores.
 * Nota: no se incluyen reseñas en el schema; los testimonios de la página son de demostración.
 */
import { SITE } from '@/config/site';
import type { FaqItem, Service } from '@/types';

export function dentistSchema(services: Service[]) {
  const { contact } = SITE;
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': `${SITE.url}/#clinic`,
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.seo.description,
    url: SITE.url,
    image: new URL(SITE.seo.ogImage, SITE.url).href,
    logo: new URL('/favicon.svg', SITE.url).href,
    telephone: contact.phone,
    email: contact.email,
    priceRange: SITE.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.street,
      addressLocality: contact.address.locality,
      addressRegion: contact.address.region,
      postalCode: contact.address.postalCode,
      addressCountry: contact.address.country,
    },
    hasMap: contact.mapsUrl,
    openingHoursSpecification: SITE.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: SITE.social.map((s) => s.href),
    availableService: services.map((s) => ({
      '@type': 'MedicalProcedure',
      name: s.title,
      description: s.description,
    })),
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
