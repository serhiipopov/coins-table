import { z } from 'zod'
import {
  ONE_LOWERCASE_REGEXP,
  ONE_NUMBER_REGEXP,
  ONE_SPECIAL_REGEXP,
  ONE_UPPERCASE_REGEXP,
} from '../../../../utils'
import { Strings } from '@/constants'

export const sigUpFormSchema = z
  .object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z
      .string()
      .email('This is not a valid email')
      .min(1, { message: 'Email is required' }),
    password: z
      .string()
      .min(8, { message: Strings.minPassword })
      .regex(ONE_UPPERCASE_REGEXP, {
        message: Strings.mustOneUpper,
      })
      .regex(ONE_LOWERCASE_REGEXP, { message: Strings.mustOneLower })
      .regex(ONE_LOWERCASE_REGEXP, { message: Strings.mustOneLower })
      .regex(ONE_NUMBER_REGEXP, { message: Strings.mustOneNumber })
      .regex(ONE_SPECIAL_REGEXP, { message: Strings.mustOneSpecial }),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: Strings.passwordsDontMatch,
    path: ['confirmPassword'],
  })

export const sigUpFormInitialValues: SignUpFormModel = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export type SignUpFormModel = z.infer<typeof sigUpFormSchema>
