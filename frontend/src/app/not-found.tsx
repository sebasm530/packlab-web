import Link from 'next/link';

export default function NotFound() {
  return <section className="section container not-found"><p className="eyebrow">404 / PÁGINA NO ENCONTRADA</p><h1>Volvamos al punto de partida.</h1><p className="muted">Esta dirección no corresponde a una página del prototipo.</p><Link href="/" className="button">Volver a Inicio <span aria-hidden="true">→</span></Link></section>;
}
