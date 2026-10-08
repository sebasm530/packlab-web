"use client";

import { content } from '@/data/content';

export function ContactForm() {
  return (
    <form className="contact-form" aria-labelledby="form-title" aria-describedby="form-notice" onSubmit={event => event.preventDefault()}>
      <p className="eyebrow">TU CONSULTA</p>
      <h2 id="form-title">Cuéntanos sobre tu proyecto.</h2>
      <p className="form-notice" id="form-notice">{content.contact.notice}</p>
      <div className="form-grid">
        <div><label htmlFor="name">Nombre</label><input id="name" name="name" autoComplete="off" placeholder="Tu nombre" /></div>
        <div><label htmlFor="company">Empresa</label><input id="company" name="company" autoComplete="off" placeholder="Nombre de la empresa" /></div>
        <div><label htmlFor="email">Correo electrónico</label><input id="email" name="email" type="email" autoComplete="off" placeholder="nombre@empresa.com" /></div>
        <div><label htmlFor="phone">Teléfono <span>(opcional)</span></label><input id="phone" name="phone" type="tel" autoComplete="off" placeholder="Número de contacto" /></div>
        <div className="form-full"><label htmlFor="interest">¿Qué solución te interesa?</label><select id="interest" name="interest" defaultValue=""><option value="" disabled>Selecciona una opción</option>{content.solutions.map(solution => <option value={solution.slug} key={solution.slug}>{solution.title}</option>)}<option value="general">Consulta general</option></select></div>
        <div className="form-full"><label htmlFor="message">Consulta</label><textarea id="message" name="message" rows={5} placeholder="Describe el reto de empaque que quieres explorar." /></div>
      </div>
      <div className="form-bottom"><button type="submit" className="button" disabled aria-describedby="submission-notice">Envío no disponible</button><p id="submission-notice">Prototipo visual · Sin conexión a servicios de envío.</p></div>
    </form>
  );
}
