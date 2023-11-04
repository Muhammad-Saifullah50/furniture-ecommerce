import { z } from 'zod'

export const ProductSchema = z.object({
    name: z.string().min(3, "Name must contain more than 3 characters"),
    shortDesc: z.string().min(3, "Short Description must contain more than 10 characters"),
    desc: z.string().min(3, "Description must contain more than 20 characters"),
    price: z.number().min(3, "Price must contain more than 3 characters and be a number"),
    image: z.string().url()
})