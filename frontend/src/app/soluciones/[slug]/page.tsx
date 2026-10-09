import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { content } from '@/data/content';
import { solutionDesign } from '@/data/solution-design';
import { pageMetadata } from '@/components/page-hero';
import { CtaLink } from '@/components/cta-link';
import { Arrow } from '@/components/arrow';
import { SolutionsHero } from '@/components/solutions-hero';
import { SolutionsMotion } from '@/components/solutions-motion';
import '../solutions.css';
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return content.solutions.map(({slug}) => ({slug})); }
export async function generateMetadata({params}: Props) { const {slug}=await params; const item=content.solutions.find(solution=>solution.slug===slug); if (!item) notFound(); return pageMetadata(item.title,item.summary); }
export default async function SolutionDetailPage({params}: Props) {
 const {slug}=await params; const item=content.solutions.find(solution=>solution.slug===slug); if (!item) notFound(); const design=solutionDesign[slug];
 return <div className={`pack-sol pack-sol-detail pack-sol-${design.variant}`}><SolutionsMotion /><SolutionsHero image={design.image} title={design.title} description={item.summary} label={item.title} position={design.position} />
  <section id="enfoque" className="pack-sol-section"><div className="pack-sol-frame"><div className="pack-sol-editorial" data-sol-reveal="0"><div><p className="pack-sol-eyebrow">EL ENFOQUE / {item.title}</p><h2>{item.headline}</h2></div><div><p className="pack-sol-copy">{item.description}</p><p className="pack-sol-note">Enfoque demostrativo del servicio, sujeto a validación de Pack Lab.</p></div></div><div className="pack-sol-benefitGrid">{item.focus.map((focus,index)=><article key={focus.title} data-sol-reveal={index*50}><span className="pack-sol-number">0{index+1}</span><h3>{focus.title}</h3><p>{focus.text}</p></article>)}</div></div></section>
  <section className="pack-sol-section pack-sol-visualSection"><div className={`pack-sol-frame pack-sol-serviceGrid ${design.variant==='inventory'||design.variant==='deliveries' ? 'pack-sol-visualReverse' : ''}`}><div className="pack-sol-image pack-sol-detailImage" data-sol-reveal="0"><Image src={design.image} alt={`Representación ilustrativa de ${item.title.toLowerCase()}`} fill sizes="(max-width: 760px) calc(100vw - 40px), 52vw" loading="lazy" style={{objectPosition:design.position}} /></div><div data-sol-reveal="60"><p className="pack-sol-eyebrow">EL RETO DE TU OPERACIÓN</p><h2>{design.visualTitle}</h2><p className="pack-sol-copy">{item.focus[1].text}</p><p className="pack-sol-note">Las alternativas se plantean según las características y necesidades de cada proyecto.</p></div></div></section>
  <section className="pack-sol-section pack-sol-applications"><div className="pack-sol-frame pack-sol-editorial"><div data-sol-reveal="0"><p className="pack-sol-eyebrow">PARA EMPEZAR</p><h2>Entendamos<br />tu necesidad.</h2><p className="pack-sol-copy">Estas preguntas orientan una primera conversación sobre cómo integrar la solución en tu operación.</p><CtaLink href="/contacto" className="pack-sol-button pack-sol-dark">Conversar sobre esta solución</CtaLink></div><ol className="pack-sol-questions" data-sol-reveal="60">{item.questions.map((question,index)=><li key={question}><span>0{index+1}</span><h3>{question}</h3></li>)}</ol></div></section>
  <section className="pack-sol-section pack-sol-related"><div className="pack-sol-frame"><div data-sol-reveal="0"><p className="pack-sol-eyebrow">UNA MIRADA MÁS AMPLIA</p><h2>Otras soluciones.<br />Nuevas posibilidades.</h2></div><div className="pack-sol-relatedGrid">{content.solutions.filter(other=>other.slug!==slug).map((other,index)=><Link href={`/soluciones/${other.slug}`} key={other.slug} data-sol-reveal={index*40}><div className="pack-sol-relatedImage"><Image src={solutionDesign[other.slug].image} alt="" fill sizes="(max-width: 760px) calc(100vw - 40px), 30vw" loading="lazy" /></div><div><h3>{other.title}</h3><Arrow /></div></Link>)}</div></div></section>
 </div>;
}
