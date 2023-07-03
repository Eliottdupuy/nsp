import { NextApiRequest, NextApiResponse } from 'next';
import { sendQuery } from '../../utils/openaiAPI';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { query } = req.body;
    try {
      const openaiResponse = await sendQuery(query);
      res.status(200).json({ openaiResponse });
    } catch (error) {
      res.status(500).json({ error: 'Error in processing query' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}