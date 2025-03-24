import React from 'react';
import SideBar from '../../components/sidebar/SideBar';
import MessageContainer from '../../components/messages/MessageContainer';
import NoChatSelected from '../../components/messages/NoChatSelected';

const Home = () => {

  const noChatSelected = true;


  return (
    <div className='flex sm:h-[450px] md:h-[550px] round-lg overflow-hidden bg-gray-0 bg-clip-padding 
         backdrop-filter backdrop-blur-lg bg-opacity-0 '>
      <SideBar/>
      {noChatSelected ?  <NoChatSelected/> : <MessageContainer/>}
    </div>
  )
}

export default Home