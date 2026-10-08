import { PageHero, pageMetadata } from '@/components/page-hero';
import { CatalogCards } from '@/components/cards';
import { ContactBanner } from '@/components/contact-banner';

export const metadata = pageMetadata('Catálogos', 'Explora las categorías Multinacionales, Pymes y Displays de Pack Lab. Catálogos PDF próximamente.');

export default function CatalogsPage() {
  return <><PageHero title="Encuentra tu punto de partida." eyebrow="CATÁLOGOS / PACK LAB" description="Tres categorías para explorar las necesidades de distintos tipos de negocio." /><section className="section catalogs"><div className="container"><div className="catalog-notice"><p className="eyebrow">PUBLICACIÓN PENDIENTE</p><p>Las páginas de categoría ya están disponibles. Los PDF se incorporarán cuando Pack Lab facilite y valide los archivos oficiales.</p></div><CatalogCards /></div></section><ContactBanner /></>;
}
