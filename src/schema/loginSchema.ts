import { z } from 'zod'

export const schema = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(2)
        .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
            message:
                "Minimum eight characters, at least one letter, one number and one special character",
        }),
});