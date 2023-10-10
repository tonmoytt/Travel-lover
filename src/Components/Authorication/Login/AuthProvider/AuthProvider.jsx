import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../../../Firebase/firebase.config";


export const AuthCreate=createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setuser]=useState();

    const newUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const Login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo={user,newUser,Login}
    return (
        <div>
        
            <AuthCreate.Provider value={authInfo}>
            {children}
            </AuthCreate.Provider>
        </div>
    );
};

export default AuthProvider;