'use client'

import { addDoc, collection } from '@firebase/firestore'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  addCoinFormInitialValues,
  AddCoinFormModel,
  addCoinFormSchema,
  Button,
  Input,
} from '@/components'
import { FirebasePath, Strings } from '@/constants'
import db from '../../../lib/firestore'
import { useModal } from '@/context'

export const AddCoinForm = () => {
  const { handleModalClose } = useModal()

  const {
    control,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm<AddCoinFormModel>({
    defaultValues: addCoinFormInitialValues,
    resolver: zodResolver(addCoinFormSchema),
  })

  const resetCoinFields = () => {
    resetField('name')
    resetField('purchasePrice')
    resetField('reasonForPurchase')
  }

  const onSubmit = async () => {
    try {
      await addDoc(collection(db, FirebasePath.coins), {
        name: watch('name'),
        purchasePrice: watch('purchasePrice'),
        reasonForPurchase: watch('reasonForPurchase'),
      })
      resetCoinFields()
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
          name='name'
          render={({ field: { onChange, value, name } }) => (
            <Input
              label={`${Strings.name} *`}
              name={name}
              data-qa='coin-name'
              value={value}
              isError={!!errors?.name}
              error={errors?.name?.message?.toString()}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name='purchasePrice'
          render={({ field: { onChange, value, name } }) => (
            <Input
              label={`${Strings.purchasePrice} *`}
              name={name}
              data-qa='purchase-price'
              value={value}
              isError={!!errors?.purchasePrice}
              error={errors?.purchasePrice?.message?.toString()}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name='reasonForPurchase'
          render={({ field: { onChange, value, name } }) => (
            <Input
              label={Strings.reasonForPurchase}
              name={name}
              data-qa='reason-for-purchase'
              value={value}
              isError={!!errors?.reasonForPurchase}
              error={errors?.reasonForPurchase?.message?.toString()}
              onChange={onChange}
            />
          )}
        />

        <Button className='block' type='submit'>
          <span>{Strings.addCoin}</span>
        </Button>
      </div>
    </form>
  )
}
