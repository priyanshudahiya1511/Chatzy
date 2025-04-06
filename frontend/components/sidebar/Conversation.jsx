import React, { useContext } from 'react'
import useConversation from '../../zustand/useConversation'
import { SocketContext } from '../../context/SocketContext';


const Conversation = ({conversation,emoji,lastidx}) => {

    const {selectedConversation, setSelectedConversation} = useConversation()
    const isSelected = selectedConversation?._id === conversation._id;
    const {onlineUsers} = useContext(SocketContext);
    const isOnline = onlineUsers.includes(conversation._id);
    
  return (
   
    <div>
        <div className={`flex gap-2 items center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-blue-500" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
        >
            <div className={`avatar ${isOnline ? "avatar-online" : "avatar-offline"}`}>
                <div className='w-12 rounded-full'>
                    <img src={conversation.profilepic} alt="Avatar" />
                </div>
            </div>

            <div className='flex-1 '>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200 mt-2'>{conversation.fullName}</p>
                    <span className='text-xl mt-2'>{emoji}</span>
                </div>
            </div>

        </div>

        { !lastidx && <div className='divider my-0 py-0 h-1'/>}
    </div>
  )
}

export default Conversation