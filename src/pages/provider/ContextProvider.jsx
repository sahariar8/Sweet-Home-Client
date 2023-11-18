import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const ContextProvider = ({children}) => {
        const [loading,setLoading] = useState(true);
        const [user,setUser] = useState(null);

   const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
   }
   const signIn = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
   }
   const googleSign = ()=>{
    setLoading(true);
     return signInWithPopup(auth,googleProvider);
   }

   const userProfileUpdate = (name,photo) =>{
    return updateProfile(auth.currentUser, {
         displayName: name, photoURL: photo
       });
 }

   const logOut = ()=>{
        return signOut(auth);
   }
   
   useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            return unSubscribe();
        }
   },[])

   const authInfo = {user,createUser,signIn,googleSign,userProfileUpdate,logOut,loading};

   return <AuthContext.Provider value={authInfo}>
        {children}
   </AuthContext.Provider>
};

export default ContextProvider;