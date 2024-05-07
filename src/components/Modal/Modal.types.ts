import { ReactNode } from 'react'

export interface ModalProps {
  isOpen: boolean
  animationDuration?: number
  animationEnd?: () => void
  backdropClass?: string
  cancelCallback?: () => void
  modalContentClass?: string
  content?: ReactNode
  submitCallback?: () => void
  hasCloseIcon?: boolean
}
