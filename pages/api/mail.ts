'use strict';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { messager } from '../../components/utils/func';

type Data = {
    name?: string;
    message?: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method == 'POST') {
        // console.log('req.mthod == POST');
        // messager(req.body).catch(console.error);
        // console.log('After Calling MEssager');
        messager(req.body)
            .then((d) => res.status(200).json({ message: 'Succes' }))
            .catch((e) => res.status(200).json({ message: 'FAILED' }));
    } else {
        res.status(200).json({ name: 'John Doe' });
    }
}
