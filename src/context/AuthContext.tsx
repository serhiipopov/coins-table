'use client'

import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { onAuthStateChanged, getAuth, User } from 'firebase/auth'
import firebase_app from '../../lib/firebaseConfig'

const auth = getAuth(firebase_app)

interface AuthContextProps {
  user: User | null
}

export const AuthContext = createContext<AuthContextProps>({ user: null })

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (Object.keys(context).length === 0) {
    throw new Error('Please provide AuthProvider')
  }

  return context
}

export default AuthProvider
