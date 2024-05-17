'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../../lib/firebaseConfig'
import { generateRandomColor, getAuthErrorMessage } from '../../utils'
import { User } from 'firebase/auth'
import { useLocalStorage } from '@/hooks'
import { LocalStorageKeys } from '@/constants'
import { FirebaseError } from '@firebase/util'

const AuthContext = createContext({})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [_, saveColorAvatar, removeColorAvatar] = useLocalStorage(
    LocalStorageKeys.COLOR_AVATAR,
    '',
  )

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser({ ...user })
        setIsAuth(!!user)
      } else {
        setUser(null)
      }
    })
    setLoading(false)

    return () => unsubscribe()
  }, [])

  const signUp = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        userCredential.user
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        const authErrorMessage = getAuthErrorMessage(
          errorCode,
          email,
          errorMessage,
        )
      })
  }

  const logIn = async (email: string, password: string) => {
    try {
      const bgColor = generateRandomColor()
      await signInWithEmailAndPassword(auth, email, password)
      setIsAuth(true)
      saveColorAvatar(bgColor)
    } catch (error) {
      const errorCode = (error as FirebaseError).code
      const errorMessage = (error as FirebaseError).message
      return { errorCode, errorMessage }
    }
  }

  const logOut = async () => {
    setIsAuth(false)
    await signOut(auth).then(() => {
      removeColorAvatar()
      setUser(null)
    })
  }

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut, isAuth }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext<any>(AuthContext)

// export const useAuth = () => {
//   const context = useContext(AuthContext)
//
//   if (Object.keys(context).length === 0) {
//     throw new Error('Please provide AuthProvider')
//   }
//
//   return context
// }
