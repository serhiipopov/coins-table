import { ButtonHTMLAttributes } from 'react'

export type ButtonKind = 'primary' | 'secondary'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: ButtonKind
  className?: string
}
