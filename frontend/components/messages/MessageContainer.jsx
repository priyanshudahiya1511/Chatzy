import React from 'react'
import Messages from './Messages'
import Header from './Header'
import MessageInput from './MessageInput'

const MessageContainer = () => {
  return (
    <div className='md:min-w-[450px] flex flex-col '>
        <Header/>
        <Messages/>
        <MessageInput/>
    </div>
  )
}

export default MessageContainer