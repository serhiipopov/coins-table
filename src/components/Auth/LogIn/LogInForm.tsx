'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, InlineAlert, Input } from '@/components'
import { AlertType, Strings, Urls } from '@/constants'
import {
  logInFormInitialValues,
  LogInFormModel,
  logInFormSchema,
} from './LogInFormSchema'
import { useAuth, useModal } from '@/context'
import { getAuthErrorMessage } from '../../../../utils'

export const LogInForm = () => {
  const { logIn } = useAuth()
  const { handleModalSubmit, handleModalClose } = useModal()
  const [loginError, setLoginError] = useState('')
  const { push } = useRouter()

  const {
    control,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm<LogInFormModel>({
    defaultValues: logInFormInitialValues,
    resolver: zodResolver(logInFormSchema),
  })

  const resetLogInFields = () => {
    resetField('email')
    resetField('password')
  }

  const onSubmit = async () => {
    const data = await logIn(watch('email'), watch('password'))

    try {
      handleModalSubmit(data)
      push(Urls.PORTFOLIO)
      if (!data.errorCode) {
        handleModalSubmit(data)
      } else {
        const authErrorMessage = getAuthErrorMessage(
          data.errorCode,
          watch('email'),
          data.errorMessage,
        )
        setLoginError(authErrorMessage ?? '')
      }
    } catch (error: any) {
      setLoginError(error?.errorMessage)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex w-full flex-col gap-4 pt-4'>
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
              onChange={event => {
                setLoginError('')
                onChange(event)
              }}
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
              onChange={event => {
                setLoginError('')
                onChange(event)
              }}
            />
          )}
        />

        {!!loginError?.length && (
          <InlineAlert type={AlertType.ERROR}>{loginError}</InlineAlert>
        )}

        <Button className='block rounded-xl py-3' type='submit'>
          <span>{Strings.logIn}</span>
        </Button>
      </div>
    </form>
  )
}
