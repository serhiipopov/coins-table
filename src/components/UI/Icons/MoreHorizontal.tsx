import { IconProps } from '@/types'
import { twMerge } from 'tailwind-merge'

export const MoreHorizontal = ({
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
      stroke='#000000'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={twMerge('stroke-blu-dark', className)}
      {...props}
    >
      <circle cx='12' cy='12' r='1'></circle>
      <circle cx='19' cy='12' r='1'></circle>
      <circle cx='5' cy='12' r='1'></circle>
    </svg>
  )
}
