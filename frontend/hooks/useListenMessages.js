import React, { useContext, useEffect } from 'react'
import { SocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation';
import notificationsound from '../src/assets/sounds/notification.mp3';

const useListenMessages = () => {
  const {socket} = useContext(SocketContext);
  const {messages,setMessages} = useConversation();

  useEffect(() => {
    socket?.on("newMessage",(newMessage)=>{
        setMessages([...messages,newMessage]);
        newMessage.shouldShake = true;

        const sound = new Audio(notificationsound);
        sound.play();

        return () => socket.off("newMessage")
    })
  },[socket, setMessages, messages])
}

export default useListenMessages