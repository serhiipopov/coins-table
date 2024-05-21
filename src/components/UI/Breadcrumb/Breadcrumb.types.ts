import { ReactNode } from 'react'

export type BreadcrumbProps = {
  separator?: ReactNode
  backText?: string
  backRoute?: string
  isBackPath?: boolean
}
