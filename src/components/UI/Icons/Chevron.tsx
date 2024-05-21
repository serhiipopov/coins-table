import { IconProps } from '@/types'
import { twMerge } from 'tailwind-merge'

export type ChevronIconProps = IconProps & {
  direction: 'left' | 'right' | 'up' | 'down'
}

export const Chevron = ({
  direction,
  width = '24',
  height = '24',
  className,
  ...props
}: ChevronIconProps) => {
  const directionClass = {
    left: 'rotate-90',
    right: '-rotate-90',
    up: 'rotate-180',
    down: 'rotate-0',
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={twMerge(
        directionClass[direction],
        'stroke-blu-dark',
        className,
      )}
      {...props}
    >
      <path
        d='M8 10L12 14L16 10'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
