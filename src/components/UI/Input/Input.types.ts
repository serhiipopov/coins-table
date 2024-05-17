import { InputHTMLAttributes, ReactElement, ReactNode } from 'react'
import { IconProps } from '@/types'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean
  error?: string
  label?: ReactNode
  hint?: ReactNode
  inputClassName?: string
  labelClassName?: string
  wrapperClassName?: string
  hintClassName?: string
  containerWrapperClassName?: string
  errorClassName?: string
  rightIcon?: ReactElement<IconProps>
  leftIcon?: ReactElement<IconProps>
}
