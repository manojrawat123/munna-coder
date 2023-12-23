import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../../../context";
import { Button, Tab, Tabs } from "@mui/material";

const ProfessionalProject = () => {
  const { my_project_func, paidProject } = useContext(DataContext);

  useEffect(() => {
    if (!paidProject){
      my_project_func(null, null, true);
    }
  }, []);

  return (
    <div className="p-4 shadow bg-image-container">
      {/* Title at the top */}
<h1 className="text-base font-bold mb-4 text-center text-blue-600 underline">
        Professional Project's
      </h1>
      {/* Project Cards */}
      {paidProject?.map((project) => (
        <div
          key={project.id}
          className="mb-4 p-2 border border-gray-300 text-center bg-gray-100 shadow-2xl rounded-xl "
        >
          <h2 className="text-xs font-bold mb-2 text-center">
            {project.title}
          </h2>
          <div className="flex items-center justify-center col-span-2">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-full border border-white w-[8rem] h-[8rem]"
            />
          </div>
          <p className=" text-gray-700 text-center font-semibold text-[0.71rem] my-2">
            {project.subheading.substring(0, 60)}...
          </p>
          {/* Button (using Material-UI Button) */}
          <button className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-800 px-4 py-2 rounded-md transition duration-300 text-xs">
            Project Detail's
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalProject;
