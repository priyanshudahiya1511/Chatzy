import React, { useContext } from 'react';
import { TiMessages } from 'react-icons/ti';
import { AuthContext } from '../../context/AuthContext';

const NoChatSelected = () => {
  const { authUser } = useContext(AuthContext);

  return (
    <div className="h-full flex justify-center items-center px-4 py-6 md:min-w-[450px]">
      <div className="text-center text-gray-200 font-semibold flex flex-col items-center gap-3">
        <p className="text-lg sm:text-xl md:text-2xl">
          Welcome 👋 {authUser.fullName} ❄️
        </p>
        <p className="text-base sm:text-lg md:text-xl">
          Select a chat to start messaging
        </p>
        <TiMessages className="text-4xl sm:text-5xl md:text-6xl text-blue-400 mt-2" />
      </div>
    </div>
  );
};

export default NoChatSelected;
