import React, { useState, useEffect } from "react";
import "./ProjectSlider.css";
import { NavLink } from "react-router-dom";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

function HomeSliderLap(props) {
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
      <section className="section ">
      
        
        <div className="section-center h-[550px] ">
          {props.data?.map((person, personIndex) => {
            const {
              id,
              image,
              title,
              type,
              category,
              description,
              associated_with,
              subheading,
              slug,
              cms,
              language_used,
              library_used,
              github_frontend_link,
              github_backend_link,
              website_link,
              video_link,
            } = person;

            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === props.data.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={`${position}`} key={id}>
                <h4 className="my-3 underline">{title}</h4>
                <img src={image} alt={slug} className="person-img mx-auto" />
                <p className="text">{subheading}</p>

                <p>{description.substring(0,300)}...</p>

                <h1 className="text-xl font-bold underline mt-4">
                  Project Made By
                </h1>
                <div className="mr-auto my-4">{associated_with}</div>

                <NavLink to={`/project/${id}`}>
                  <button className=" border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-800 px-4 py-2 rounded-md transition duration-300">
                    Project Detail's
                  </button>
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

export default HomeSliderLap;
