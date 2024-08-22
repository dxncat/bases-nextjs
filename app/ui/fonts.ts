import { Roboto, Lusitana } from 'next/font/google';

export const roboto = Roboto(
    {
        weight: ['100', '300', '400', '500', '700', '900'],
        subsets: ['latin']
    }
);

export const lusitana = Lusitana(
    {
        weight: ['400', '700'],
        subsets: ['latin']
    }
);