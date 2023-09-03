import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.init';


export const AuthContext = createContext(null);


const AuthContexts = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>
    {
     return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User is ',currentUser); 
            setUser(currentUser)
        });
        return () => {
            unSubscribe
        }
        
    }, [])

    const value = { displayName: 'kolmi Lota' }
    const lu = { mama: '10' }
    const values = {
        user, value, lu, createUser, signIn,logOut
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContexts;