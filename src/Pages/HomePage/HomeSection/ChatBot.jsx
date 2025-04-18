import React, { useContext, useState } from "react";
import pimg from "../../../Images/christina-2x.png";
import ChatbotItem from "../../../component/Chatbot/Chatbot";
import SelfModal from "../../../component/Module/Modal/SelfModal";
import { DataContext } from "../../../context";

const ChatBot = () => {
  const banner_text = [
    { img: pimg, role: "Production Assistant", name: "@Jenny" },
    { img: pimg, role: "Production Assistant", name: "@Rahul" },
    { img: pimg, role: "Production Assistant", name: "@Pankaj" }
  ];

  const { chatBotPopUp, setChatBotPopup } = useContext(DataContext);

  return (
    <>
      <SelfModal
        ModuleCompItem={ChatbotItem}
        isItemOpen={chatBotPopUp}
        setIsItemOpen={setChatBotPopup}
        position="end"
        width={window.innerWidth >= "768px" ? "auto" : "full"}
      />
      <div className="slide ">
        <div className="profile-container md:absolute fixed bottom-[4rem] md:right-11 right-3 z-[55]">
          <div
            onClick={() => {
              setChatBotPopup(true);
            }}
            className="profile-inner cursor-pointer text-white flex gap-2 
            
            bg-[hsla(0,0%,100%,.14)] backdrop-blur-md border-[1px] border-[hsla(0,0%,100%,.4)] rounded-full py-3 px-5"
          >
            <div className="profile-img">
              <img src={banner_text[0].img} />
            </div>
            <div className="profile-details font-semibold">
              <h1 className="md:text-sm text-xs">{banner_text[0].name}</h1>
              <h1 className="md:text-lg md:-mt-2 text-sm mt-1">
                {banner_text[0].role}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
