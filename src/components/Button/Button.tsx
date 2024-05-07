import { twMerge } from 'tailwind-merge'
import { ButtonProps } from '@/components'

export const Button = ({
  children,
  type = 'button',
  kind = 'primary',
  disabled = false,
  onClick,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        'border border-primary-dark px-3 py-2 text-sm font-light outline-none transition duration-500 disabled:cursor-not-allowed disabled:opacity-70',
        kind === 'primary'
          ? 'bg-primary-dark text-primary-white hover:border-grey-dark hover:bg-grey-dark disabled:border-grey-medium disabled:bg-grey-medium'
          : 'text-primary-dark hover:enabled:border-grey-light hover:enabled:bg-grey-light disabled:border-grey-medium disabled:text-grey-medium',
        className,
      )}
    >
      {children}
    </button>
  )
}
