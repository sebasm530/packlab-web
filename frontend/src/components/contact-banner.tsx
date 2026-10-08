import Link from 'next/link';

export function ContactBanner() {
  return (
    <section className="contact-section">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow">EL SIGUIENTE PASO EMPIEZA CON UNA CONVERSACIÓN</p>
          <h2>Tu próximo reto de empaque.<br />Lo pensamos juntos.</h2>
          <p>Cuéntanos qué necesitas proteger, optimizar o transformar.</p>
        </div>
        <div className="contact-note">
          <span className="contact-arrow" aria-hidden="true">↗</span>
          <h3>Consultas y cotizaciones</h3>
          <p>Explora el formulario de consulta. El envío y los datos oficiales de contacto están pendientes.</p>
          <Link className="button button-light" href="/contacto">Ir a Contacto <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
