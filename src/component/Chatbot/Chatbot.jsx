import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import pimg from "../../Images/christina-2x.png";
import ChatBotResponse from '../../pages/HomePage/HomeSection/ChatBotResponse/ChatBotResponse';

const ChatbotItem = () => {

  return (
    <ChatBot
    className="w-full"
      width="100%"
      botAvatar={pimg}
      
      steps={[
        {
          id: '1',
          message: `Hi, I am Jenny, the A.I. Assistant of Manoj Rawat. How can I help you?`,
          trigger: 'user_prompt',
        },
        {
          id: 'user_prompt',
          user: true, // This allows the user to input something
          trigger: '3', // After the user inputs something, move to the next step
        },
        {
          id: '3',
          component: <ChatBotResponse />, // Pass user input to the next component
          as: 'message',
          trigger : "user_prompt"
        }
      ]}
    />
  );
}

export default ChatbotItem;
