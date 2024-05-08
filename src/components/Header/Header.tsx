'use client'

import { useCallback } from 'react'
import { Button } from '@/components'
import { Strings } from '@/constants'
import { LogInForm, SignUpForm } from '@/components/Auth'
import { useModal } from '@/context'

export const Header = () => {
  const { openModal } = useModal()

  const argsSignUp = {
    content: <SignUpForm />,
  }

  const argsLogIn = {
    content: <LogInForm />,
  }

  const handleLogInModal = useCallback(() => {
    openModal(argsLogIn)
      .then(() => {})
      .catch(() => {})
  }, [openModal])

  const handleSignUpModal = useCallback(() => {
    openModal(argsSignUp)
      .then(() => {})
      .catch(() => {})
  }, [openModal])

  return (
    <header className='z-50 box-border flex h-14 w-full flex-row items-center justify-between bg-white px-6 shadow'>
      <p className='text-sm font-bold'>CoinTable</p>

      <div className='flex gap-2'>
        <Button kind='secondary' className='py-1' onClick={handleLogInModal}>
          <span>{Strings.logIn}</span>
        </Button>

        <Button className='py-1' onClick={handleSignUpModal}>
          <span>{Strings.signUp}</span>
        </Button>
      </div>
    </header>
  )
}
