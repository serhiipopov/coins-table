import { ReactNode } from 'react'

export interface PopoverProps {
  children: ReactNode
  content: ReactNode
  trigger?: 'click' | 'hover'
  contentClassName?: string
}
