import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/components/page-hero';
import { Arrow } from '@/components/arrow';
import { catalogCategories } from '@/data/catalog-categories';
import { catalogHero, catalogImages } from '@/data/catalog-images';
import { getCatalogPdfPath } from '@/data/catalog-pdf';
import '../catalogs.css';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return catalogCategories.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = catalogCategories.find(item => item.slug === slug);
  if (!category) notFound();
  return pageMetadata(`Catálogo ${category.title}`, `${category.description} ${getCatalogPdfPath(category) ? 'PDF oficial disponible.' : 'PDF oficial pendiente de publicación.'}`);
}

export default async function CatalogDetailPage({ params }: Props) {
  const { slug } = await params;
  const category = catalogCategories.find(item => item.slug === slug);
  if (!category) notFound();

  const pdfPath = getCatalogPdfPath(category);

  return <div className="pack-catalogs cat-detail">
    <section className="cat-hero" aria-labelledby="catalog-detail-title">
      <Image src={catalogHero} alt="" fill sizes="100vw" loading="eager" fetchPriority="high" className="cat-hero-image" />
      <div className="cat-hero-shade" />
      <div className="cat-frame cat-hero-content">
        <nav className="cat-detail-breadcrumb" aria-label="Ruta de navegación">
          <Link href="/">Inicio</Link><span aria-hidden="true">/</span><Link href="/catalogos">Catálogos</Link><span aria-hidden="true">/</span><span aria-current="page">{category.title}</span>
        </nav>
        <h1 id="catalog-detail-title">{category.title}</h1>
        <p className="cat-hero-copy">{category.description}</p>
      </div>
    </section>
    <section className="cat-section" aria-labelledby="catalog-availability-title">
      <div className="cat-frame cat-detail-grid">
        <div className="cat-card-image"><Image src={catalogImages[category.slug]} alt={`Presentación de la categoría ${category.title}`} fill sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1224px) calc((100vw - 112px) / 2), 556px" loading="lazy" /></div>
        <div className="cat-detail-copy">
          <h2 id="catalog-availability-title">{pdfPath ? 'Catálogo disponible' : 'Catálogo próximamente'}</h2>
          <p>{pdfPath ? 'El PDF oficial de esta categoría está disponible para consultar y descargar.' : 'El PDF oficial de esta categoría está pendiente de publicación.'}</p>
          {pdfPath ? <div className="cat-detail-status"><strong>PDF oficial disponible</strong><div className="cat-pdf-actions"><a href={pdfPath} target="_blank" rel="noopener noreferrer">Ver catálogo PDF ↗</a><a href={pdfPath} download>Descargar PDF ↓</a></div></div> : <div className="cat-detail-status"><strong>PDF aún no disponible</strong><p>No hay productos ni precios publicados en esta categoría.</p></div>}
          <Link className="cat-detail-back" href="/catalogos">Volver a Catálogos <Arrow /></Link>
        </div>
      </div>
    </section>
    <section className="cat-section cat-detail-related" aria-labelledby="other-catalogs-title">
      <div className="cat-frame"><h2 id="other-catalogs-title">Explorá otras categorías</h2><div className="cat-detail-links">
        {catalogCategories.filter(item => item.slug !== slug).map(item => <Link key={item.slug} href={`/catalogos/${item.slug}`}>{item.title}<Arrow /></Link>)}
      </div></div>
    </section>
  </div>;
}
