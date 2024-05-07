import { twMerge } from 'tailwind-merge'
import { IconButtonProps } from './IconButton.types'

export const IconButton = ({
  children,
  className,
  type = 'button',
  disabled = false,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={twMerge(
        'flex items-center justify-center rounded-full p-1 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
