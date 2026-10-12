import Image from 'next/image';
import Link from 'next/link';
import { Brand } from './brand';
import { content } from '@/data/content';
import { socialLinks } from '@/data/social';
import { CtaLink } from './cta-link';
import './footer.css';
export function Footer() {
  return <footer className="pack-footer-footer"><div className="pack-footer-shell">
    <div className="pack-footer-invitation"><div><p className="pack-footer-label">PACK LAB / CONTACTO</p><h2>Construyamos<br />algo grande<span>.</span></h2><p className="pack-footer-description">¿Tenés un proyecto en mente? Conversemos sobre tus necesidades de empaque</p></div><CtaLink href="/contacto" className="pack-footer-cta">Hablemos de tu proyecto</CtaLink></div>
    <div className="pack-footer-columns">
      <div className="pack-footer-brand"><Link href="/" aria-label="Pack Lab, volver al inicio"><Brand /></Link><p>Empaque con visión.<br />Soluciones con propósito.</p></div>
      <nav aria-label="Navegación del pie de página"><p className="pack-footer-label">EXPLORA PACK LAB</p><div className="pack-footer-links">{content.navigation.filter(item => item.href !== '/').map(({ label, href }) => <Link href={href} key={href}>{label}</Link>)}</div></nav>
      <div className="pack-footer-social"><p className="pack-footer-label">CONECTEMOS</p><div className="pack-footer-socialIcons">{socialLinks.map(item => {
        const icon = <Image src={`/icons/${item.icon}.svg`} width={20} height={20} alt="" />;
        return item.url ? <a key={item.name} href={item.url} className="pack-footer-socialButton" aria-label={item.name} target="_blank" rel="noopener noreferrer">{icon}</a> : <button key={item.name} type="button" className="pack-footer-socialButton" disabled aria-label={`${item.name}: enlace pendiente`} title={`${item.name}: enlace pendiente`}>{icon}</button>;
      })}</div></div>
    </div>
    <div className="pack-footer-bottom"><span>© {new Date().getFullYear()} Pack Lab · Prototipo corporativo</span><span>Propuesta digital por <b>Kibina</b></span><a href="#packlab-top">Volver arriba <span aria-hidden="true">↑</span></a></div>
  </div></footer>;
}
