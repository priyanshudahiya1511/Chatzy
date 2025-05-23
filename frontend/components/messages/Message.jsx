import React, {useContext } from 'react'
import {AuthContext} from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../src/utils/extractTime'


const Message = ({message}) => {
  const {authUser} = useContext(AuthContext)
  const {selectedConversation} = useConversation()

  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt)
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilepic : selectedConversation?.profilepic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-900 text-black dark:bg-gray-900 dark:text-white";

  const shakeClass = message.shouldShake ? "shake" :""

  return (
<div className={`chat ${chatClassName}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={profilePic} />
    </div>
  </div>
  <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
  <div className='chat-footer opacity-50 text-xs flex gap-1 text-gray-800 items-center'>{formattedTime}</div>
</div>
  )
}

export default Message