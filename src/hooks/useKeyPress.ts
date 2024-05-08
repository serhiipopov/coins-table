import { useEffect, useCallback } from 'react'

export const useKeyPress = (callback: () => void, keys: string[]) => {
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const isKeyPresses = keys.some(key => event.key === key)
      if (isKeyPresses) {
        event.preventDefault()
        callback()
      }
    },
    [callback, keys],
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])
}
