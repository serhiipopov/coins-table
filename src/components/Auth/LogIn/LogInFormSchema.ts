import { z } from 'zod'

export const logInFormSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }),
  password: z.string().min(8),
})

export const logInFormInitialValues: LogInFormModel = {
  email: '',
  password: '',
}

export type LogInFormModel = z.infer<typeof logInFormSchema>
