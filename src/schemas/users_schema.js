import {z} from 'zod'

export const usersSchema = z.object({
    first_name: z.string().min(1, 'First Name is Required'),
    last_name: z.string().min(1, 'Last Name is Required'),
    email: z.string().email('Invalid Email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    phone: z.string().min(6, 'Phone is required'),
    fk_id_role: z.number().int().default('3').positive('Invalid id Role'),
    status: z.enum(['active','inactive']).optional().default('active')
})

//partial() convierte todo en opcional
export const userUpdateSchema = usersSchema.partial()