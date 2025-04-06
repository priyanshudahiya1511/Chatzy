import React, { useEffect, useState } from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';
import {getRandomEmoji} from '../../src/utils/emojis';

const Conversations = () => {

  const {loading,conversations} = useGetConversations();
  
  return (
    <div className='py-2 flex flex-col overflow-auto scrollbar'>
        {loading ? (<span className='loading loading-spinner mx-auto'></span>)   :
        (conversations.map((conversation,idx) =>{
          return <Conversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()} lastidx={idx === conversations.length - 1}/>
        }))}
    </div>
  )
}

export default Conversations