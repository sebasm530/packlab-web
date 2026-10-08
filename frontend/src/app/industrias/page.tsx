import { PageHero, ContentNotice, pageMetadata } from '@/components/page-hero';
import { ContactBanner } from '@/components/contact-banner';
import { content } from '@/data/content';

export const metadata = pageMetadata('Industrias', 'Sectores de referencia del prototipo Pack Lab: necesidades de empaque industrial por validar.');

export default function IndustriesPage() {
  return <><PageHero title="Distintos sectores. Un mismo compromiso." eyebrow="INDUSTRIAS / CONTEXTOS DE EMPAQUE" description="Cada operación tiene sus propios desafíos. Entender el contexto ayuda a plantear las preguntas adecuadas." /><section className="section container"><ContentNotice>Los siguientes sectores y sus necesidades son ejemplos para el prototipo. No representan una lista confirmada de industrias atendidas, clientes ni capacidades certificadas de Pack Lab.</ContentNotice><div className="industry-detail-grid">{content.industries.map((industry, i) => <article className="industry-detail" key={industry.title}><span className="detail-number">0{i + 1}</span><h2>{industry.title}</h2><p>{industry.text}</p><span className="pending">Sector provisional · Por confirmar</span></article>)}</div></section><ContactBanner /></>;
}
