import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

    const value = { displayName: 'kolmi Lota' }
    const lu = { mama: '10' }
    const values = {
        user, value, lu,createUser,signIn
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContexts;