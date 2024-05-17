'use client'

import { useEffect, useRef, useState } from 'react'
import { PopoverProps } from '@/components'
import { twMerge } from 'tailwind-merge'

export const Popover = ({
  children,
  content,
  trigger = 'click',
  contentClassName,
}: PopoverProps) => {
  const [show, setShow] = useState<boolean>(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleMouseOver = () => {
    if (trigger === 'hover') {
      setShow(true)
    }
  }

  const handleMouseLeft = () => {
    if (trigger === 'hover') {
      setShow(false)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShow(false)
      }
    }

    if (show) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [show])

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeft}
      className='relative flex h-fit w-fit justify-center'
    >
      <div onClick={() => setShow(!show)}>{children}</div>
      <div
        hidden={!show}
        onClick={() => setShow(!show)}
        className={twMerge(
          'absolute right-1.5 top-16 z-50 h-fit min-w-fit rounded-lg bg-primary-white p-2 shadow-2xl',
          contentClassName,
        )}
      >
        <div className=''>{content}</div>
      </div>
    </div>
  )
}
