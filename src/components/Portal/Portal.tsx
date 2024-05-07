'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const createElementAndAppend = (wrapperId: string) => {
  const el = document.createElement('div')
  el.setAttribute('id', wrapperId)
  document.body.appendChild(el)
  return el
}

export type PortalProps = PropsWithChildren<{ wrapperId: string }>

export const Portal = ({ children, wrapperId }: PortalProps) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    let element = document.getElementById(wrapperId)

    if (!element) {
      element = createElementAndAppend(wrapperId)
    }

    setWrapperElement(element)
  }, [])

  if (!wrapperElement) {
    return null
  }

  return createPortal(children, wrapperElement)
}
