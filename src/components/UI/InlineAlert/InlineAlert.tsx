import { twMerge } from 'tailwind-merge'
import { AlertType } from '@/constants'
import { InlineAlertProps } from './InlineAlert.types'

export const InlineAlert = ({
  type = AlertType.ERROR,
  label,
  children,
  wrapperClassName,
}: InlineAlertProps) => {
  return (
    <div
      className={twMerge(
        'flex flex-row items-center rounded-sm border bg-primary-white px-3 py-2',
        type === AlertType.ERROR
          ? 'border-states-error text-states-error'
          : 'border-states-success text-states-success',
        wrapperClassName,
      )}
    >
      {label || children}
    </div>
  )
}
