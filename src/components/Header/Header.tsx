'use client'

import { useCallback } from 'react'
import { Avatar, Button } from '@/components'
import { Strings, Urls } from '@/constants'
import { LogInForm, SignUpForm } from '@/components/Auth'
import { useAuth, useModal } from '@/context'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getFirstLetter } from '../../../utils'

export const Header = () => {
  const { openModal } = useModal()
  const { user } = useAuth()
  const { push } = useRouter()

  const firstLetter = getFirstLetter(user.email)

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
      <div className='flex items-center gap-20'>
        <p className='text-sm font-bold'>CoinTable</p>
        <div className='flex items-center gap-3'>
          <Link
            className='hover:text-grey-dark hover:underline'
            href={Urls.HOME}
          >
            {Strings.home}
          </Link>
          <Link
            className='hover:text-grey-dark hover:underline'
            href={Urls.PORTFOLIO}
          >
            {Strings.portfolio}
          </Link>
        </div>
      </div>

      {!user ? (
        <div className='flex gap-2'>
          <Button kind='secondary' className='py-1' onClick={handleLogInModal}>
            <span>{Strings.logIn}</span>
          </Button>

          <Button className='py-1' onClick={handleSignUpModal}>
            <span>{Strings.signUp}</span>
          </Button>
        </div>
      ) : (
        <Avatar letter={firstLetter ?? ''} />
      )}
    </header>
  )
}
