# Pack Lab — propuesta de Kibina

Prototipo corporativo B2B con Inicio y páginas internas. Stack original: Next.js App Router, TypeScript, Tailwind CSS y ESLint. Sin dependencias adicionales, backend, base de datos, ecommerce, autenticación ni integraciones.

## Desarrollo

```powershell
cd D:\packlab-web\frontend
npm run dev
```

Abrir http://localhost:3000. Las dependencias ya están instaladas; en un checkout nuevo ejecutar primero `npm ci`.

## Validación y producción

```powershell
npm run lint
npm run build
npm start
```

## Rutas

- `/`: Inicio.
- `/nosotros`: presentación, valores y enfoque propuestos, sujetos a aprobación.
- `/soluciones`: resumen de servicios.
- `/soluciones/ingenieria-de-embalaje`
- `/soluciones/gestion-de-inventarios`
- `/soluciones/soluciones-sostenibles`
- `/soluciones/entregas-eficientes`
- `/industrias`: sectores de referencia expresamente provisionales.
- `/catalogos`: acceso a las tres categorías.
- `/catalogos/multinacionales`
- `/catalogos/pymes`
- `/catalogos/displays`
- `/contacto`: información pendiente y formulario exclusivamente visual.

Los servicios y categorías se generan estáticamente desde rutas `[slug]`, con `generateStaticParams` y rechazo de slugs desconocidos. No hay descargas PDF falsas, productos ni precios. El formulario evita cualquier envío, tiene el botón deshabilitado y no guarda los campos.

## Estructura y marca

`src/data/content.ts` centraliza los datos tipados bajo `locales.es`, preparado para agregar un idioma futuro. `src/components` reúne logo, header, footer, tarjetas, hero interno y CTA. El layout comparte navegación y footer entre todas las páginas. Se conserva el diseño de Inicio, la paleta y las ilustraciones CSS locales.

El logo oficial disponible es `public/logopacklab.webp`. Se usa con Next Image; el contenedor CSS oculta sus amplios márgenes blancos sin modificar el archivo ni deformar el logo.

SEO: títulos y descripciones por página y metadatos Open Graph. La indexación permanece deshabilitada para el prototipo. Confirmar dominio antes de agregar URLs canónicas y habilitar indexación.

## Pendientes de contenido oficial

Validar presentación corporativa, valores, alcance de servicios e industrias atendidas. Confirmar correo, teléfono, ubicación y horario. Entregar los PDF oficiales. Aprobar textos, paleta definitiva y favicon; el favicon existente continúa como símbolo provisional de empaque. La integración de envío, productos, precios e inglés requieren una fase posterior.
