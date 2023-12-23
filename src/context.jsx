import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { API_BASE_URL } from "./config";

export const DataContext = createContext();

export const DataProviderFunc = ({ children }) => {
  const [my_projects, setMyProjects] = useState();
  const [selectedProject, setSelectedProject] = useState();
  const [paidProject, setPaidProject] = useState();
  const [collegeProject, setCollegeProject] = useState();

  const my_project_func = (id = null, cl = null, paid = null) => {
    axios
      .get(`${API_BASE_URL}/projects/`)
      .then((values) => {
        setMyProjects(values.data);

        if (paid = true){

          setPaidProject(
            values.data?.filter((element) => {
              return element.category === "Paid";
            })
            );
          }
          
      if (cl = true){
          setCollegeProject(
            values.data?.filter((element)=>{
              return element.category == "Practice"
            })
          )
        }

        

        if (id != null) {
          const getProjectById = values.data.find((element, index) => {
            return element.id == id;
          });
          setSelectedProject(getProjectById);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // End OF lead Function
  return (
    <DataContext.Provider
      value={{
        my_project_func,
        my_projects,
        selectedProject,
        paidProject,
        collegeProject
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
