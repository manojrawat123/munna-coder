import React, { useContext, useEffect } from "react";
import { DataContext } from "../../context";
import { NavLink } from "react-router-dom";

const MyAbout = () => {
  const { my_project_func, my_projects } = useContext(DataContext);

  useEffect(() => {
    if (!my_projects) {
      my_project_func();
    }
  }, []);

  return (
    <div className="bg-gray-100 py-12 bg-image-container">
      <div className="mx-auto">
        <div className="justify-center">
          <div className=" p-4 grid grid-cols-1 md:grid-cols-2 md:gap-10">

          <div className="text-white border border-solid border-white rounded-xl mb-4 md:col-span-1">
              <h2 className="text-xl font-bold  bg-gray-700 text-white py-2 px-4 rounded-t-xl text-center shadow-lg border border-solid border-white">
              Hello, I'm Manoj Rawat
            </h2>
            <p className="my-4 mx-2 text-white">
              I am a dedicated Web Developer with a passion for providing
              quality-based websites. My educational journey includes a 6 Month
              Diploma from <strong>Coding Bytes</strong>
            </p>
            </div>
            <div className="text-white border border-solid border-white rounded-xl mb-4 md:col-span-1">
              <h1 className="text-xl font-bold  bg-gray-700 text-white py-2 px-4 rounded-t-xl text-center shadow-lg border border-solid border-white">
                My Skills
              </h1>
              <ul className="ml-6 col-span-1">
                <div className="grid md:grid-cols-2 grid-cols-1">
                  <div className="col-span-1">
                    <li className="text-xl font-semibold my-2 underline">
                      Web Development:
                    </li>
                    <ul className="list-none ml-6 space-y-2">
                      <li className="flex items-center text-lg">
                        <span
                          className="mr-2"
                          role="img"
                          aria-label="Hand Emoji"
                        >
                          👉
                        </span>
                        HTML, CSS, JavaScript
                      </li>
                      <li className="flex items-center text-lg">
                        <span
                          className="mr-2"
                          role="img"
                          aria-label="Hand Emoji"
                        >
                          👉
                        </span>
                        React, Next.js
                      </li>
                      <li className="flex items-center text-lg">
                        <span
                          className="mr-2"
                          role="img"
                          aria-label="Hand Emoji"
                        >
                          👉
                        </span>
                        Django, Django Rest Framework
                      </li>
                      <li className="flex items-center text-lg">
                        <span
                          className="mr-2"
                          role="img"
                          aria-label="Hand Emoji"
                        >
                          👉
                        </span>
                        Node.js, Express.js
                      </li>
                      <li className="flex items-center text-lg">
                        <span
                          className="mr-2"
                          role="img"
                          aria-label="Hand Emoji"
                        >
                          👉
                        </span>
                        Tailwind CSS, Bootstrap
                      </li>
                    </ul>
                  </div>

                  <div>
                    <li className="text-xl font-semibold my-2 underline">
                      Programming Languages:
                    </li>
                    <ul className="list-disc ml-6 space-y-2">
                      <li className="flex items-center text-lg">
                        <span
                          className="mr-2"
                          role="img"
                          aria-label="Star Emoji"
                        >
                          ⭐️
                        </span>
                        Python
                      </li>
                      <li className="flex items-center text-lg">
                        <span
                          className="mr-2"
                          role="img"
                          aria-label="Star Emoji"
                        >
                          ⭐️
                        </span>
                        Java
                      </li>
                      <li className="flex items-center text-lg">
                        <span
                          className="mr-2"
                          role="img"
                          aria-label="Star Emoji"
                        >
                          ⭐️
                        </span>
                        C++
                      </li>
                    </ul>
                  </div>

                  <div>
                    <li className="text-xl font-semibold my-2  underline">
                      Other:
                    </li>

                    <ul className="list-disc ml-6 space-y-2">
                      <li className="flex items-center text-lg">
                        <span
                          className="mr-2"
                          role="img"
                          aria-label="Badge Emoji"
                        >
                          🏆
                        </span>
                        WordPress
                      </li>
                      <li className="flex items-center text-lg">
                        <span
                          className="mr-2"
                          role="img"
                          aria-label="Badge Emoji"
                        >
                          🏆
                        </span>
                        APIs, API Testing
                      </li>
                      <li className="flex items-center text-lg">
                        <span
                          className="mr-2"
                          role="img"
                          aria-label="Badge Emoji"
                        >
                          🏆
                        </span>
                        Version Control (Git)
                      </li>
                      <li className="flex items-center text-lg">
                        <span
                          className="mr-2"
                          role="img"
                          aria-label="Badge Emoji"
                        >
                          🏆
                        </span>
                        Problem Solving
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>

            <div className="text-white border border-solid border-white rounded-xl mb-4 md:col-span-2">
              <h1 className="text-xl font-bold  bg-gray-700 text-white py-2 px-4 rounded-t-xl text-center shadow-lg border border-solid border-white">
                My Experience
              </h1>
              <p className="mb-4 mx-2 text-center text-white">
                I have done one Internship at Simply2Cloud for 6 Months There I
                make Following Project
              </p>

              <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {my_projects?.map((element, index) => {
                  return <> <NavLink to={`/project/${element.id}`}><h4 className="font-bold text-center text-blue-500 hover:underline md:text-xl">   ⭐️ {element.title}</h4></NavLink></>
                })}
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAbout;
