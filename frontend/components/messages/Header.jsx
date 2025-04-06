import React from 'react';
import useConversation from '../../zustand/useConversation';
import { IoIosClose } from 'react-icons/io';

const Header = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  return (
    <div className="bg-slate-500 px-3 py-2 mb-2 flex justify-between items-center sm:px-4 sm:py-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
        <span className="text-sm text-white sm:text-base">To:</span>
        <span className="text-white font-semibold break-words max-w-[140px] sm:max-w-none">
          {selectedConversation.fullName}
        </span>
      </div>
      <button
        className="text-white text-2xl sm:text-3xl p-1 sm:p-2 rounded hover:bg-slate-600 transition"
        onClick={() => setSelectedConversation(null)}
        aria-label="Close chat"
      >
        <IoIosClose />
      </button>
    </div>
  );
};

export default Header;
