import { z } from 'zod'

export const addPortfolioFormSchema = z.object({
  portfolioName: z.string().min(1, { message: 'Portfolio name is required' }),
})

export const addPortfolioFormInitialValues: AddPortfolioFormModel = {
  portfolioName: '',
}

export type AddPortfolioFormModel = z.infer<typeof addPortfolioFormSchema>
