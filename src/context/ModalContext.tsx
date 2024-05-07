'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useRef,
  useState,
  FC,
} from 'react'
import { useKeyPress, useScrollLock } from '@/hooks'
import { Modal } from '@/components'

export interface ModalOpenArgs {
  backdropClass?: string
  wrapperClass?: string
  content?: ReactNode
  animationDuration?: number
  dialogContentClass?: string
  dialogHeaderClass?: string
  hasCloseIcon?: boolean
  title?: ReactNode
  hasActions?: boolean
  dialogActionsClass?: string
  cancelButtonText?: string
  cancelButtonStyles?: string
  submitButtonText?: string
  submitButtonStyles?: string
}

export interface ModalContextModel {
  isModalOpened: boolean
  openModal: (args: any) => Promise<any>
  handleModalSubmit: (value?: any) => void
  handleModalClose: () => void
}

export const ModalContext = createContext<ModalContextModel>(
  {} as ModalContextModel,
)

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [content, setContent] = useState<ModalOpenArgs | null>()
  const { lockScroll, unlockScroll } = useScrollLock()

  const promiseRef = useRef<{
    resolve: (value?: any) => void
    reject: () => void
  }>()

  const openModal = (args: ModalOpenArgs) => {
    setContent(args)
    setShowModal(true)
    lockScroll()
    return new Promise<any>((resolve, reject) => {
      promiseRef.current = { resolve, reject }
    })
  }

  const handleModalClose = () => {
    if (promiseRef.current) {
      promiseRef.current.reject()
    }
    setShowModal(false)
  }

  const handleModalSubmit = (value?: any) => {
    if (promiseRef.current) {
      promiseRef.current.resolve(value)
    }
    setShowModal(false)
  }

  const animationEnd = () => {
    setContent(null)
    unlockScroll()
  }

  useKeyPress(() => {
    if (showModal) {
      handleModalClose()
    }
  }, ['Escape'])

  return (
    <ModalContext.Provider
      value={{
        isModalOpened: showModal,
        openModal,
        handleModalClose,
        handleModalSubmit,
      }}
    >
      {children}

      <Modal
        isOpen={showModal}
        cancelCallback={handleModalClose}
        submitCallback={handleModalSubmit}
        animationEnd={animationEnd}
        {...content}
      ></Modal>
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)

  if (Object.keys(context).length === 0) {
    throw new Error('Please provide ModalProvider')
  }

  return context
}

export default ModalProvider
