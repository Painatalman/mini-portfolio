import createNameGenerator from '~/factories/createNameGenerator';
import type { NextApiRequest, NextApiResponse } from 'next';

const generator = createNameGenerator();

export default async (_req: NextApiRequest, res: NextApiResponse<string>) => {
  const name = await generator.generateRandom();

  res.status(200).json(name);
};
