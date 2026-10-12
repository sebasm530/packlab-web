---
target: Inicio de Pack Lab y recorrido principal
total_score: 19
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 1
target_identity: "file:D:\\packlab-web\\frontend\\src\\app\\page.tsx"
target_fingerprint: "sha256:3b95a11ede5ec4d7d066e7805b2d751d5d9e4a83d1c505d2c02cc183856eccfa"
target_path: "D:\\packlab-web\\frontend\\src\\app\\page.tsx"
timestamp: 2026-10-09T22-46-24Z
slug: src-app-page-tsx
---
Método: dos evaluaciones independientes (A: design_review · B: technical_review).
Target: frontend/src/app/page.tsx — Inicio, navbar/footer y recorrido hacia Contacto/Catálogos.

La base visual funciona: hero industrial claro, jerarquía consistente y tarjetas fotográficas que explican los cuatro servicios. La mayor oportunidad está en alinear las promesas con lo que el prototipo permite hacer, y mantener la calidad del Inicio al navegar.

Especificidad: reconocible como empaque industrial; todavía intercambiable entre marcas B2B. Las imágenes aportan más identidad que frases como «una solución inteligente». Incorporar únicamente un método o ejemplo verificado de Pack Lab, aprovechando contenido existente.

Evaluación heurística (0–4, juicio cualitativo):
| Heurística | Nota | Motivo |
|---|---:|---|
| Estado visible | 3 | Pendientes comunicados, aviso del formulario tardío |
| Lenguaje familiar | 3 | Displays necesita contexto |
| Control y libertad | 3 | Escape y retorno de foco funcionan |
| Consistencia | 2 | Detalles de catálogo divergen del Inicio |
| Prevención de errores | 2 | Formulario editable aunque no puede enviarse |
| Reconocimiento | 3 | Servicios y destinos claros |
| Eficiencia experta | n/a | Portada de persuasión |
| Estética y minimalismo | 3 | Buena jerarquía, cierres repetidos en detalles |
| Recuperación | n/a | Sin envío operativo evaluable |
| Documentación | n/a | No exige documentación de aplicación |
| Total | 19/28 | 68%, aceptable; evalúa el recorrido, no solo apariencia |

Lo que conviene conservar:
- Fotografía y composición del hero.
- Servicios con fotografía y textos breves.
- FAQ y navegación con comportamiento de teclado verificado.

Prioridades:
1. [P1 antes de publicación] Contacto pide esfuerzo antes de comunicar que es demostrativo. El aviso está debajo de cinco campos y «Contáctanos ahora» conduce a WhatsApp deshabilitado. Mover el aviso al inicio y ajustar la invitación mientras falten canales verificados. Es una limitación conocida del prototipo, no un envío defectuoso. Comando: impeccable clarify.
2. [P2] Los detalles de catálogo pierden continuidad. Multinacionales pasa de fotografía editorial a una página genérica con ilustración y dos cierres comerciales. Reutilizar el lenguaje aprobado y conservar un único cierre; hacer más evidente «Catálogo próximamente» antes de navegar. Comandos: impeccable polish / distill.
3. [P2] La propuesta explica la oferta pero poco de la diferencia de Pack Lab. Integrar un método o ejemplo real aprobado dentro de contenido existente, sin inventar cifras ni añadir secciones automáticamente. Comandos: impeccable shape / clarify.
4. [P3] Ajustes de lectura y tacto: disponibilidad a 10px, voseo/tuteo mezclados y flecha móvil de 36×36px. Aumentar legibilidad del estado, unificar variante española y ampliar área táctil a 44px sin cambiar su apariencia. Comandos: impeccable typeset / adapt.

Carga cognitiva y recorrido: hero con dos acciones y grupos de cuatro servicios/tres catálogos manejables. Navbar contiene seis destinos y contacto duplicado; no hay evidencia de sobrecarga crítica. El interés visual inicial cae al acercarse a canales y documentos pendientes.

Personas:
- Primera visita: entiende servicios, le falta una razón verificable para elegir Pack Lab.
- Móvil: puede rellenar campos antes de ver que no se envían.
- Usuario que prueba límites: reconoce pendientes, pero encuentra invitaciones más fuertes que la disponibilidad real.

Observaciones: Multinacionales/Pymes clasifican empresas y Displays un uso; explicar ese criterio. Mantener transparencia de prototipo. El objetivo táctil de 36px es una mejora, no un incumplimiento WCAG confirmado.

Evidencia técnica: detector con cero hallazgos en seis archivos. Menús/Escape/restauración de foco y FAQ/Enter/Espacio verificados; sin desbordamiento horizontal en 1440×900 y 390×844. No se midió contraste, lector de pantalla, red lenta ni rendimiento cuantitativo. Cero hallazgos no certifica accesibilidad.

Preguntas:
- ¿Priorizar presentación comercial del prototipo, o preparar un recorrido para compradores reales?
- ¿Primer ajuste: claridad de contacto, continuidad de catálogos, o diferenciación del mensaje?
