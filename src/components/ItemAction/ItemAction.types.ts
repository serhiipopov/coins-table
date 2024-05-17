import { ReactNode } from 'react'

export interface ItemActionProps {
  icon: ReactNode
  text: string
  handleClick: (id: string) => void
}
