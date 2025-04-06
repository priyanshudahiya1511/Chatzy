import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef();
  useListenMessages();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [messages]);

  return (
    <div className="px-2 sm:px-4 flex-1 overflow-auto relative space-y-2 pb-4 scroll-smooth scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="loading loading-spinner"></span>
        </div>
      )}

      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-400 mt-4">Send a message to start the conversation</p>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message, idx) => {
          const isLast = idx === messages.length - 1;
          return (
            <div key={message._id} ref={isLast ? lastMessageRef : null}>
              <Message message={message} />
            </div>
          );
        })}
    </div>
  );
};

export default Messages;
