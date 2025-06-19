import {z} from 'zod'

export const loginSchema = z.object({
    email: z.string().email('Invalid Email'),
    password: z.string().min(6,'Password must be at leat 6 characters')
})

export const registerSchema= z.object({
    first_name: z.string().min(1, 'First Name is required'),
    last_name: z.string().min(1, 'Last Name is required'),
    email: z.string().email('Invalid Email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    phone: z.string().min(6, 'Phone is required'),
    fk_id_role: z.number().int().positive('Invalid role ID'),
    status: z.enum(['active', 'inactive']).optional().default('active') 
})