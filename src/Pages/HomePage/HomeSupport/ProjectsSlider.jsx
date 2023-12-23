import React, { useState, useEffect } from "react";

// import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
// import { FaQuoteRight } from 'react-icons/fa';s
import "./ProjectSlider.css";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

function ProjectSlider(props) {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = props.data?.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, props.data]);

  useEffect(() => {
    let slider = setInterval(() => { 
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };

  }, [index]);
  return (
    <>
      <section className="section">
        <div className="title">
          <h2 className="my-4 text-gray-400">
            <span>/</span><div className="underline">My Projects</div>
          </h2>
        </div>
        <div className="section-center h-[420px] sm:h-[400px]">
          
          {props.data?.map((person, personIndex) => {
            const {id, image , title , type , category , description , associated_with  , subheading , slug, cms , language_used, library_used ,
               github_frontend_link, github_backend_link,website_link,video_link,
 } = person;

            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === props.data?.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={`${position} border rounded-xl`} key={id} >
                 <h4 className="my-3 underline">{title}</h4>
                <img
                  src={image}
                  alt={slug}
                  className="person-img mx-auto"
                />
               
                {/* <p className="title">{title}</p> */}
                <p className="text">{subheading}</p>

                <h1 className="text-base font-bold underline mt-4">Project Made By</h1>
                <small className="mr-auto">{associated_with.substring(0,11)}...</small>
                 {/* <NavigateNext />  */}
                 <br />
                 <br />
                 <NavLink to={`/project/${id}`}>
                 <button className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-800 px-4 py-2 rounded-md transition duration-300 text-xs">Project Detail's</button>
                 </NavLink>
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
             <NavigateBefore />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
          <NavigateNext /> 
          </button>
        </div>
      </section>
    </>
  );
}

export default ProjectSlider;
