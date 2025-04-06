import React, { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message);
    setMessage('');
  };

  return (
    <form className="w-full px-2 sm:px-4 py-2" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <input
          type="text"
          className="border text-sm rounded-full block w-full py-2.5 pr-10 pl-4 bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition duration-150"
          disabled={loading}
        >
          {loading ? <span className="loading loading-spinner"></span> : <BsSend size={20} />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
