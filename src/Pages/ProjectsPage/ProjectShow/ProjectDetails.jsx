import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { DataContext } from "../../../context";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

const ProjectDetail = () => {
  const { selectedProject, my_project_func } = useContext(DataContext);
  const { id } = useParams();

  useEffect(() => {
    my_project_func(id);
  }, []);

  if (!selectedProject){
    return <div className="h-[90vh] flex justify-center items-center bg-image-container">
      <CircularProgress color="inherit" className="text-white"/>
    </div>
  }
  

  return (
    <>
      <div className=" shadow bg-image-container text-gray-300 text-center">

      <h1 className="text-center font-bold text-base md:text-xl  text-white flex py-3 bg-black">
          <div className="mr-auto ml-4">
            <NavLink to={"/"}>
              <ArrowBack />
            </NavLink>
          </div>
          <div className="mr-auto underline">{selectedProject.title}</div>
        </h1>
<div className="p-4">
        <div className="flex items-center justify-center">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="rounded-lg mb-4"
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: selectedProject.description }}
        />

{selectedProject.github_frontend_link && (
          <Button>
            <a
              href={selectedProject.github_frontend_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2 px-4 bg-blue-500 text-white rounded transition duration-300 hover:bg-blue-600"
            >
              GitHub Frontend
            </a>
          </Button>
        )}

        {/* Transparent Blue Button for GitHub Backend Link */}
        {selectedProject.github_backend_link && (
          <Button>
            <a
              href={selectedProject.github_backend_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2 px-4 bg-blue-500 text-white rounded transition duration-300 hover:bg-blue-600"
            >
              GitHub Backend
            </a>
          </Button>
        )}

        {/* Transparent Blue Button for Website Link */}
        {selectedProject.website_link && (
          <Button variant="outlined">
            <a
              href={selectedProject.website_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </Button>
        )}

        {/* Transparent Blue Button for Video Link */}
        {selectedProject.video_link && (
          <Button>
            <a
              href={selectedProject.video_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2 px-4 bg-blue-500 text-white rounded transition duration-300 hover:bg-blue-600"
            >
              Watch Video
            </a>
          </Button>
        )}
       
    <div className="cloud-border  right">
      <h1 className="text-center text-base underline">Made By</h1>
      <p className="text-sm font-medium">{selectedProject.associated_with}</p>
      {/* Add more author details if needed */}
    </div>



        {/* Other selectedProject details... */}

        {/* Transparent Blue Button for GitHub Frontend Link */}
       
      </div>
            </div>        
    </>
  );
};

export default ProjectDetail;
