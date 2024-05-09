import { generateRandomColor } from '../../../utils'
import { AvatarProps } from '@/components'

export const Avatar = ({ letter }: AvatarProps) => {
  const bgColor = generateRandomColor()

  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-full shadow-md hover:cursor-pointer`}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <p className={`text-primary-white text-2xl font-extrabold uppercase`}>
        {letter}
      </p>
    </div>
  )
}
