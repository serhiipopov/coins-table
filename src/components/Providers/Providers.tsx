'use client'

import { PropsWithChildren } from 'react'
import { ModalProvider, AuthProvider } from '@/context'

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <AuthProvider>
      <ModalProvider>{children}</ModalProvider>
    </AuthProvider>
  )
}

export default Providers
