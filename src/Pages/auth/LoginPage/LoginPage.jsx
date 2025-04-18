import React, { useContext, useEffect, useState } from "react";
import lotus from "../../../imgIc/logoImg/logo.jpg";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Navigate, NavLink } from "react-router-dom";
import { postRequest } from "../../../SelfModule/api/Apis";

const MyLogin = () => {

   

    return (
        <section className="gradient-form bg-neutral-200" style={{
            height: "calc(100vh - 4rem)"
        }}>
            <div className=" h-full px-10 py-2">
                <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 md:w-[55%] mx-auto">
                    <div className="w-full">
                        




                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyLogin;