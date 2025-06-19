import {z} from 'zod'

export const donationsSchema = z.object({
    donor_name: z.string().min(1, 'Name is Required'),
    amount: z.number().positive('Donation Mount is Required'),
    donation_date: z.coerce.date(),
    email: z.string().email('Invalid Email'),
    phone: z.string().min(6,'Phone is Eequired'),
    fk_id_user: z.number().int().positive('Invalid id User')
})