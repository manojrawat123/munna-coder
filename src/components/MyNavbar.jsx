import React, { useState } from "react";
import logo from "../images/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";
import { Close, Dehaze, DensityMedium } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";

const MyNavbar = () => {
  
  const [display, setdisplay] = useState("hidden");
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: "home", label: "Home", a: "" },
    { id: "project", label: "Projects", a: "/project" },
    { id: "contact", label: "Contact", a: "/contact" },
    { id: "about", label: "About", a: "/about" },
  ];

  return (
    <>
      <div className="text-white w-[100%] flex justify-center items-center col-span-12 h-[4rem] bg-gradient-to-r from-gray-700 via-gray-900 to-black pr-8">
        <div className="mr-auto ml-4">
          <img src={logo} className="h-[3rem] w-[3rem] rounded-[50%]" />
        </div>

        {/* Laptop Project */}
        <div className="hidden space-x-4 md:flex ml-auto text-[1rem] font-semibold mr-3 ">
          {navItems.map((element, index) => {
            
            return (
              <div className="" key={element.id}>
                <span>
                  <NavLink to={element.a}>{element.label}</NavLink>
                </span>
              </div>
            );
          })}
        </div>

        <div className="ml-auto md:hidden block text-white">
          <button
            type="button"
            onClick={() => {
              if (!menu) {
                setdisplay("h-[11rem]");
                setMenu(true);
              } else {
                setdisplay("h-[0rem]");
                setMenu(false);
              }
            }}
          >
            {menu ? <Close />   : <DensityMedium />} 
          </button>
        </div>
        <div
          className={
            `${display}` +
            " absolute z-10  text-center shadow-2xl overflow-hidden bg-white px-12 right-0 rounded-xl transition-height duration-500 top-[4rem] text-black"
          }
        >
          {/* Mobile DropDown Menu */}
          <div className="text-center">
            {navItems.map((element, index) => {
              return (
                <div key={index}>
                  <NavLink
                    to={element.a}
                    onClick={() => {
                      setdisplay("h-[0rem]");
                      setMenu(false);
                    }}
                  >
                    <div className=" underline font-bold my-4">
                      {element.label}{" "}
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyNavbar;
