import { z } from 'zod'

export const addCoinFormSchema = z.object({
  name: z.string().min(1, { message: 'Coin name is required' }),
  purchasePrice: z.string().min(1, { message: 'Purchase price is required' }),
  reasonForPurchase: z.string().optional(),
})

export const addCoinFormInitialValues: AddCoinFormModel = {
  name: '',
  purchasePrice: '',
  reasonForPurchase: '',
}

export type AddCoinFormModel = z.infer<typeof addCoinFormSchema>
