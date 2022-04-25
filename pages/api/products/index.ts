import { NextApiRequest, NextApiResponse } from 'next';
import Products from 'mocks/products';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(Products)) {
      throw new Error('Cannot find products data');
    }
    res.status(200).json(Products);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
