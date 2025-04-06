import React from 'react';
import Messages from './Messages';
import Header from './Header';
import MessageInput from './MessageInput';

const MessageContainer = () => {
  return (
    <div className="flex flex-col h-full w-full md:min-w-[450px] max-h-screen">
      <Header />
      <div className="flex-1 overflow-y-auto px-2 sm:px-4">
        <Messages />
      </div>
      <div className="px-2 sm:px-4 py-2">
        <MessageInput />
      </div>
    </div>
  );
};

export default MessageContainer;
