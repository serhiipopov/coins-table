'use client'

import { useCallback } from 'react'
import { Anchor, Avatar, AvatarContent, Button, Popover } from '@/components'
import { LocalStorageKeys, Strings, Urls } from '@/constants'
import { LogInForm, SignUpForm } from '@/components/Auth'
import { useAuth, useModal } from '@/context'
import { getFirstLetter } from '../../../utils'
import { useLocalStorage } from '@/hooks'

export const Header = () => {
  const { openModal } = useModal()
  const { user, isAuth } = useAuth()
  const [colorAvatar] = useLocalStorage(LocalStorageKeys.COLOR_AVATAR, '')

  const firstLetter = getFirstLetter(user?.email)

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
        <p className='text-sm font-bold'>CoinsTable</p>
        <div className='flex items-center gap-3'>
          <Anchor url={Urls.HOME} text={Strings.home} primary={false} />
          <Anchor
            url={Urls.PORTFOLIO}
            text={Strings.portfolios}
            primary={false}
          />
        </div>
      </div>

      {!isAuth ? (
        <div className='flex gap-2'>
          <Button kind='secondary' className='py-1' onClick={handleLogInModal}>
            <span>{Strings.logIn}</span>
          </Button>
          <Button className='py-1' onClick={handleSignUpModal}>
            <span>{Strings.signUp}</span>
          </Button>
        </div>
      ) : (
        <Popover
          content={
            <AvatarContent letter={firstLetter ?? ''} bgColor={colorAvatar} />
          }
          contentClassName='p-4 w-72'
        >
          <Avatar letter={firstLetter ?? ''} bgColor={colorAvatar} isMain />
        </Popover>
      )}
    </header>
  )
}
