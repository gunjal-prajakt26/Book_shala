import { createContext, useEffect, useState } from "react";

export const  AuthContext= createContext();


export function AuthProvider({children}){

    const [token, setToken]=useState("");
    const getData=async ()=>{
        try {
            const creds={
                email: "adarshbalika@gmail.com",
            password: "adarshbalika"
        }

            const response= await fetch("/api/auth/login",{
                method: "POST",
                body:JSON.stringify(creds)
            });
                const {encodedToken}= await response.json()
                setToken(encodedToken);
                localStorage.setItem("encodedToken", encodedToken);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
      getData()
    }, []);
    
    return(
        <>
            <AuthContext.Provider value={{token}}>
                {children}
            </AuthContext.Provider>
        </>
            

    )
}