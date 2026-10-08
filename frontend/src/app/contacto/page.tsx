import { PageHero, pageMetadata } from '@/components/page-hero';
import { ContactForm } from '@/components/contact-form';
import { content } from '@/data/content';

export const metadata = pageMetadata('Contacto', 'Consulta visual para proyectos de empaque Pack Lab. Datos oficiales y canal de envío pendientes de habilitación.');

export default function ContactPage() {
  return <><PageHero title="Hablemos de tu próximo reto." eyebrow="CONTACTO / PACK LAB" description="La primera conversación empieza por entender qué necesita tu negocio." /><section className="section container contact-page-grid"><aside className="contact-details"><p className="eyebrow">INFORMACIÓN DE CONTACTO</p><h2>Conectemos tu idea<br />con una solución.</h2><p className="muted">Los canales oficiales se publicarán cuando Pack Lab confirme sus datos de contacto.</p><dl>{content.contact.fields.map(field => <div key={field.label}><dt>{field.label}</dt><dd>{field.value}</dd></div>)}</dl><span className="pending">Información oficial pendiente</span></aside><ContactForm /></section></>;
}
