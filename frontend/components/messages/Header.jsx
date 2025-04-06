import React from 'react'
import useConversation from '../../zustand/useConversation'
import { IoIosClose } from "react-icons/io";

const Header = () => {

  const {selectedConversation,setSelectedConversation} = useConversation();

  return (
    <div className='bg-slate-500 px-4 py-2 mb-2 flex justify-between'>
        <div>
            <span className='label-text'>To:</span>{" "}
            <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
        </div>
        <div className='flex items-center justify-center text-xl cursor-pointer'
        onClick={() => setSelectedConversation}
        >
           <IoIosClose />
        </div>
     </div>
  )
}

export default Header