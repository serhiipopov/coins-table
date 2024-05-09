import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Input } from '@/components'
import { Strings, Urls } from '@/constants'
import {
  logInFormInitialValues,
  LogInFormModel,
  logInFormSchema,
} from './LogInFormSchema'
import { useAuth, useModal } from '@/context'
import { useRouter } from 'next/navigation'

export const LogInForm = () => {
  const { logIn } = useAuth()
  const { handleModalSubmit } = useModal()
  const router = useRouter()

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
    try {
      handleModalSubmit(await logIn(watch('email'), watch('password')))
      router.push(Urls.PORTFOLIO)
      resetLogInFields()
    } catch (error: any) {
      console.log(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex w-96 flex-col gap-4 rounded-lg bg-gray-100 p-6 shadow-2xl'>
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

        <Button className='block rounded-xl py-3' type='submit'>
          <span>{Strings.logIn}</span>
        </Button>
      </div>
    </form>
  )
}
