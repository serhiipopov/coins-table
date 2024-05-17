import { AnchorHTMLAttributes } from 'react'

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  primary?: boolean
  text?: string
  url?: string
}
