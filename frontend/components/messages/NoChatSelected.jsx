import React, { useContext } from 'react'
import {TiMessages} from "react-icons/ti"
import { AuthContext } from '../../context/AuthContext'

const NoChatSelected = () => {

  const {authUser} = useContext(AuthContext);
  return (
    <div className='h-full flex justify-center items-center md:min-w-[450px]'>
        <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col
        items-center gap-2'>
            <p>Welcome 👋 {authUser.fullName} ❄️</p>
            <p>Select a chat to start messaging</p>
            <TiMessages className="text-3xl md:text-6xl text-center"/>
        </div>
    </div>
  )
}

export default NoChatSelected