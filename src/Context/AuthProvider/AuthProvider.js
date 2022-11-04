import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)



function AuthProvider({children}) {
     const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true)

     useEffect(() =>{
          const unsubscribe = onAuthStateChanged(auth, currentUser =>{
               console.log(currentUser)
               setUser(currentUser)
          })
          return () => unsubscribe()
     },[])

   const createUser = (email,password) =>{
     return createUserWithEmailAndPassword(auth, email, password)
   }

   const signIn = (email,password) =>{
     return  signInWithEmailAndPassword(auth, email, password)
   }

   const googleSignin = (provider) =>{
       return signInWithPopup(auth, provider)
   }

   const authValue ={
      setUser,
      setLoading,
      createUser,
      signIn,
      googleSignin,

   }
  return (
    <div>
      <AuthContext.Provider value={authValue}>
          {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider