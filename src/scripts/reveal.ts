/**
 * Aparición de elementos al entrar en pantalla.
 * Marca <html> con .reveal-ready (activa los estados ocultos del CSS) y añade .is-in a cada
 * [data-animate] cuando se vuelve visible. Si este script no carga, todo queda visible.
 */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const elements = document.querySelectorAll<HTMLElement>('[data-animate]');

if (!reduce && 'IntersectionObserver' in window && elements.length) {
  // Escalonado automático: cada hijo de [data-stagger] recibe su índice.
  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((parent) => {
    [...parent.children].forEach((child, i) => (child as HTMLElement).style.setProperty('--i', String(i)));
  });

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );

  document.documentElement.classList.add('reveal-ready');
  elements.forEach((el) => observer.observe(el));
}
