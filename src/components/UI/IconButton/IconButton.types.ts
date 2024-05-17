import { ButtonHTMLAttributes, ReactElement } from 'react'
import { IconProps } from '@/types'

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement<IconProps>
}
