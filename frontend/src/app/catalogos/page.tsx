
import Image from 'next/image';
import catalogHero from '../../../public/images/hero-catalogos.png';
import multinationalImage from '../../../public/images/catalogos-card-multinacionales.png';
import pymesImage from '../../../public/images/catalogos-card-pymes.png';
import displaysImage from '../../../public/images/catalogos-card-displays.png';
const cardImages = { multinacionales: multinationalImage, pymes: pymesImage, displays: displaysImage };
import { existsSync } from 'node:fs';
import path from 'node:path';
import { CtaLink } from '@/components/cta-link';
import { pageMetadata } from '@/components/page-hero';
import { catalogCategories } from '@/data/catalog-categories';
import './catalogs.css';

export const metadata = pageMetadata('Catálogos', 'Explora Multinacionales, Pymes y Displays. Consulta opciones de empaque y solicita información para tu operación. PDF próximamente.');
export default function CatalogsPage() {
 return <div className="pack-catalogs">
  <section className="cat-hero" aria-labelledby="catalog-title"><Image src={catalogHero} alt="Imagen ilustrativa de cajas y materiales de embalaje en un entorno industrial" fill sizes="100vw" loading="eager" fetchPriority="high" className="cat-hero-image" /><div className="cat-hero-shade"/><div className="cat-frame cat-hero-content"><p className="cat-eyebrow">CATÁLOGOS PACK LAB</p><h1 id="catalog-title">Soluciones que se adaptan a tu operación.</h1><p className="cat-hero-copy">Explora nuestras líneas de productos y encuentra opciones de empaque para las necesidades de tu negocio.</p><div className="cat-actions"><CtaLink href="/contacto" className="cat-button cat-light">Solicitar asesoría</CtaLink></div></div></section>
  <section id="categorias" className="cat-section" aria-labelledby="categories-title"><div className="cat-frame"><div className="cat-heading"><div><p className="cat-eyebrow">NUESTROS CATÁLOGOS</p><h2 id="categories-title">Explora nuestras líneas de productos.</h2></div><p>Conoce las distintas categorías y conversemos sobre la solución más adecuada para tu proyecto.</p></div>
   <div className="cat-grid">{catalogCategories.map(category=>{const pdfAvailable=existsSync(path.join(process.cwd(),'public',category.pdfPath));return <article className="cat-card" key={category.slug}><div className="cat-card-image"><Image src={cardImages[category.slug]} alt={`Catálogo ${category.title}`} fill sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) calc((100vw - 88px) / 2), (max-width: 1224px) calc((100vw - 112px) / 3), 371px" loading="lazy" /></div><div className="cat-card-content"><h3 className="cat-accessible-title">{category.title}</h3><p>{category.description}</p><CtaLink href={category.contactHref} className="cat-button cat-dark">{category.contactLabel}</CtaLink><div className="cat-pdf-actions">{pdfAvailable ? <><a href={category.pdfPath} target="_blank" rel="noopener noreferrer">Ver catálogo PDF ↗</a><a href={category.pdfPath} download>Descargar PDF ↓</a></> : <button disabled>PDF próximamente</button>}</div></div></article>})}</div>
  </div></section>
 </div>;
}
