import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Arrow } from '@/components/arrow';
import { content } from '@/data/content';
import { homeContent } from '@/data/home';
import './home.css';
import { CtaLink } from '@/components/cta-link';
import { HomeMotion } from '@/components/home-motion';
import { HomeFaq } from '@/components/home-faq';

const home = homeContent.es;

export const metadata: Metadata = {
  title: { absolute: 'Pack Lab | Soluciones de empaque industrial' },
  description: 'Explorá soluciones de empaque industrial, ingeniería de embalaje, gestión de inventarios, materiales sostenibles y entregas eficientes con Pack Lab.',
  openGraph: { title: 'Pack Lab | Protegemos lo que impulsa tu operación', description: 'Soluciones de empaque pensadas para tu producto y tu operación.', locale: 'es_CR', type: 'website' },
};

export default function Home() {
  return (
    <div className="pack-home-home">
      <HomeMotion />
      <section className="pack-home-hero" aria-labelledby="hero-title">
        <div className="pack-home-heroMedia">
          <Image src={home.hero.image} alt="Embalaje industrial de madera sobre una línea de rodillos en una planta" fill sizes="100vw" loading="eager" fetchPriority="high" className="pack-home-heroImage" />
          <div className="pack-home-heroShade" />
        </div>
        <div className={`pack-home-frame pack-home-heroContent`}>
          <p className="pack-home-eyebrow">SOLUCIONES DE EMPAQUE INDUSTRIAL</p>
          <h1 id="hero-title"><span><span>Protegemos </span></span><span><span>lo que impulsa </span></span><span><span>tu operación.</span></span></h1>
          <p className="pack-home-heroDescription">{home.hero.description}</p>
          <div className="pack-home-heroActions">
            <CtaLink href="/soluciones" className={`pack-home-button pack-home-lightButton`}>Explorar soluciones</CtaLink>
            <Link href="/nosotros" className="pack-home-secondaryLink">Conocer Pack Lab <Arrow /></Link>
          </div>
        </div>
        <a className="pack-home-scroll" href="#soluciones" aria-label="Descubrir nuestras soluciones"><span aria-hidden="true">↓</span></a>
      </section>

      <section id="soluciones" className="pack-home-solutions" aria-labelledby="solutions-title">
        <div className={`pack-home-frame pack-home-sectionHeading`} data-reveal="0">
          <div><p className="pack-home-eyebrow">NUESTRAS SOLUCIONES</p><h2 id="solutions-title">Cada desafío merece<br className="pack-home-desktopBreak" /> una solución inteligente</h2></div>
          <p className="pack-home-sectionDescription">Una mirada integral al empaque: diseño, abastecimiento, materiales y entregas para explorar las necesidades de tu operación.</p>
          <CtaLink className={`pack-home-button pack-home-outlineButton`} href="/soluciones">Ver todas las soluciones</CtaLink>
        </div>
        <div className={`pack-home-wide pack-home-solutionGrid`}>
          {content.solutions.map(solution => {
            const slug = solution.slug as keyof typeof home.solutionImages;
            return <article key={slug} className="pack-home-solutionCard" data-reveal={content.solutions.indexOf(solution) * 45}>
              <Link href={`/soluciones/${slug}`} className="pack-home-photoLink">
                <Image src={home.solutionImages[slug]} alt="" fill sizes="(max-width: 560px) calc(100vw - 40px), (max-width: 1000px) 45vw, (max-width: 1440px) 23vw, 310px" loading="lazy" />
                <div className="pack-home-cardShade" />
                <div className="pack-home-solutionCaption"><h3>{home.solutionTitles[slug][0]}<br />{home.solutionTitles[slug][1]}</h3><p>{home.solutionDescriptions[slug]}</p></div>
                <Arrow className="pack-home-cardArrow" />
              </Link>
            </article>;
          })}
        </div>
      </section>

      <section className="pack-home-industries" aria-labelledby="industries-title">
        <Image src={home.industriesImage} alt="" fill sizes="100vw" loading="lazy" className="pack-home-industryImage" />
        <div className="pack-home-industryShade" />
        <div className={`pack-home-frame pack-home-industryContent`} data-reveal="0">
          <div><p className="pack-home-eyebrow">INDUSTRIAS</p><h2 id="industries-title">Diferentes industrias.<br />Un mismo compromiso</h2></div>
          <p>Cada sector plantea retos distintos de protección, manejo y distribución. Explorá los contextos de empaque presentados en el prototipo.</p>
          <CtaLink href="/industrias" className={`pack-home-button pack-home-transparentButton`}>Ver industrias</CtaLink>
        </div>
      </section>

      <section className="pack-home-catalogs" aria-labelledby="catalogs-title">
        <div className={`pack-home-frame pack-home-sectionHeading`} data-reveal="0">
          <div><p className="pack-home-eyebrow">CATÁLOGOS</p><h2 id="catalogs-title">Encontrá el empaque<br className="pack-home-desktopBreak" /> ideal para tu negocio</h2></div>
          <p className="pack-home-sectionDescription">Explorá las categorías previstas para diferentes tipos de empresas y necesidades de empaque.</p>
          <CtaLink href="/catalogos" className={`pack-home-button pack-home-outlineButton`}>Ver todos los catálogos</CtaLink>
        </div>
        <div className={`pack-home-wide pack-home-catalogGrid`}>
          {content.catalogs.map(catalog => {
            const slug = catalog.slug as keyof typeof home.catalogImages;
            return <article className="pack-home-catalogCard" key={slug} data-reveal={content.catalogs.indexOf(catalog) * 55}>
              <Link href={`/catalogos/${slug}`} className="pack-home-catalogLink">
                <div className="pack-home-catalogImage"><Image src={home.catalogImages[slug]} alt="" fill sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1440px) 30vw, 420px" loading="lazy" /></div>
                <div className="pack-home-catalogCaption"><div><h3>{catalog.title}</h3><p>{catalog.summary}</p></div><Arrow /></div>
              </Link>
              <p className="pack-home-catalogPending"><span />Catálogo próximamente</p>
            </article>;
          })}
        </div>
      </section>

      <section className="pack-home-faq" aria-labelledby="faq-title">
        <div className={`pack-home-frame pack-home-faqGrid`} data-reveal="0">
          <div><p className="pack-home-eyebrow">PREGUNTAS FRECUENTES</p><h2 id="faq-title">Resolvemos<br /> tus dudas</h2><p className="pack-home-faqIntro">Un punto de partida para conocer las soluciones y explorar tu próximo proyecto.</p></div>
          <HomeFaq />
        </div>
      </section>
    </div>
  );
}



