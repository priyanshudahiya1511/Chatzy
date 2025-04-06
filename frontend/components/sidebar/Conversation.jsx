import React, { useContext } from 'react';
import useConversation from '../../zustand/useConversation';
import { SocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, emoji, lastidx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useContext(SocketContext);
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <div>
      <div
        className={`flex items-center gap-3 hover:bg-sky-500 rounded-lg p-2 cursor-pointer transition-colors ${
          isSelected ? 'bg-blue-500' : ''
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? 'avatar-online' : ''}`}>
          <div className="w-10 sm:w-12 rounded-full">
            <img src={conversation.profilepic} alt="Avatar" />
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-sm sm:text-base text-gray-200 truncate">
              {conversation.fullName}
            </p>
            <span className="text-lg sm:text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastidx && <div className="divider my-0 py-0 h-px bg-slate-600" />}
    </div>
  );
};

export default Conversation;
