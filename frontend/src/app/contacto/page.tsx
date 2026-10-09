import Image from 'next/image';
import { pageMetadata } from '@/components/page-hero';
import { ContactForm } from '@/components/contact-form';
import { ContactIcon } from '@/components/contact-icon';
import { Arrow } from '@/components/arrow';
import { contactDetails } from '@/data/contact-details';
import hero from '../../../public/images/ingenieria-embalaje.png';
import industrial from '../../../public/images/hero-soluciones.png';
import './contact.css';

export const metadata = pageMetadata('Contacto', 'Comparte las necesidades de empaque de tu operación. Formulario y canales oficiales pendientes de integración.');
export default function ContactPage() {
 return <div className="pack-contact">
  <section className="pc-hero" aria-labelledby="contact-title"><Image src={hero} alt="Imagen ilustrativa de embalajes industriales de cartón" fill sizes="100vw" loading="eager" fetchPriority="high" className="pc-hero-image"/><div className="pc-hero-shade"/><div className="pc-frame pc-hero-content"><p className="pc-eyebrow">CONTACTO</p><h1 id="contact-title">Hablemos de lo que tu operación necesita.</h1><p>Cuéntanos sobre tu proyecto o los desafíos de tu operación. Queremos conocer tus necesidades y explorar cómo podemos ayudarte.</p></div></section>
  <section className="pc-main" aria-label="Consulta y canales de contacto"><div className="pc-frame pc-grid">
   <div className="pc-form-area"><ContactForm /></div>
   <aside className="pc-whatsapp" aria-labelledby="whatsapp-title"><div className="pc-whatsapp-icon"><ContactIcon kind="whatsapp"/></div><div><p className="pc-eyebrow">CONTÁCTANOS AHORA</p><h2 id="whatsapp-title">¿Prefieres escribirnos por WhatsApp?</h2><p className="pc-whatsapp-copy">Conversemos directamente sobre las necesidades de tu operación.</p><div className="pc-whatsapp-action">{contactDetails.whatsappUrl ? <a href={contactDetails.whatsappUrl} target="_blank" rel="noopener noreferrer" className="pc-whatsapp-button">Abrir WhatsApp <Arrow /></a> : <button disabled className="pc-whatsapp-button" aria-describedby="whatsapp-pending">Abrir WhatsApp <Arrow /></button>}<span id="whatsapp-pending">Enlace pendiente</span></div></div></aside>
   <aside className="pc-details" aria-labelledby="contact-details-title"><h2 id="contact-details-title">Otras formas de contacto</h2><dl>{contactDetails.fields.map(field=><div className="pc-contact-row" key={field.kind}><span className="pc-detail-icon"><ContactIcon kind={field.kind}/></span><div><dt>{field.label}</dt><dd>{field.value}</dd></div></div>)}</dl></aside>
   <div className="pc-photo"><Image src={industrial} alt="Escena ilustrativa de un proceso industrial de embalaje con cajas de cartón" fill sizes="(max-width: 760px) max(calc(100vw - 40px), 500px), (max-width: 950px) max(44vw, 360px), 800px" loading="lazy" /></div>
  </div></section>
 </div>;
}
