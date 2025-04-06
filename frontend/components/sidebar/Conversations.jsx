import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../src/utils/emojis';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 px-2 sm:px-4 flex flex-col overflow-auto scrollbar h-full">
      {loading ? (
        <span className="loading loading-spinner mx-auto my-4"></span>
      ) : (
        conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastidx={idx === conversations.length - 1}
          />
        ))
      )}
    </div>
  );
};

export default Conversations;
