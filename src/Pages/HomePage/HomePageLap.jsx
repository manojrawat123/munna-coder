import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TypingEffect from "../../components/TypingComp/Typing";
import HomeSliderLap from "./HomeSupport/HomeSliderLap";
import { DataContext } from "../../context";
import myImg from "../../images/img5.jpg";

const HomePageLap = () => {



  

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  bg-image-container text-white h-[90vh]">
        {/* Right Grid */}
        <div className="">
          <h1 className="mx-4 mt-[5rem] text-xl font-bold mb-6  text-white py-2 px-4 rounded-xl text-center shadow-lg border border-solid border-white md:hidden">
            Munna Coder
          </h1>
          <div className="rounded-[50%] flex text-center items-center w-[20rem] h-[20rem] mx-auto md:mt-[5rem]">
            <img
              src={myImg}
              alt="Personal Image"
              className="rounded-[50%]  w-full h-full object-contain border-4 border-solid border-white rotate-12"
            />
          </div>
          <div className=" text-center hidden md:block">
            <h2 className="text-2xl font-bold text-white">
              Welcome to My Portfolio
            </h2>
            <p className="text-lg text-white mt-2">
              I'm excited to showcase my work here!
            </p>
          </div>
          {/* Image overlay design */}
        </div>
        {/* Left Grid */}
        <div className="flex flex-col justify-center items-center p-8">
          <h1 className="text-4xl font-bold mb-4 text-center ">
            Welcome to Munna Coders
          </h1>
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-blue-500">
              {" "}
              <TypingEffect />
            </span>
          </h1>
          <p className="text-lg text-center mb-6">
            I am a passionate web developer, eager to create innovative and
            user-friendly web applications.
          </p>

<div className="flex space-x-5">

          <NavLink to="/project">
                <button className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-800 px-4 py-2 rounded-md transition duration-300 ">
                  My Projects
                </button>

              </NavLink>
                
              <NavLink to="/contact">
                <button className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-800 px-4 py-2 rounded-md transition duration-300">
                  Contact
                </button>
              </NavLink>
</div>
          
        </div>
      </div>

       

    </>
  );
};

export default HomePageLap;
