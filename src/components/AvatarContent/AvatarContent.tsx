'use client'

import { Strings, Urls } from '@/constants'
import { Anchor, Avatar, AvatarContentProps } from '@/components'
import { useAuth } from '@/context'
import { Exit, Settings } from '@/components/Icons'

export const AvatarContent = ({ letter, bgColor }: AvatarContentProps) => {
  const { logOut, user } = useAuth()

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center gap-3'>
        <Avatar
          letter={letter}
          bgColor={bgColor}
          className='hover:cursor-auto'
        />
        <div>
          <span>Hi,</span>
          <p>{user.email}</p>
        </div>
      </div>

      <div className='w-full border-px border-grey-light' />

      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <Anchor url={Urls.PROFILE} text={Strings.profile} primary={false} />
          <Settings width={16} />
        </div>

        <div className='flex items-center justify-between'>
          <Anchor onClick={logOut} text={Strings.logOut} primary={false} />
          <Exit width={16} />
        </div>
      </div>
    </div>
  )
}
