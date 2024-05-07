import { IconProps } from '@/types'
import { twMerge } from 'tailwind-merge'

export const Close = ({
  width = '24',
  height = '24',
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={twMerge('stroke-primary-dark', className)}
      {...props}
    >
      <path
        d='M18 6L6 18M6 6L18 18'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
