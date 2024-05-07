import { useEffect, useState } from 'react'

export const useScrollLock = () => {
  const [isLocked, setIsLocked] = useState<boolean>(false)

  useEffect(() => {
    function handleScroll(event: Event) {
      if (isLocked) {
        event.preventDefault()
      }
    }

    if (isLocked) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('scroll', handleScroll, { passive: false })
    } else {
      document.body.style.overflow = 'auto'
      document.removeEventListener('scroll', handleScroll)
    }

    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('scroll', handleScroll)
    }
  }, [isLocked])

  const lockScroll = () => {
    setIsLocked(true)
  }

  const unlockScroll = () => {
    setIsLocked(false)
  }

  return { lockScroll, unlockScroll }
}
