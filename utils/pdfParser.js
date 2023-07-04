
import { PDFDocument } from 'pdf-lib';

export async function parsePDF(file) {
  const pdfDoc = await PDFDocument.load(file);
  const pageCount = pdfDoc.getPageCount();
  let pdfContent = '';

  for (let i = 0; i < pageCount; i++) {
    const page = pdfDoc.getPage(i);
    const textContent = await page.getTextContent();
    pdfContent += textContent.items.map(item => item.str).join(' ');
  }

  return pdfContent;
}
