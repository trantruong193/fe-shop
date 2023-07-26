import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [token,setToken] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token)
            setToken(token)
        else
            navigate('/login')
    },[navigate])

    return (
        <AuthContext.Provider value={{token,setToken}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;