import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TypingEffect from "../../components/TypingComp/Typing";
import myImg from "../../images/img5.jpg";
import ProjectSlider from "./HomeSupport/ProjectsSlider";
import { DataContext } from "../../context";
import { CircularProgress } from "@mui/material";

const HomePagePhone = () => {

  const { my_project_func,paidProject } = useContext(DataContext);

  useEffect(()=>{
  
    if (!paidProject){
      my_project_func(null, null, true);
  } 


},[]);

if (!paidProject){
  return <div className="h-[90vh] flex justify-center items-center bg-image-container">
    <CircularProgress color="inherit" className="text-white"/>
  </div>
}



  return (
    <>
      <div className="grid grid-cols-1 gap-4 min-h-screen bg-black text-white bg-image-container">
        <div className="">
          <h1 className="mx-4 mt-[2rem] text-xl font-bold mb-6  text-white py-2 px-4 rounded-xl text-center shadow-lg border border-solid border-white">
            Manoj Rawat
          </h1>
          <div className="rounded-[50%] flex text-center items-center w-[65vw] h-[65vw] mx-auto md:mt-[5rem]">
            <img
              src={myImg}
              alt="Personal Image"
              className="rounded-[50%]  w-full h-full object-contain border-4 border-solid border-white rotate-12"
            />
          </div>

          {/* Typing and contact links */}
          <div className="flex flex-col justify-center items-center p-8">
            <h1 className="text-xl font-bold mb-4 text-center ">
              Welcome to Munna Coders
            </h1>
            <h1 className="text-4xl font-bold mb-4">
              <div className="text-blue-500 text-center h-[4rem]">
                {" "}
                <TypingEffect /> 
              </div>
            </h1>

            <div className="my-4">
                <ProjectSlider data={paidProject} />
            </div>

            <h4 className="text-base font-bold underline my-3">Web App not Website</h4>
            <p className="text-xs text-center mb-6">
             Hii I am Manoj Rawat.I am a Pro In Web Devlopment My Passion is to make Web App not Website.

            </p>
            <div>
              <NavLink to="/project">
                <div className="w-[70vw] mb-4">

                <button className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-800 px-4 py-2 rounded-md transition duration-300 w-full">
                  My Projects
                </button>

                </div>
              </NavLink>
                <div className="w-[100%]">
              <NavLink to="/contact">
                <button className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-800 px-4 py-2 rounded-md transition duration-300 w-full">
                  Contact
                </button>
              </NavLink>
            </div>
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default HomePagePhone;
