import Link from 'next/link';
import { notFound } from 'next/navigation';
import { content } from '@/data/content';
import { PageHero, ContentNotice, pageMetadata } from '@/components/page-hero';
import { ContactBanner } from '@/components/contact-banner';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return content.solutions.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const solution = content.solutions.find(item => item.slug === slug);
  if (!solution) notFound();
  return pageMetadata(solution.title, solution.summary);
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = content.solutions.find(item => item.slug === slug);
  if (!solution) notFound();
  return (
    <>
      <PageHero title={solution.title} eyebrow="SOLUCIONES / PACK LAB" description={solution.headline} parent={{ label: 'Soluciones', href: '/soluciones' }} />
      <section className="section container">
        <ContentNotice />
        <div className="detail-intro"><p className="eyebrow">EL ENFOQUE</p><h2>{solution.headline}</h2><p>{solution.description}</p></div>
        <div className="focus-grid">{solution.focus.map((item, i) => <article className="focus-card" key={item.title}><span className="detail-number">0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>
      <section className="section solutions"><div className="container discovery-grid"><div><p className="eyebrow">PARA EMPEZAR</p><h2>Entendamos tu necesidad.</h2><p className="muted">Estas preguntas orientan una primera conversación sobre tu proyecto.</p><Link href="/contacto" className="button">Explorar contacto <span aria-hidden="true">→</span></Link></div><ol className="question-list">{solution.questions.map(question => <li key={question}>{question}</li>)}</ol></div></section>
      <section className="section container"><p className="eyebrow">OTRAS SOLUCIONES</p><div className="related-links">{content.solutions.filter(item => item.slug !== slug).map(item => <Link href={`/soluciones/${item.slug}`} key={item.slug}>{item.title}<span aria-hidden="true">↗</span></Link>)}</div></section>
      <ContactBanner />
    </>
  );
}
