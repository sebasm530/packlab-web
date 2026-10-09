export const catalogCategories = [
 { slug:'multinacionales', title:'Multinacionales', description:'Soluciones de empaque orientadas a operaciones industriales y empresas de gran escala.', contactLabel:'Cotizar soluciones industriales', contactHref:'/contacto?catalogo=multinacionales', pdfPath:'/catalogos/multinacionales.pdf', theme:'industrial' },
 { slug:'pymes', title:'Pymes', description:'Opciones de empaque para pequeñas y medianas empresas que buscan proteger y presentar sus productos.', contactLabel:'Consultar opciones de empaque', contactHref:'/contacto?catalogo=pymes', pdfPath:'/catalogos/pymes.pdf', theme:'business' },
 { slug:'displays', title:'Displays', description:'Soluciones de exhibición y presentación para destacar productos en espacios comerciales.', contactLabel:'Solicitar información de displays', contactHref:'/contacto?catalogo=displays', pdfPath:'/catalogos/displays.pdf', theme:'display' },
] as const;
export function getCatalogContext(value: string | string[] | undefined) {
 return typeof value === 'string' ? catalogCategories.find(category=>category.slug===value) : undefined;
}
