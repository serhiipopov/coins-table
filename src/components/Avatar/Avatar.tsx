import { AvatarProps } from '@/components'
import { twMerge } from 'tailwind-merge'

export const Avatar = ({
  letter,
  bgColor,
  className,
  isMain = false,
}: AvatarProps) => {
  return (
    <div
      className={twMerge(
        'flex h-10 w-10 items-center justify-center rounded-full shadow-md hover:cursor-pointer',
        isMain && 'transition-transform duration-300 hover:scale-125',
        className,
      )}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <p className={`text-3xl font-extrabold uppercase text-primary-white`}>
        {letter}
      </p>
    </div>
  )
}
