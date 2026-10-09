import type { StaticImageData } from 'next/image';
import hero from '../../public/images/hero-soluciones.png';
import engineering from '../../public/images/ingenieria-embalaje.png';
import inventory from '../../public/images/gestion-inventarios.png';
import sustainable from '../../public/images/soluciones-sostenibles.png';
import deliveries from '../../public/images/entregas-eficientes.png';
export const solutionsHero = hero;
export const solutionDesign: Record<string, { image: StaticImageData; title: string; variant: string; position: string; visualTitle: string }> = {
  'ingenieria-de-embalaje': { image: engineering, title: 'Protección diseñada para cada desafío.', variant: 'engineering', position: '55% 50%', visualTitle: 'El detalle cambia la protección.' },
  'gestion-de-inventarios': { image: inventory, title: 'Disponibilidad cuando tu operación la necesita.', variant: 'inventory', position: '62% 50%', visualTitle: 'Una mirada completa al abastecimiento.' },
  'soluciones-sostenibles': { image: sustainable, title: 'Empaques pensados para un futuro más responsable.', variant: 'sustainable', position: '60% 50%', visualTitle: 'Repensar el empaque, desde su función.' },
  'entregas-eficientes': { image: deliveries, title: 'Una operación más fluida, de principio a fin.', variant: 'deliveries', position: '65% 50%', visualTitle: 'Conectar materiales, tiempos y destinos.' },
};
