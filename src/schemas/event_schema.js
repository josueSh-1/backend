import {z} from 'zod'

export const eventSchema= z.object({
    title: z.string().min(1,'Title is required'),
    description: z.string().min(1, 'Description is required')
})

export const eventUpdateSchema = eventSchema.partial()