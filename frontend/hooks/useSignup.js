import React, { useContext, useState } from 'react';
import {toast} from "react-hot-toast";
import { AuthContext } from '../context/AuthContext';

const useSignup = () => {


    const {setAuthUser} = useContext(AuthContext)
    const[loading,setLoading] = useState(false);


    const signup = async({fullName,username,password,confirmPassword,gender}) =>{
        const success = handleErrors({fullName,username,password,confirmPassword,gender});
        if(!success) return;

        setLoading(true)

        try{
            const res = await fetch('/api/auth/signup',{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({fullName,username,password,confirmPassword,gender})
            })

            const data = await res.json();
            console.log(data)
            if(data.error){
                throw new Error(data.error)
            }

            // localstorage
            localStorage.setItem("user-info",JSON.stringify(data))
            // context
            setAuthUser(data)
        }
        catch(error){
            toast.error(error.message)
        }
        setLoading(false)
    };

    return {loading,signup}

}

export default useSignup

function handleErrors({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please fill in all the fields")
        return false
    }

    if(password !== confirmPassword){
        toast.error("Passwords do not match")
        return false
    }

    if(password.length < 6){
        toast.error("Password must be atleast 6 characters")
        return false
    }

    return true

}