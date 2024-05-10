'use client'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { addDoc, collection } from '@firebase/firestore'

import { AddPortfolioFormProps, Button, Input } from '@/components'
import { FirebasePath, Strings } from '@/constants'
import { useModal } from '@/context'
import db from '../../../lib/firestore'
import {
  addPortfolioFormInitialValues,
  AddPortfolioFormModel,
  addPortfolioFormSchema,
} from './AddPortfolioFormSchema'

export const AddPortfolioForm = ({}: AddPortfolioFormProps) => {
  const { handleModalClose } = useModal()

  const {
    control,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm<AddPortfolioFormModel>({
    defaultValues: addPortfolioFormInitialValues,
    resolver: zodResolver(addPortfolioFormSchema),
  })

  const resetPortfolioFields = () => {
    resetField('portfolioName')
  }

  const onSubmit = async () => {
    try {
      await addDoc(collection(db, FirebasePath.portfolios), {
        name: watch('portfolioName'),
      })
      resetPortfolioFields()
      handleModalClose()
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex w-96 flex-col gap-4 rounded-lg bg-gray-100 p-6 shadow-2xl'>
        <Controller
          control={control}
          name='portfolioName'
          render={({ field: { onChange, value, name } }) => (
            <Input
              label={`${Strings.portfolioName} *`}
              name={name}
              data-qa='portfolio-name'
              value={value}
              isError={!!errors?.portfolioName}
              error={errors?.portfolioName?.message?.toString()}
              onChange={onChange}
            />
          )}
        />

        <Button className='block' type='submit'>
          <span>{Strings.addPortfolio}</span>
        </Button>
      </div>
    </form>
  )
}
