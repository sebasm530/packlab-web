import Image from 'next/image';
import Link from 'next/link';
import { pageMetadata } from '@/components/page-hero';
import { CtaLink } from '@/components/cta-link';
import { AboutVideo } from '@/components/about-video';
import { AboutMotion } from '@/components/about-motion';
import { aboutContent } from '@/data/about';
import hero from '../../../public/images/hero-nosotros.png';
import approach from '../../../public/images/historia-packlab.png';
import './about.css';

const copy = aboutContent.es;
export const metadata = pageMetadata('Nosotros', 'Conocé Pack Lab: su misión, visión y enfoque en soluciones de empaque especializado para el transporte de productos.');

function LineIcon({ kind }: { kind: 'purpose' | 'future' | 'design' | 'technology' | 'transport' }) {
  return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === 'purpose' ? <><circle cx="16" cy="16" r="11" /><circle cx="16" cy="16" r="5" /><path d="m16 16 12-12M22 4h6v6" /></> : kind === 'future' ? <><path d="M3 24h26M7 21a9 9 0 0 1 18 0M16 2v5M4 8l4 4M28 8l-4 4M16 13v7m-3-3 3-3 3 3" /></> : kind === 'design' ? <><path d="m5 10 11-6 11 6v13l-11 6-11-6ZM5 10l11 6 11-6M16 16v13" /></> : kind === 'technology' ? <><rect x="8" y="8" width="16" height="16" rx="2" /><rect x="12" y="12" width="8" height="8" rx="1" /><path d="M12 4v4M20 4v4M12 24v4M20 24v4M4 12h4M4 20h4M24 12h4M24 20h4" /></> : <><path d="M3 8h17v14H3ZM20 13h5l4 5v4h-9" /><circle cx="9" cy="24" r="3" /><circle cx="24" cy="24" r="3" /></>}
  </svg>;
}

export default function AboutPage() {
  return <div className="pack-about"><AboutMotion />
    <section className="pack-about-hero" aria-labelledby="about-title">
      <Image src={hero} alt="Escena industrial ilustrativa generada con IA, con materiales de cartón y maquinaria" fill sizes="100vw" loading="eager" fetchPriority="high" className="pack-about-heroImage" />
      <div className="pack-about-heroShade" />
      <div className="pack-about-frame pack-about-heroContent"><nav aria-label="Ruta de navegación" className="pack-about-breadcrumb"><Link href="/">Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">Nosotros</span></nav><p className="pack-about-eyebrow">NUESTRA EMPRESA</p><h1 id="about-title"><span><span>Detrás de cada gran</span></span><span><span>operación, hay una</span></span><span><span>solución inteligente.</span></span></h1><p className="pack-about-heroDescription">Conocé cómo Pack Lab aborda los desafíos de empaque con soluciones pensadas para las necesidades de cada operación.</p></div>
      <span className="pack-about-illustration">Imagen ilustrativa generada con IA</span>
    </section>
    <section className="pack-about-section" aria-labelledby="about-intro-title"><div className="pack-about-frame pack-about-intro" data-about-reveal="0"><div><p className="pack-about-eyebrow">CONOCÉ PACK LAB</p><h2 id="about-intro-title">Más que empaques,<br />soluciones que<br />impulsan negocios.</h2><p className="pack-about-copy">{copy.introduction}</p></div><AboutVideo /></div></section>
    <section className="pack-about-purpose pack-about-section" aria-labelledby="about-purpose-title"><div className="pack-about-frame"><div className="pack-about-sectionHeading" data-about-reveal="0"><p className="pack-about-eyebrow">LO QUE NOS DEFINE</p><h2 id="about-purpose-title">Nuestro propósito,<br />nuestra dirección.</h2></div><div className="pack-about-purposeGrid">
      <article className="pack-about-purposeCard pack-about-mission" data-about-reveal="0"><LineIcon kind="purpose" /><span className="pack-about-cardLabel">NUESTRO PROPÓSITO</span><h3>Misión</h3><p>{copy.mission}</p></article>
      <article className="pack-about-purposeCard pack-about-vision" data-about-reveal="70"><LineIcon kind="future" /><span className="pack-about-cardLabel">NUESTRA DIRECCIÓN</span><h3>Visión</h3><p>{copy.vision}</p></article>
    </div><p className="pack-about-source">Traducción al español de las declaraciones publicadas en el <a href="https://www.packlaben.com/about.html" target="_blank" rel="noopener noreferrer">sitio oficial de Pack Lab ↗</a>.</p></div></section>
    <section className="pack-about-section" aria-labelledby="about-approach-title"><div className="pack-about-frame pack-about-approach"><figure data-about-reveal="0"><div className="pack-about-approachImage"><Image src={approach} alt="Representación ilustrativa de embalajes de cartón generada con IA; no muestra productos ni instalaciones reales de Pack Lab" fill sizes="(max-width: 760px) calc(100vw - 40px), 52vw" loading="lazy" /></div><figcaption>Imagen ilustrativa generada con IA; no representa instalaciones ni productos reales de Pack Lab.</figcaption></figure><div data-about-reveal="70"><p className="pack-about-eyebrow">NUESTRO ENFOQUE</p><h2 id="about-approach-title">Un enfoque en<br />soluciones reales.</h2><p className="pack-about-copy">{copy.approach}</p><span className="pack-about-editorialLine" aria-hidden="true" /></div></div></section>
    <section className="pack-about-capabilities pack-about-section" aria-labelledby="about-work-title"><div className="pack-about-frame"><div className="pack-about-workHeading" data-about-reveal="0"><div><p className="pack-about-eyebrow">NUESTRA FORMA DE TRABAJAR</p><h2 id="about-work-title">De la necesidad<br />a la solución.</h2></div><p>Capacidades descritas en la información pública de Pack Lab.</p></div><div className="pack-about-capabilityGrid">{copy.capabilities.map((item, index) => <article key={item.title} data-about-reveal={index * 60}><div className="pack-about-capabilityTop"><span>0{index + 1}</span><LineIcon kind={(['design', 'technology', 'transport'] as const)[index]} /></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
    <section className="pack-about-close" aria-labelledby="about-close-title"><div className="pack-about-frame" data-about-reveal="0"><h2 id="about-close-title">Conozcamos tu<br />próximo desafío.</h2><CtaLink href="/soluciones" className="pack-about-button">Explorar nuestras soluciones</CtaLink></div></section>
  </div>;
}
