
import Image from 'next/image';
import Link from 'next/link';
import { catalogHero, catalogImages } from '@/data/catalog-images';
import { getCatalogPdfPath } from '@/data/catalog-pdf';
import { CtaLink } from '@/components/cta-link';
import { pageMetadata } from '@/components/page-hero';
import { catalogCategories } from '@/data/catalog-categories';
import './catalogs.css';

export const metadata = pageMetadata('Catálogos', 'Explorá Multinacionales, Pymes y Displays. Consultá opciones de empaque y solicitá información para tu operación. PDF próximamente.');
export default function CatalogsPage() {
 return <div className="pack-catalogs">
  <section className="cat-hero" aria-labelledby="catalog-title"><Image src={catalogHero} alt="Imagen ilustrativa de cajas y materiales de embalaje en un entorno industrial" fill sizes="100vw" loading="eager" fetchPriority="high" className="cat-hero-image" /><div className="cat-hero-shade"/><div className="cat-frame cat-hero-content"><p className="cat-eyebrow">CATÁLOGOS PACK LAB</p><h1 id="catalog-title">Soluciones que se adaptan a tu operación.</h1><p className="cat-hero-copy">Explorá nuestras líneas de productos y encontrá opciones de empaque para las necesidades de tu negocio.</p><div className="cat-actions"><CtaLink href="/contacto" className="cat-button cat-light">Solicitar asesoría</CtaLink></div></div></section>
  <section id="categorias" className="cat-section" aria-labelledby="categories-title"><div className="cat-frame"><div className="cat-heading"><div><p className="cat-eyebrow">NUESTROS CATÁLOGOS</p><h2 id="categories-title">Explorá nuestras líneas de productos.</h2></div><p>Conocé las distintas categorías y conversemos sobre la solución más adecuada para tu proyecto.</p></div>
   <div className="cat-grid">{catalogCategories.map(category=>{const pdfPath=getCatalogPdfPath(category);return <article className="cat-card" key={category.slug}><Link href={`/catalogos/${category.slug}`} className="cat-card-image cat-card-categoryLink"><Image src={catalogImages[category.slug]} alt="" fill sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) calc((100vw - 88px) / 2), (max-width: 1224px) calc((100vw - 112px) / 3), 371px" loading="lazy" /><h3 className="cat-accessible-title">{category.title}</h3></Link><div className="cat-card-content"><p>{category.description}</p><CtaLink href={category.contactHref} className="cat-button cat-dark">{category.contactLabel}</CtaLink><div className="cat-pdf-actions">{pdfPath ? <><a href={pdfPath} target="_blank" rel="noopener noreferrer">Ver catálogo PDF ↗</a><a href={pdfPath} download>Descargar PDF ↓</a></> : <button disabled>PDF próximamente</button>}</div></div></article>})}</div>
  </div></section>
 </div>;
}
