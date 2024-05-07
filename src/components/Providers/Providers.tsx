'use client'

import { PropsWithChildren } from 'react'
import ModalProvider from '@/context/ModalContext'

const Providers = ({ children }: PropsWithChildren) => {
  return <ModalProvider>{children}</ModalProvider>
}

export default Providers
