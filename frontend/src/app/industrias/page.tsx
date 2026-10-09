import Image from 'next/image';
import Link from 'next/link';
import { pageMetadata } from '@/components/page-hero';
import { CtaLink } from '@/components/cta-link';
import { IndustriesMotion } from '@/components/industries-motion';
import hero from '../../../public/images/hero-industrias.png';
import { industriesContent } from '@/data/industries-content';
import './industries.css';

export const metadata = pageMetadata('Industrias', 'Electrónica, dispositivos médicos, automotor, alimenticio, aeroespacial y agricultura: necesidades de protección, almacenamiento y distribución.');

export default function IndustriesPage() {
 return <div className="pack-industries"><IndustriesMotion />
  <section className="pi-hero" aria-labelledby="industries-title">
   <Image src={hero} alt="Escena ilustrativa de un entorno industrial con embalajes y equipos de manipulación" fill sizes="100vw" loading="eager" fetchPriority="high" className="pi-hero-image" />
   <div className="pi-overlay" />
   <div className="pi-frame pi-hero-content">
    <nav className="pi-breadcrumb" aria-label="Ruta de navegación"><Link href="/">Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">Industrias</span></nav>
    <p className="pi-eyebrow">INDUSTRIAS</p>
    <h1 id="industries-title">Soluciones para industrias que no se detienen.</h1>
    <p className="pi-hero-description">Cada sector enfrenta desafíos únicos de protección, almacenamiento y distribución. Conoce las industrias a las que suministramos.</p>
    <CtaLink href="#sectores" className="pi-text-link">Explorar industrias</CtaLink>
   </div>
  </section>
  <section className="pi-section pi-sectors" id="sectores" aria-labelledby="sectors-title">
   <div className="pi-frame">
    <div className="pi-editorial pi-intro" data-industries-reveal="0">
     <div><p className="pi-eyebrow">SECTORES QUE ATENDEMOS</p><h2 id="sectors-title">Diferentes industrias. Un mismo compromiso con la protección.</h2></div>
     <p className="pi-copy">Desde componentes electrónicos hasta productos agrícolas, cada industria requiere considerar las características de sus productos y las condiciones de su operación.</p>
    </div>
    <div className="pi-sector-grid">{industriesContent.sectors.map((sector,index) =>
     <article className="pi-sector" key={sector.title} data-industries-reveal={String(index%3*55)}>
      <div className="pi-card-image"><Image src={sector.image} alt={sector.alt} fill sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1050px) 46vw, 31vw" loading="lazy" /></div>
      <div className="pi-card-content"><span className="pi-number">0{index+1} / INDUSTRIAS</span><h3>{sector.title}</h3><p>{sector.description}</p></div>
     </article>)}</div>
   </div>
  </section>
  <section className="pi-section pi-needs" aria-labelledby="needs-title">
   <div className="pi-frame pi-needs-layout">
    <div data-industries-reveal="0"><p className="pi-eyebrow">EL PRODUCTO COMO PUNTO DE PARTIDA</p><h2 id="needs-title">Cada producto plantea un desafío diferente.</h2><CtaLink href="/soluciones" className="pi-solution-link">Conoce nuestras soluciones</CtaLink></div>
    <ol className="pi-needs-list">{industriesContent.needs.map((need,index)=><li key={need.title} data-industries-reveal="50"><span className="pi-number">0{index+1}</span><div><h3>{need.title}</h3><p>{need.description}</p></div></li>)}</ol>
   </div>
  </section>
 </div>;
}
