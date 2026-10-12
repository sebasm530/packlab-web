'use client';
import { Arrow } from './arrow';
import { ContactIcon } from './contact-icon';

function FormIcon({kind}:{kind:'user'|'building'|'message'|'info'|'send'}) {
 const paths = {
 user:<><circle cx="12" cy="7" r="3"/><path d="M5 21v-3a7 7 0 0 1 14 0v3"/></>,
 building:<><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h1m4 0h1M9 11h1m4 0h1m-6 4h1m4 0h1m-4 6v-3h2v3"/></>,
 message:<path d="M21 12a9 9 0 0 1-9 9 10 10 0 0 1-4-.8L3 21l.8-5A9 9 0 1 1 21 12Z"/>,
 info:<><circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/></>,
 send:<><path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="m11 13 6-6"/></>,
 };
 return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>;
}

export function ContactForm() {
 return <form className="pc-form" aria-labelledby="form-title" aria-describedby="submission-notice" autoComplete="off" onSubmit={event=>event.preventDefault()}>
  <p className="pc-form-eyebrow">TU CONSULTA</p>
  <h2 id="form-title">Contanos sobre tu proyecto.</h2>
  <p className="pc-form-description">Explorá los campos de consulta en esta versión demostrativa.</p>
  <p className="pc-notice" id="submission-notice"><FormIcon kind="info"/><span>Versión demostrativa: el envío de consultas estará disponible cuando se complete la integración del formulario</span></p>
  <div className="pc-fields">
   <div><label htmlFor="name">Nombre completo <span aria-hidden="true">*</span></label><div className="pc-input-wrap"><span className="pc-input-icon"><FormIcon kind="user"/></span><input id="name" name="name" required minLength={2} placeholder="Tu nombre" /></div></div>
   <div><label htmlFor="company">Empresa <small>(opcional)</small></label><div className="pc-input-wrap"><span className="pc-input-icon"><FormIcon kind="building"/></span><input id="company" name="company" placeholder="Nombre de tu empresa" /></div></div>
   <div><label htmlFor="email">Correo electrónico <span aria-hidden="true">*</span></label><div className="pc-input-wrap"><span className="pc-input-icon"><ContactIcon kind="email"/></span><input id="email" name="email" type="email" required placeholder="tu@empresa.com" /></div></div>
   <div><label htmlFor="phone">Teléfono <small>(opcional)</small></label><div className="pc-input-wrap"><span className="pc-input-icon"><ContactIcon kind="phone"/></span><input id="phone" name="phone" type="tel" placeholder="Número de contacto" /></div></div>
   <div className="pc-full"><label htmlFor="message">Mensaje <span aria-hidden="true">*</span></label><div className="pc-input-wrap pc-message-wrap"><span className="pc-input-icon"><FormIcon kind="message"/></span><textarea id="message" name="message" required minLength={10} rows={5} placeholder="Describí el reto de empaque que querés explorar." /></div></div>
  </div>
  <button className="pc-submit" type="submit" disabled aria-describedby="submission-notice"><FormIcon kind="send"/>Enviar consulta <Arrow /></button>
 </form>;
}
