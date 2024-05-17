import { getIdToken, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebaseConfig'

export const getUserToken = async () => {
  return new Promise((resolve, reject) => {
    const unsub = onAuthStateChanged(auth, async user => {
      if (user) {
        const token = await getIdToken(user)
        resolve(token)
      } else {
        console.log('User not logged in')
        resolve(null)
      }
      unsub()
    })
  })
}
