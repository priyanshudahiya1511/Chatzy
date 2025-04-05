import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'

const useLogout = () => {

    const{setAuthUser} = useContext(AuthContext)
    const[loading,setLoading] = useState(false)

    const logout = async() =>{
        setLoading(true)

        try{
            const res = await fetch("/api/auth/logout",{
                method: "POST",
                headers: {"Content-Type": "application/json"}
            })
            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }

            localStorage.removeItem("user-info")
            setAuthUser(null)
        }
        catch(error){
            toast.error(error.message)
        }
        setLoading(false)
    }

    return {loading,logout}
}

export default useLogout