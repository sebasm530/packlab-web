import Link from 'next/link';
import { content, type Catalog } from '@/data/content';
import { PackagingVisual } from './packaging-visual';

export function SolutionCards() {
  return (
    <div className="solution-grid">
      {content.solutions.map((solution, i) => (
        <article className="solution-card" key={solution.slug}>
          <div className="card-top"><span aria-hidden="true">{solution.icon}</span><small>0{i + 1}</small></div>
          <h3>{solution.title}</h3>
          <p>{solution.summary}</p>
          <Link className="card-bottom" href={`/soluciones/${solution.slug}`} aria-label={`Explorar ${solution.title}`}><span>Explorar solución</span><span aria-hidden="true">→</span></Link>
        </article>
      ))}
    </div>
  );
}

export function CatalogArt({ catalog }: { catalog: Catalog }) {
  return <div className="catalog-art"><PackagingVisual variant={catalog.variant} /><span className="catalog-tag">PACK LAB / {catalog.title.toUpperCase()}</span></div>;
}

export function CatalogCards() {
  return (
    <div className="catalog-grid">
      {content.catalogs.map(catalog => (
        <article className="catalog-card" key={catalog.slug}>
          <Link className="catalog-category" href={`/catalogos/${catalog.slug}`}>
            <CatalogArt catalog={catalog} />
            <div className="catalog-copy"><div><h3>{catalog.title}</h3><p>{catalog.summary}</p></div><span aria-hidden="true">↗</span></div>
            <span className="category-link">Explorar categoría <span aria-hidden="true">→</span></span>
          </Link>
          <span className="pending">Catálogo próximamente</span>
        </article>
      ))}
    </div>
  );
}
