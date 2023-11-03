import { z } from 'zod'

export const SignInSchema = z.object({
    username: z.string().min(3, "Name must contain more than 3 characters"),
    email: z.string().email(),
    password: z.string().min(5, 'Password should be at least 5 chracters long').or(z.number().min(5, 'Password should be at least 5 chracters long')),
})