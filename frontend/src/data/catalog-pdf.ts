import { existsSync } from 'node:fs';
import path from 'node:path';

// Server-rendered catalog pages share the same official-file availability check.
export function getCatalogPdfPath(category: { readonly pdfPath: string }): string | null {
  return existsSync(path.join(process.cwd(), 'public', category.pdfPath)) ? category.pdfPath : null;
}
