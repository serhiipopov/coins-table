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
import { generateRandomColor } from '../../utils'

interface UserType {
  email: string | null
  uid: string | null
}

const AuthContext = createContext({})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType>({ email: null, uid: null })
  const [colorAvatar, setColorAvatar] = useState<string>('')
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
        })
      } else {
        setUser({ email: null, uid: null })
      }
    })

    setLoading(false)

    return () => unsubscribe()
  }, [])

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = (email: string, password: string) => {
    const bgColor = generateRandomColor()
    setColorAvatar(bgColor)
    setIsAuth(true)
    signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = async () => {
    setIsAuth(false)
    setUser({ email: null, uid: null })
    return await signOut(auth)
  }

  return (
    <AuthContext.Provider
      value={{ user, signUp, logIn, logOut, colorAvatar, isAuth }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext<any>(AuthContext)
