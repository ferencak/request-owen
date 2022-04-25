import { NextApiRequest, NextApiResponse } from 'next';
import Locations from 'mocks/locations';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(Locations)) {
      throw new Error('Cannot find locations data');
    }
    res.status(200).json(Locations);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
