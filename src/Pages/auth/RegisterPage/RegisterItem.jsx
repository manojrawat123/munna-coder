import React, { useContext, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { postRequest } from "../../../SelfModule/api/Apis";
import registerArr from "./registerArr";
import generateValidationSchema from "../../../component/createValidationSchema/validationSchema";
import generateInitialValue from "../../../component/genrateInitalValues/genrateInitalValues";
import GoogleSignInButton from "../../../component/googleSignInButton/GoogleSignInButton";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../../context";
import ButtonLoader from "../../../component/Module/buttonLoader/buttonLoader";
import { toast, ToastContainer } from "react-toastify";

const registerItem = () => {

  const initialValues = generateInitialValue(registerArr);
  const validationSchema = generateValidationSchema(registerArr);
  const {
    setIsLoginPopUp,
    setRegisterPopUp
  } = useContext(DataContext);
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const data = await postRequest("register", values);
      if (data.message) setRegisterPopUp(false);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <div className=" h-auto relative mx-auto w-full  bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      {/* <ToastContainer /> */}
      <div className="w-full">
        <div className="text-center my-8">
          <h1 className="md:text-4xl sm:text-2xl text-xl font-bold text-gray-900">Sign Up</h1>
          <p className="mt-2 text-gray-500 font-bold md:text-xl">
            Sign up below to create your account
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              {registerArr?.map((field, index) => (
                <div className="relative my-4" key={index}>
                  <Field
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    placeholder={field.placeholder}
                    autoCompleate={"off"}
                    className={`${errors[field.name] && touched[field.name] ? 'border-red-600' : ''} border-2 rounded text-gray-900
                           mt-1 w-full pl-9 border-gray-300 px-0 py-1  focus:outline-none h-[2.4rem]`
                    }
                  />
                  <span className="absolute top-[13px] left-[10px]">
                    {field.icon}
                  </span>
                  <div className="absolute top-[2.7rem]">
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </div>
                </div>
              ))}
              {/* Submit button */}
              <div className="my-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-black px-3 py-2 text-white focus:bg-gray-600 focus:outline-none"
                >
                  {isSubmitting ? <ButtonLoader /> : "Register"}
                </button>
              </div>
              <hr className="my-4" />
              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <button
                  onClick={() => {
                    setRegisterPopUp(false);
                    setIsLoginPopUp(true);
                  }}
                  className="font-semibold text-blue-600 underline focus:text-blue-800 focus:outline-none">
                  Sign in .
                </button>
              </p>
            </Form>
          )}
        </Formik>
        {/* <GoogleSignInButton /> */}
      </div>
    </div>
  );
};

export default registerItem;
