import { useEffect } from 'react'

export const useKeyPress = (callback: () => void, keys: string[]) => {
  const onKeyDown = (event: KeyboardEvent) => {
    const isKeyPresses = keys.some(key => event.key === key)
    if (isKeyPresses) {
      event.preventDefault()
      callback()
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])
}
