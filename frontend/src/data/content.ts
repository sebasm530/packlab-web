export type Solution = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  headline: string;
  description: string;
  focus: { title: string; text: string }[];
  questions: string[];
};
export type Catalog = {
  slug: string;
  title: string;
  summary: string;
  variant: string;
  description: string;
};

// Add future locales with the same content structure; no i18n dependency required.
export const locales = {
  es: {
    navigation: [
      { label: 'Inicio', href: '/' },
      { label: 'Nosotros', href: '/nosotros' },
      { label: 'Soluciones', href: '/soluciones' },
      { label: 'Industrias', href: '/industrias' },
      { label: 'Catálogos', href: '/catalogos' },
      { label: 'Contacto', href: '/contacto' },
    ],
    solutions: [
      {
        slug: 'ingenieria-de-embalaje', title: 'Ingeniería de Embalaje', icon: '◇',
        summary: 'El empaque adecuado empieza por entender tu producto. Exploramos materiales y diseños para protegerlo en cada etapa.',
        headline: 'La protección empieza en el diseño.',
        description: 'Una propuesta de ingeniería de embalaje parte del producto y de su recorrido. Este enfoque plantea estudiar sus características, las condiciones de manejo y los materiales antes de definir una solución.',
        focus: [
          { title: 'Entender el producto', text: 'Identificar dimensiones, peso, fragilidad y condiciones de almacenamiento para orientar el diseño.' },
          { title: 'Explorar la estructura', text: 'Revisar alternativas de materiales, geometría y protección interior según los requisitos del proyecto.' },
          { title: 'Evaluar el recorrido', text: 'Considerar manipulación, transporte y destino para definir criterios de evaluación del embalaje.' },
        ],
        questions: ['¿Qué producto necesitas proteger?', '¿Cómo se manipula, almacena y transporta?', '¿Qué dificultades presenta el empaque actual?'],
      },
      {
        slug: 'gestion-de-inventarios', title: 'Gestión de Inventarios', icon: '▤',
        summary: 'Soluciones de abastecimiento pensadas alrededor de las necesidades de empaque de tu operación.',
        headline: 'Empaque disponible. Operación organizada.',
        description: 'La gestión de inventarios conecta las necesidades de empaque con la planificación de abastecimiento. El enfoque propuesto contempla conocer el consumo y los espacios disponibles antes de acordar un esquema de trabajo.',
        focus: [
          { title: 'Conocer la demanda', text: 'Revisar patrones de consumo y variaciones de la operación para comprender las necesidades de empaque.' },
          { title: 'Planificar el abastecimiento', text: 'Explorar criterios de reposición, frecuencias y cantidades según el contexto del negocio.' },
          { title: 'Ordenar el almacenamiento', text: 'Considerar espacio, identificación de materiales y manejo interno al plantear alternativas.' },
        ],
        questions: ['¿Qué materiales de empaque utiliza tu operación?', '¿Cómo varía su consumo?', '¿Qué espacio y condiciones de almacenamiento tienes?'],
      },
      {
        slug: 'soluciones-sostenibles', title: 'Soluciones Sostenibles', icon: '♧',
        summary: 'Evaluamos alternativas de materiales y uso eficiente de recursos para repensar el empaque.',
        headline: 'Repensar los materiales. Ampliar las posibilidades.',
        description: 'Explorar la sostenibilidad del empaque requiere considerar su función, el uso de materiales y las condiciones reales de recuperación. Esta propuesta plantea revisar alternativas sin asumir beneficios ambientales no verificados.',
        focus: [
          { title: 'Revisar los materiales', text: 'Examinar composición y requisitos de protección para identificar alternativas que puedan evaluarse.' },
          { title: 'Optimizar el diseño', text: 'Explorar oportunidades de uso eficiente de material y espacio, manteniendo la función del empaque.' },
          { title: 'Considerar el destino', text: 'Tener en cuenta las posibilidades locales de reutilización y recuperación antes de formular recomendaciones.' },
        ],
        questions: ['¿Qué materiales utiliza tu empaque actual?', '¿Qué objetivos de mejora quieres evaluar?', '¿Qué ocurre con el empaque después de su uso?'],
      },
      {
        slug: 'entregas-eficientes', title: 'Entregas Eficientes', icon: '↗',
        summary: 'Planificación de entregas para conectar el empaque con el ritmo de tu negocio.',
        headline: 'El empaque, en el momento que tu operación necesita.',
        description: 'La planificación de entregas vincula las necesidades de materiales con los tiempos de la operación. El enfoque propuesto parte de conocer ubicaciones, ventanas de recepción y prioridades para explorar una coordinación adecuada.',
        focus: [
          { title: 'Definir necesidades', text: 'Identificar materiales, destinos y prioridades que deberían contemplarse en la planificación.' },
          { title: 'Coordinar la recepción', text: 'Considerar horarios, condiciones de descarga y capacidad de almacenamiento del destino.' },
          { title: 'Planificar la continuidad', text: 'Revisar frecuencias y cambios previstos para acordar criterios de coordinación del suministro.' },
        ],
        questions: ['¿Dónde se requieren los materiales de empaque?', '¿Cuáles son tus ventanas de recepción?', '¿Qué prioridades tiene tu operación?'],
      },
    ] satisfies Solution[],
    industries: [
      { title: 'Manufactura', text: 'Protección de piezas y componentes durante el manejo, almacenamiento y transporte.' },
      { title: 'Alimentos y bebidas', text: 'Empaque secundario y transporte: requisitos de manejo y compatibilidad por evaluar en cada proyecto.' },
      { title: 'Tecnología y electrónica', text: 'Necesidades de protección de equipos y componentes sensibles, sujetas a evaluación técnica.' },
      { title: 'Consumo y retail', text: 'Presentación, agrupación y distribución de productos según el contexto del negocio.' },
      { title: 'Logística y distribución', text: 'Manipulación, almacenamiento y recorrido de la carga como puntos de partida del diseño.' },
    ],
    catalogs: [
      { slug: 'multinacionales', title: 'Multinacionales', summary: 'Empaque para operaciones de mayor escala.', variant: 'large', description: 'Categoría prevista para reunir alternativas de empaque orientadas a operaciones de mayor escala. El contenido y el PDF están pendientes de validación y publicación.' },
      { slug: 'pymes', title: 'Pymes', summary: 'Opciones para negocios en crecimiento.', variant: 'small', description: 'Categoría prevista para presentar alternativas de empaque para negocios en crecimiento. El contenido y el PDF están pendientes de validación y publicación.' },
      { slug: 'displays', title: 'Displays', summary: 'Presentación y exhibición en punto de venta.', variant: 'display', description: 'Categoría prevista para explorar presentación y exhibición en punto de venta. El contenido y el PDF están pendientes de validación y publicación.' },
    ] satisfies Catalog[],
    about: {
      introduction: 'Pack Lab es una empresa de soluciones de empaque industrial. Esta propuesta corporativa organiza su enfoque alrededor del producto, las necesidades de la operación y el recorrido del empaque.',
      approach: 'Como punto de partida para el contenido definitivo, proponemos una mirada integral: entender el reto, explorar alternativas y definir los requisitos de una solución junto con el negocio.',
      values: [
        { title: 'Escuchar para entender', text: 'Partir de las necesidades del producto y de las personas que participan en la operación.' },
        { title: 'Pensar con criterio', text: 'Relacionar materiales, diseño y función antes de plantear una alternativa de empaque.' },
        { title: 'Colaborar con claridad', text: 'Definir necesidades y expectativas para construir una conversación útil en cada proyecto.' },
        { title: 'Usar recursos con atención', text: 'Considerar el uso de materiales y su destino al evaluar decisiones de diseño.' },
      ],
    },
    contact: {
      fields: [{ label: 'Correo electrónico', value: 'Pendiente de confirmar' }, { label: 'Teléfono', value: 'Pendiente de confirmar' }, { label: 'Ubicación y horario', value: 'Pendientes de confirmar' }],
      notice: 'Formulario de demostración. Puedes explorar los campos, pero los datos no se envían ni se guardan.',
    },
  },
};
export const content = locales.es;

