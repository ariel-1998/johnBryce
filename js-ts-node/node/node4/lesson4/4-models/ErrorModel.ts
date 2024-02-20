// import { z } from 'zod';

export class ErrorModel {
    message: string | string[];
    code: number;
}

// export const bookSchema = z.object({
//     name: z.string().min(2, {message: 'name should be longer'}),
//     price: z.number().positive({message: 'price should be positive'})
// });