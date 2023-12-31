import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgress } from "@mui/material";
import SocialIcons from "../../components/SocialMedia/SocialMedia";
import { ArrowBack } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { API_BASE_URL } from "../../config";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.number().required("Phone Number is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="min-h-screen text-gray-800 bg-image-container pb-12 ">

      <h1 className="text-center font-bold text-base md:text-3xl text-white flex py-3 bg-black">
          <div className="mr-auto ml-4">
            <NavLink to={"/"}>
              <ArrowBack />
            </NavLink>
          </div>

          <div className="mr-auto">Contact Me</div>
        </h1>
        <SocialIcons />
        <ToastContainer />
        <div className="gap-4 md:mx-[15rem]">
          <div className="px-3  rounded-xl border-2 border-solid mx-4 py-4">
            <h1 className="text-2xl font-bold text-center bg-gray-200 px-4 py-2 rounded-xl">
              Contact Us
            </h1>
            <br />
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setIsLoading(true);
                axios
                  .post(`${API_BASE_URL}/contact/`, {
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    message: values.message,
                  })
                  .then((res) => {
                    console.log(res);
                    toast.success(
                      `Hii ${values.name} Message send Sucessfully We will contact you at your contact number ${values.phone}`,
                      {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 20000,
                      }
                    );
                    resetForm();
                    setIsLoading(false);
                  })
                  .catch((err) => {
                    console.log(err);
                    toast.error(`Some Error Occured`, {
                      position: toast.POSITION.TOP_CENTER,
                      autoClose: 20000,
                    });
                    setIsLoading(false);
                  });
                setSubmitting(false);
              }}
            >
              <Form>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2 text-white"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="appearance-none border border-solid border-gray-900 focus:border-green-500 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2 text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="appearance-none border border-solid border-gray-900 focus:border-green-500 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2 text-white"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <Field
                    type="number"
                    name="phone"
                    placeholder="Enter your Phone Number"
                    className="appearance-none border border-solid border-gray-900 focus:border-green-500 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-sm font-bold mb-2 text-white"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Send Message"
                    className="shadow appearance-none border border-solid border-gray-900 focus:border-green-500 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="border border-solid border-blue-500  hover:bg-blue-700  hover:text-white text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    {isLoading ? (
                      <>
                        &nbsp;&nbsp;&nbsp;{" "}
                        <CircularProgress color="inherit" size={19} />
                        &nbsp;&nbsp;&nbsp;
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
