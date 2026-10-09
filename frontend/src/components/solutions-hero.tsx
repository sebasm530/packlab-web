import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { CtaLink } from './cta-link';
export function SolutionsHero({ image, title, description, label, position = '66% 50%', overview = false }: { image: StaticImageData; title: string; description: string; label: string; position?: string; overview?: boolean }) {
  return <section className={`pack-sol-hero ${overview ? 'pack-sol-overviewHero' : ''}`} aria-labelledby="solution-title">
    <Image src={image} alt="Escena ilustrativa de empaque industrial" fill sizes="100vw" loading="eager" fetchPriority="high" className="pack-sol-heroImage" style={{ objectPosition: position }} />
    <div className="pack-sol-shade" /><div className="pack-sol-frame pack-sol-heroContent"><nav className="pack-sol-breadcrumb" aria-label="Ruta de navegación"><Link href="/">Inicio</Link><span aria-hidden="true">/</span>{overview ? <span aria-current="page">Soluciones</span> : <><Link href="/soluciones">Soluciones</Link><span aria-hidden="true">/</span><span aria-current="page">{label}</span></>}</nav><p className="pack-sol-eyebrow">{overview ? 'NUESTRAS SOLUCIONES' : label}</p><h1 id="solution-title">{title}</h1><p className="pack-sol-heroDescription">{description}</p><div className="pack-sol-heroActions"><CtaLink href={overview ? '#explorar-soluciones' : '#enfoque'} className="pack-sol-button pack-sol-light">{overview ? 'Explorar soluciones' : 'Conocer el enfoque'}</CtaLink><CtaLink href="/contacto" className="pack-sol-button pack-sol-ghost">Contáctanos</CtaLink></div></div>
  </section>;
}
