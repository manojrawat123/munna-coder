import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { steps } from '../../data';
import message from "../../images/message.jfif"
import crossImg from "../../images/cross.png"


const MyChatbot = () => {

    const [display, setDisplay] = useState("hidden");
  
  return (
    <>        
      <div className="container mx-auto relative">
        {/* Rest of your content */}
        <div className="fixed bottom-4 right-4 z-50 icon-container">
          {/* Replace with your message icon */}          
            <img src={message} alt="Message Icon" className="w-[3rem] h-[3rem] rounded-full cursor-pointer" onClick={()=>{
                if (display === "hidden"){
                    setDisplay("block");
                }
                else{
                    setDisplay("hidden");
                }
            }}/>
        </div>
      </div>
      <div className={` relative ${display}`}>
  <div className='fixed bottom-[4.5rem] left-4 top-0  z-50 '>
    <div className='flex justify-end items-end' >
        <img src={crossImg} className='w-[3rem] h-[3rem] rounded-full cursor-pointer ' onClick={()=>{
            setDisplay("hidden");          
        }}/>
     </div>
    {/* <ChatBot steps={steps} 
    style={{ width: '35vw', height: '90%' }}
     /> */}
    <ChatBot steps={steps} style={{ width: '90vw', height: '82vh' }} />
  </div>
</div>


    </>
  )
}

export default MyChatbot