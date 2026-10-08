import { PageHero, ContentNotice, pageMetadata } from '@/components/page-hero';
import { SolutionCards } from '@/components/cards';
import { ContactBanner } from '@/components/contact-banner';

export const metadata = pageMetadata('Soluciones', 'Explora ingeniería de embalaje, gestión de inventarios, soluciones sostenibles y entregas eficientes.');

export default function SolutionsPage() {
  return <><PageHero title="Cada reto, una nueva posibilidad." eyebrow="SOLUCIONES / UNA VISIÓN INTEGRAL" description="Cuatro servicios para explorar el empaque desde el diseño hasta su conexión con la operación." /><section className="section solutions"><div className="container"><ContentNotice /><div className="section-heading"><div><p className="eyebrow">EXPLORA NUESTROS SERVICIOS</p><h2>El punto de partida es tu negocio.</h2></div><p>Selecciona una solución para conocer<br />su enfoque y las preguntas iniciales.</p></div><SolutionCards /></div></section><ContactBanner /></>;
}
