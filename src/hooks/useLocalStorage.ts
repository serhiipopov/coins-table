import { useEffect, useState } from 'react'

export const useLocalStorage = <T>(
  storageKey: string,
  initialValue: T | null,
): [T | null, (newValue: T) => void, () => void] => {
  const [value, setValue] = useState(initialValue)

  const saveValue = (newValue: T) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(newValue))
      setValue(newValue)
    } catch (error) {
      console.error(`Error saving ${storageKey}:`, error)
    }
  }

  const removeValue = () => {
    try {
      localStorage.removeItem(storageKey)
      setValue(null)
    } catch (error) {
      console.error(`Error removing ${storageKey}:`, error)
    }
  }

  useEffect(() => {
    ;(async () => {
      try {
        const storedValue = localStorage.getItem(storageKey)
        if (storedValue) {
          setValue(JSON.parse(storedValue))
        }
      } catch (error) {
        console.error(`Error loading ${storageKey}:`, error)
      }
    })()
  }, [storageKey])

  return [value, saveValue, removeValue]
}
