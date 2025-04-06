import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {

  const {loading,messages} = useGetMessages()
  const lastMessageRef = useRef();
  useListenMessages();

  useEffect(()=>{
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behaviour : "smooth"});
    },100)
  },[messages])
  return (
    <div className='px-4 flex-1 overflow-auto scrollbar relative'>
       {loading && <div className='spinner absolute top-1/2 right-1/2'></div>}

       {!loading && messages.length === 0 && (<p className='text-center'>Send a message to start the conversation</p>)}

       {!loading && messages.length > 0 && (
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}><Message message={message}/></div>
        ))
       )}
    </div>
  )
}

export default Messages