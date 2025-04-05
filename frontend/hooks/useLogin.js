import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import {toast} from "react-hot-toast"

const useLogin = () => {

    const{setAuthUser} = useContext(AuthContext);
    const [loading,setLoading] = useState(false)

   const login = async(username,password) =>{

    const success = handleErrors(username,password);
    if(!success) return;

    setLoading(true)

    try{
        const res = await fetch("/api/auth/login",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username,password})
        })

        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }

        localStorage.setItem("user-info",JSON.stringify(data))
        setAuthUser(data)
    }
    catch(error){
        toast.error(error.message)
    }
    setLoading(false)
   }

   return {loading,login}
}

export default useLogin



function handleErrors(username,password){
    if(!username || !password ){
        toast.error("Please fill in all the fields")
        return false
    }

    return true

}