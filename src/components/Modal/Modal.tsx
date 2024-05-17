'use client'

import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { CSSTransition } from 'react-transition-group'

import { Portal, ModalProps } from '@/components'
import { Close } from '@/components/UI/Icons'

export const Modal = ({
  animationDuration = 300,
  animationEnd,
  isOpen,
  backdropClass,
  cancelCallback,
  modalContentClass,
  content,
  hasCloseIcon = true,
}: ModalProps) => {
  const nodeRef = useRef(null)

  const backdropClassName = twMerge(
    `fixed inset-0 z-[998] flex items-start justify-center bg-ext-overlay outline-none focus:outline-none md:items-center`,
    backdropClass,
  )

  const transitionClasses = {
    appear: 'opacity-0',
    appearActive: `transition-opacity duration-${animationDuration} opacity-100`,
    enter: 'opacity-0',
    enterActive: `transition-opacity duration-${animationDuration} opacity-100`,
    exitActive: `transition-opacity duration-${animationDuration} opacity-0`,
  }

  return (
    <Portal wrapperId='modal-portal'>
      <CSSTransition
        in={isOpen}
        nodeRef={nodeRef}
        classNames={{ ...transitionClasses }}
        timeout={animationDuration}
        unmountOnExit
        onExited={animationEnd}
      >
        <div
          ref={nodeRef}
          className={backdropClassName}
          onClick={cancelCallback}
        >
          <div
            className='relative flex min-h-5 flex-row'
            onClick={e => e.stopPropagation()}
          >
            {hasCloseIcon ? (
              <Close
                className='absolute right-1.5 top-1.5 cursor-pointer hover:stroke-grey-dark'
                onClick={cancelCallback}
              ></Close>
            ) : null}

            <div
              className={twMerge(
                'flex w-full place-content-center',
                modalContentClass,
              )}
            >
              {content}
            </div>
          </div>
        </div>
      </CSSTransition>
    </Portal>
  )
}
