import { PropsWithChildren } from 'react'
import { AlertType } from '@/constants'

export type InlineAlertProps = PropsWithChildren<{
  type: AlertType
  label?: string
  wrapperClassName?: string
  containerClassName?: string
}>
