// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import bent from 'bent';

type Data = {
  "meland-ai": {
    usd: number
  }
}

const lastRv: {
  lastAt: number,
  rv?: Data
} = {
  lastAt: 0
}

// 防止并发请求.
let reqPromise: Promise<Data> | undefined;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const la = (new Date()).getTime() / 1000;
  if (la - lastRv.lastAt > 60) {
    const jsonreq = bent<Data>('json');
    if (!reqPromise) {
      reqPromise = jsonreq('https://api.coingecko.com/api/v3/simple/price?ids=meland-ai&vs_currencies=usd');
    }
    const rv = await reqPromise;
    lastRv.lastAt = la;
    lastRv.rv = rv;
  }
  res.status(200).json(lastRv.rv!);
}
