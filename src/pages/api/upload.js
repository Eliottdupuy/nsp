```javascript
import { NextApiRequest, NextApiResponse } from 'next';
import { parsePDF } from '../../utils/pdfParser';

export default async function uploadDocument(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { file } = req.body;

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    try {
      const pdfContent = await parsePDF(file);
      return res.status(200).json({ message: 'Upload successful.', pdfContent });
    } catch (error) {
      return res.status(500).json({ message: 'Error parsing PDF.', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
```