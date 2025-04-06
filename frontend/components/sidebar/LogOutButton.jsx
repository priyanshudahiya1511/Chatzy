import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

const LogOutButton = () => {
  const {loading,logout} = useLogout()
  return (
    <div className='mt-5'>
        {loading ? (<span className='loading loading-spinner'></span>) :
         <BiLogOut
         onClick={logout} 
         className='w-6 h-6 text-white cursor-pointer'/>}
    </div>
  )
}

export default LogOutButton