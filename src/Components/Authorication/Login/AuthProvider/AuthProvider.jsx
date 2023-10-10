import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../../../Firebase/firebase.config";


export const AuthCreate=createContext(null)
const googleProvider=new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setuser]=useState();

    const newUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const Login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
const Googleauth=()=>{
    return signInWithPopup(auth,googleProvider)
}
    const authInfo={user,newUser,Login,Googleauth}
    return (
        <div>
        
            <AuthCreate.Provider value={authInfo}>
            {children}
            </AuthCreate.Provider>
        </div>
    );
};

export default AuthProvider;