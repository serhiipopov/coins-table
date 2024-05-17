import { IconProps } from '@/types'
import { twMerge } from 'tailwind-merge'

export const Exit = ({
  width = '24',
  height = '24',
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={twMerge('stroke-blu-dark', className)}
      {...props}
    >
      <path d='M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9' />
    </svg>
  )
}
