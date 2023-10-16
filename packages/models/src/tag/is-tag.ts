import {z} from 'zod';

export const isTag = z.object({
  type: z.enum(['DI', 'DO', 'AI', 'AO']),
  state: z.enum(['valid', 'inv_duplname', 'inv_duplid', 'inv_name', 'inv_noname', 'inv_id']),
  props: z.object({}), // todo define proper schema
});
