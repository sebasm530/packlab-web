import Link from 'next/link';
import type { Metadata } from 'next';

export function pageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: { title: `${title} | Pack Lab`, description, locale: 'es_CR', type: 'website' },
  };
}

export function PageHero({ title, description, eyebrow, parent }: { title: string; description: string; eyebrow: string; parent?: { label: string; href: string } }) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Ruta de navegación">
          <Link href="/">Inicio</Link><span aria-hidden="true">/</span>
          {parent && <><Link href={parent.href}>{parent.label}</Link><span aria-hidden="true">/</span></>}
          <span aria-current="page">{title}</span>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-description">{description}</p>
      </div>
      <span className="page-hero-mark" aria-hidden="true">↗</span>
    </section>
  );
}

export function ContentNotice({ children }: { children?: React.ReactNode }) {
  return <aside className="content-notice"><span className="notice-label">CONTENIDO PROVISIONAL</span><p>{children ?? 'Texto demostrativo para el prototipo. El alcance y las condiciones de los servicios requieren validación de Pack Lab.'}</p></aside>;
}
