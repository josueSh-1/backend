import {z} from 'zod'

export const eventSchema= z.object({
    title: z.string().min(1,'Title is Required'),
    description: z.string().min(1, 'Description is Required')
})

export const eventUpdateSchema = eventSchema.partial()