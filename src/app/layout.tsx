import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Wix_Madefor_Display } from 'next/font/google'
import { Sidebar, Header } from '@/components'
import Providers from '@/components/Providers/Providers'

import '../../styles/globals.css'

const wixMadeforDisplay = Wix_Madefor_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coins Table',
  description: 'Your coins table',
}

const portfolio = [{ name: 'Main' }, { name: 'Second' }]

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <Providers>
          <Sidebar portfolio={portfolio} />
          <main className={wixMadeforDisplay.className}>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
