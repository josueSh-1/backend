import {z} from 'zod'

export const eventLogSchema = z.object({
    date: z.coerce.date(),
    start_time: z.string().min(1, { message: 'start_time is required' }),
    end_time: z.string().min(1, { message: 'end_time is required' }),
    fk_user: z.coerce.number().int(),
    fk_id_event: z.coerce.number().int()
});