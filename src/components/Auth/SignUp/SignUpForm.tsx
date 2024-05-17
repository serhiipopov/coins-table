'use client'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, InlineAlert, Input } from '@/components'
import { AlertType, Strings, Urls } from '@/constants'
import {
  SignUpFormModel,
  sigUpFormSchema,
  sigUpFormInitialValues,
} from '@/components/Auth'
import { useAuth, useModal } from '@/context'
import { useRouter } from 'next/navigation'

export const SignUpForm = ({
  handleSignUpChange,
}: {
  handleSignUpChange: () => void
}) => {
  const { signUp, errorMessage } = useAuth()
  const router = useRouter()

  const {
    control,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm<SignUpFormModel>({
    defaultValues: sigUpFormInitialValues,
    resolver: zodResolver(sigUpFormSchema),
  })

  const resetSignUpFields = () => {
    // resetField('name')
    resetField('email')
    resetField('password')
    // resetField('confirmPassword')
  }

  const onSubmit = async () => {
    try {
      await signUp(watch('email'), watch('password'))
      resetSignUpFields()
    } catch (error: any) {
      console.error(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex w-full flex-col gap-4 pt-4'>
        {/*<Controller*/}
        {/*  control={control}*/}
        {/*  name='name'*/}
        {/*  render={({ field: { onChange, value, name } }) => (*/}
        {/*    <Input*/}
        {/*      label={`${Strings.name} *`}*/}
        {/*      name={name}*/}
        {/*      data-qa='name'*/}
        {/*      value={value}*/}
        {/*      isError={!!errors?.name}*/}
        {/*      error={errors?.name?.message?.toString()}*/}
        {/*      onChange={onChange}*/}
        {/*    />*/}
        {/*  )}*/}
        {/*/>*/}
        <Controller
          control={control}
          name='email'
          render={({ field: { onChange, value, name } }) => (
            <Input
              label={`${Strings.email} *`}
              name={name}
              data-qa='email'
              value={value}
              isError={!!errors?.email}
              error={errors?.email?.message?.toString()}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name='password'
          render={({ field: { onChange, value, name } }) => (
            <Input
              label={`${Strings.password} *`}
              name={name}
              data-qa='password'
              type='password'
              value={value}
              isError={!!errors?.password}
              error={errors?.password?.message?.toString()}
              onChange={onChange}
            />
          )}
        />
        {/*<Controller*/}
        {/*  control={control}*/}
        {/*  name='confirmPassword'*/}
        {/*  render={({ field: { onChange, value, name } }) => (*/}
        {/*    <Input*/}
        {/*      label={`${Strings.confirmPassword} *`}*/}
        {/*      name={name}*/}
        {/*      data-qa='confirm-password'*/}
        {/*      type='password'*/}
        {/*      value={value}*/}
        {/*      isError={!!errors?.confirmPassword}*/}
        {/*      error={errors?.confirmPassword?.message?.toString()}*/}
        {/*      onChange={onChange}*/}
        {/*    />*/}
        {/*  )}*/}
        {/*/>*/}

        {errorMessage && (
          <InlineAlert type={AlertType.ERROR}>{errorMessage}</InlineAlert>
        )}

        <Button className='block rounded-xl py-3' type='submit'>
          <span>{Strings.signUp}</span>
        </Button>
      </div>
    </form>
  )
}
