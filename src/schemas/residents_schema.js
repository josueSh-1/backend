import {z} from "zod"

export const residentSchema = z.object({
    first_name: z.string().min(1, 'First Name is Required'),
    last_name: z.string().min(1, 'Last Name is Required'),
    birthdate: z.coerce.date({ message: "Invalid Birthdate Format"}),
    admission_date: z.coerce.date({message: "Invalid Admission Date Format"}),
    bio: z.string().min(1,'Bio is Required')
})

export const residentUpdateSchema = residentSchema.partial()