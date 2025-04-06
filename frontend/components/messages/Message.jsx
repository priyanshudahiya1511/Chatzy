import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../src/utils/extractTime';

const Message = ({ message }) => {
  const { authUser } = useContext(AuthContext);
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilepic : selectedConversation?.profilepic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : 'bg-gray-700';
  const shakeClass = message.shouldShake ? 'shake' : '';

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-8 sm:w-10 rounded-full">
          <img alt="User" src={profilePic} />
        </div>
      </div>

      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} 
        max-w-[80%] sm:max-w-md break-words px-4 py-2 text-sm sm:text-base`}
      >
        {message.message}
      </div>

      <div className="chat-footer opacity-50 text-[10px] sm:text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
