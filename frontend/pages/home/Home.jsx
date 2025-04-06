import React, { useEffect } from 'react';
import SideBar from '../../components/sidebar/SideBar';
import MessageContainer from '../../components/messages/MessageContainer';
import NoChatSelected from '../../components/messages/NoChatSelected';
import useConversation from '../../zustand/useConversation';

const Home = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className='flex flex-col sm:flex-row h-screen overflow-hidden bg-gray-900 text-white'>
      <div className='w-full sm:w-[30%] lg:w-[25%] border-r border-slate-700'>
        <SideBar />
      </div>
      <div className='flex-1'>
        {!selectedConversation ? <NoChatSelected /> : <MessageContainer />}
      </div>
    </div>
  );
};

export default Home;
