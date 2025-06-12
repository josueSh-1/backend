import {z} from "zod"

export const residentSchema = z.object({
    first_name: z.string().min(1, 'First Name is required'),
    last_name: z.string().min(1, 'Last Name is required'),
    birthdate: z.coerce.date({ message: "Invalid birthdate format"}),
    admission_date: z.coerce.date({message: "Invalid admission date format"}),
    bio: z.string().min(1,'Bio is required')
})

export const residentUpdateSchema = residentSchema.partial()