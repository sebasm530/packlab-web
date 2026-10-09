import Image from 'next/image';
import { pageMetadata } from '@/components/page-hero';
import { CtaLink } from '@/components/cta-link';
import { SolutionsHero } from '@/components/solutions-hero';
import { SolutionsMotion } from '@/components/solutions-motion';
import { content } from '@/data/content';
import { solutionDesign, solutionsHero } from '@/data/solution-design';
import './solutions.css';
export const metadata = pageMetadata('Soluciones', 'Explorá ingeniería de embalaje, gestión de inventarios, soluciones sostenibles y entregas eficientes para tu operación.');
export default function SolutionsPage() {
 return <div className="pack-sol"><SolutionsMotion /><SolutionsHero overview image={solutionsHero} title="Soluciones que acompañan cada etapa de tu operación." description="Embalaje, inventarios, sostenibilidad y logística en un solo aliado. Desarrollamos soluciones que se adaptan a las necesidades de tu industria." label="Soluciones" />
  <section className="pack-sol-section pack-sol-intro"><div className="pack-sol-frame pack-sol-editorial" data-sol-reveal="0"><div><p className="pack-sol-eyebrow">UNA VISIÓN INTEGRAL</p><h2>El empaque conecta<br />toda tu operación.</h2></div><div><p className="pack-sol-copy">Desde las características del producto hasta su recorrido: explorá cuatro enfoques complementarios para pensar el empaque en el contexto de tu negocio.</p><p className="pack-sol-note">Contenido demostrativo. El alcance de los servicios requiere validación de Pack Lab.</p></div></div></section>
  <div id="explorar-soluciones" className="pack-sol-editorials">{content.solutions.map((item,index) => { const design = solutionDesign[item.slug]; return <section className={`pack-sol-section pack-sol-service ${index % 2 ? 'pack-sol-reversed' : ''}`} key={item.slug} aria-labelledby={`service-${item.slug}`}><div className="pack-sol-frame pack-sol-serviceGrid"><div className="pack-sol-image" data-sol-reveal="0"><Image src={design.image} alt={`Imagen ilustrativa de ${item.title.toLowerCase()}`} fill sizes="(max-width: 760px) calc(100vw - 40px), 48vw" loading="lazy" /></div><div className="pack-sol-serviceText" data-sol-reveal="70"><p className="pack-sol-eyebrow"><span className="pack-sol-number">0{index+1}</span>{item.title}</p><h2 id={`service-${item.slug}`}>{design.title}</h2><p className="pack-sol-copy">{item.summary}</p><ul className="pack-sol-benefitList">{item.focus.map(focus => <li key={focus.title}>{focus.title}</li>)}</ul><CtaLink href={`/soluciones/${item.slug}`} className="pack-sol-button pack-sol-outline">Explorar {item.title.toLowerCase()}</CtaLink></div></div></section>; })}</div>
 </div>;
}
