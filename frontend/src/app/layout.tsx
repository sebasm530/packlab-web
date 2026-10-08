import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';
import './input-feedback.css';
import { DM_Sans, Manrope } from 'next/font/google';

const headings = Manrope({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });
const body = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'Pack Lab | Soluciones de empaque industrial', template: '%s | Pack Lab' },
  description: 'Ingeniería de embalaje, gestión de inventarios, soluciones sostenibles y entregas eficientes. Empaque pensado para tu negocio.',
  robots: { index: false, follow: false }, // Keep the prototype out of search until official content is approved.
  openGraph: { title: 'Pack Lab | Empaque con propósito', description: 'Soluciones de empaque industrial pensadas para tu negocio.', locale: 'es_CR', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${headings.variable} ${body.variable}`}>
      <body id="packlab-top">
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <Header />
        <main id="contenido" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


