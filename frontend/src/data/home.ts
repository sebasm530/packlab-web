import hero from '../../public/images/hero-packlab.webp';
import engineering from '../../public/images/ingenieria-embalaje.png';
import inventory from '../../public/images/gestion-inventarios.png';
import sustainability from '../../public/images/soluciones-sostenibles.png';
import delivery from '../../public/images/entregas-eficientes.png';
import industries from '../../public/images/industrias.png';
import multinationals from '../../public/images/catalogo-multinacionales.png';
import smallBusinesses from '../../public/images/catalogo-pymes.png';
import displays from '../../public/images/catalogo-displays.png';

// Home-specific editorial copy and assets, separate from the internal-page content.
export const homeContent = {
  es: {
    hero: { image: hero, description: 'Soluciones de empaque pensadas para tu producto, tu operación y cada etapa de su recorrido.' },
    solutionImages: { 'ingenieria-de-embalaje': engineering, 'gestion-de-inventarios': inventory, 'soluciones-sostenibles': sustainability, 'entregas-eficientes': delivery },
    solutionTitles: {
      'ingenieria-de-embalaje': ['Ingeniería', 'de Embalaje'],
      'gestion-de-inventarios': ['Gestión', 'de Inventarios'],
      'soluciones-sostenibles': ['Soluciones', 'Sostenibles'],
      'entregas-eficientes': ['Entregas', 'Eficientes'],
    },
    solutionDescriptions: {
      'ingenieria-de-embalaje': 'Diseño y materiales para las necesidades de tu producto.',
      'gestion-de-inventarios': 'Abastecimiento pensado alrededor de tu operación.',
      'soluciones-sostenibles': 'Alternativas de materiales y uso eficiente de recursos.',
      'entregas-eficientes': 'Planificación para acompañar el ritmo de tu negocio.',
    },
    industriesImage: industries,
    catalogImages: { multinacionales: multinationals, pymes: smallBusinesses, displays },
    faq: [
      { question: '¿Qué soluciones de empaque ofrece Pack Lab?', answer: 'El sitio presenta cuatro servicios: Ingeniería de Embalaje, Gestión de Inventarios, Soluciones Sostenibles y Entregas Eficientes. Podés explorar el enfoque de cada uno en Soluciones.', href: '/soluciones', link: 'Explorar soluciones' },
      { question: '¿Puedo solicitar una cotización personalizada?', answer: 'La página Contacto está preparada para consultas sobre tu proyecto. Por ahora, el formulario es demostrativo: el envío de consultas y cotizaciones aún no está habilitado.', href: '/contacto', link: 'Ver Contacto' },
      { question: '¿Dónde puedo consultar los catálogos?', answer: 'En Catálogos encontrás las categorías Multinacionales, Pymes y Displays. Los PDF oficiales todavía están pendientes de publicación y se indican como «Catálogo próximamente».', href: '/catalogos', link: 'Explorar catálogos' },
      { question: '¿Cómo puedo contactar a Pack Lab?', answer: 'En Contacto podés consultar el estado de los canales y explorar el formulario. El correo, teléfono, ubicación y horario se publicarán cuando Pack Lab confirme sus datos oficiales.', href: '/contacto', link: 'Ir a Contacto' },
    ],
  },
};
