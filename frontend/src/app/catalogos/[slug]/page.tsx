import Link from 'next/link';
import { notFound } from 'next/navigation';
import { content } from '@/data/content';
import { PageHero, pageMetadata } from '@/components/page-hero';
import { CatalogArt } from '@/components/cards';
import { ContactBanner } from '@/components/contact-banner';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return content.catalogs.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const catalog = content.catalogs.find(item => item.slug === slug);
  if (!catalog) notFound();
  return pageMetadata(`Catálogo ${catalog.title}`, `${catalog.summary} Catálogo PDF próximamente.`);
}

export default async function CatalogDetailPage({ params }: Props) {
  const { slug } = await params;
  const catalog = content.catalogs.find(item => item.slug === slug);
  if (!catalog) notFound();
  return <><PageHero title={catalog.title} eyebrow="CATÁLOGOS / CATEGORÍA" description={catalog.summary} parent={{ label: 'Catálogos', href: '/catalogos' }} /><section className="section container catalog-detail"><CatalogArt catalog={catalog} /><div><p className="eyebrow">CONTENIDO EN PREPARACIÓN</p><h2>Catálogo próximamente</h2><p className="muted">{catalog.description}</p><div className="catalog-status"><span aria-hidden="true">◇</span><div><h3>PDF aún no disponible</h3><p>No hay productos ni precios publicados en esta categoría.</p></div></div><Link className="inline-link" href="/catalogos">Volver a Catálogos <span aria-hidden="true">→</span></Link></div></section><section className="section solutions"><div className="container"><p className="eyebrow">EXPLORA OTRAS CATEGORÍAS</p><div className="related-links">{content.catalogs.filter(item => item.slug !== slug).map(item => <Link key={item.slug} href={`/catalogos/${item.slug}`}>{item.title}<span aria-hidden="true">↗</span></Link>)}</div></div></section><ContactBanner /></>;
}
