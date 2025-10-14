import React from 'react'
import { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [loading, setLoding] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        setLoding(true)
    }, [])

    const loginUser = async(userInfo) =>{}

    const logoutUser = async () =>{}

    const registerUser = async (userInfo) => {}

    const checkUserStatus = async() => {}

    const contextData = {

        user, 
        loginUser,
        logoutUser,
        registerUser,
        checkUserStatus
    }

    return(

        <AuthContext.Provider value={contextData}>

            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )
}


export const useAuth = ()=> {return useContext(AuthContext)}

export default AuthContext;