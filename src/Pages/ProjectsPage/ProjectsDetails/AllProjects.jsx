import { CircularProgress, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useContext, useEffect } from "react";
import LearningProject from "../ProjectShow/LearningProject/LearingProject";
import ProfessionalProject from "../ProjectShow/ProfessionalProject/ProfessionalProject";
import { ArrowBack, SkipPrevious } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../../context";
import HomeSliderLap from "../../HomePage/HomeSupport/HomeSliderLap";

const AllProject = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(0);
  const { my_project_func,paidProject, collegeProject } = useContext(DataContext);

useEffect(()=>{

   if (!paidProject){
      my_project_func(null, null, true);
    }
    if (!collegeProject){
      my_project_func(null,true, null);
    }

})

if (!paidProject && !collegeProject){
  return <div className="h-[90vh] flex justify-center items-center bg-image-container">
    <CircularProgress color="inherit" className="text-white"/>
  </div>
}


  return (
    <>
      <div className="bg-image-container text-white ">
        <h1 className="text-center font-bold text-base md:text-3xl md:hidden text-white flex py-3 bg-black">
          <div className="mr-auto ml-4">
            <NavLink to={"/"}>
              <ArrowBack />
            </NavLink>
          </div>

          <div className="mr-auto">Projects</div>
        </h1>
        <div className="title md:block hidden">
          <h2 className="py-4 underline bg-gray-900 text-white">
            <span>/</span>My Projects
          </h2>
        </div>
        <div className="grid grid-cols-2  pt-2 ">


          <div className="ml-2 ">
            <button
              className={` text-xs md:text-lg md:font-bold rounded w-full  px-2 py-1 cursor-pointer text-white transition-transform transition-box-shadow ${
                selectedCategory === 0
                  ? " bg-blue-500  shadow-sm border border-white p-1 font-semibold"
                  : " bg-gray-800  border border-gray-700"
              }`}
              onClick={() => setSelectedCategory(0)}
            >
              Paid Project
            </button>
          </div>
          <div className="ml-1 mr-2">
            <button
              className={` text-xs  md:text-lg md:font-bold rounded w-full  px-2 py-1 cursor-pointer text-white transition-transform transition-box-shadow ${
                selectedCategory === 1
                  ? " bg-blue-500  shadow-sm border border-white p-1 font-semibold"
                  : " bg-gray-800  border border-gray-700"
              }`}
              onClick={() => setSelectedCategory(1)}
            >
              College Project
            </button>
          </div>
        </div>
        <div className="md:hidden">
          {selectedCategory === 0 && <ProfessionalProject />}
          {selectedCategory === 1 && <LearningProject />}
        </div>

        <div className="md:block hidden">

        
     {selectedCategory === 0 &&   <HomeSliderLap data={paidProject} />}
     {selectedCategory === 1 &&   <HomeSliderLap data={collegeProject} />}
        </div>
      </div>
    </>
  );
};

export default AllProject;
