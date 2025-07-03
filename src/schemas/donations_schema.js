import {z} from 'zod'

export const donationsSchema = z.object({
    amount: z.number().positive('Donation Mount is Required'),
    donation_date: z.coerce.date(),
    fk_id_user: z.number().int().positive('Invalid id User')
})