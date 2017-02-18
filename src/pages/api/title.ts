import createTitleGenerator from '~/factories/createTitleGenerator';
import APIError from '~/types/APIError';
import { getQuantityFromRequestQuery } from '~/utils/getQuantityFromRequestQuery';
import type { NextApiRequest, NextApiResponse } from 'next';

const generator = createTitleGenerator();

export default async (
  req: NextApiRequest,
  res: NextApiResponse<string[] | APIError>
) => {
  const quantity = getQuantityFromRequestQuery(req.query);

  try {
    const titles = await generator.generateRandom(quantity);
    return res.status(200).json(titles);
  } catch (error) {
    let message: string = 'Invalid quantity';
    if (error instanceof Error) {
      message = error.message;
    }

    res.status(400).json({
      error: message,
    });
  }
};
