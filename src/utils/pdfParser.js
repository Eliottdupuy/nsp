```javascript
import { PDFDocument } from 'pdf-lib';

export async function parsePDF(file) {
  try {
    const pdfDoc = await PDFDocument.load(file);
    const pageCount = pdfDoc.getPageCount();
    let extractedText = '';

    for (let i = 0; i < pageCount; i++) {
      const page = pdfDoc.getPage(i);
      const textContent = await page.getTextContent();
      extractedText += textContent.items.map(item => item.str).join(' ');
    }

    return extractedText;
  } catch (error) {
    console.error('Error parsing PDF:', error);
    return null;
  }
}
```