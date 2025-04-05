import React, { useEffect } from 'react';
import SideBar from '../../components/sidebar/SideBar';
import MessageContainer from '../../components/messages/MessageContainer';
import NoChatSelected from '../../components/messages/NoChatSelected';
import useConversation from '../../zustand/useConversation';

const Home = () => {
 
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(()=> {
    // cleanup function (unmounts)
    return ()=>{
      setSelectedConversation(null)
    }
  },[setSelectedConversation])


  return (
    <div className='flex sm:h-[450px] md:h-[550px] round-lg overflow-hidden bg-gray-0 bg-clip-padding 
         backdrop-filter backdrop-blur-lg bg-opacity-0 '>
      <SideBar/>
      {!selectedConversation ?  <NoChatSelected/> : <MessageContainer/>}
    </div>
  )
}

export default Home