import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { postRequest } from "../../../SelfModule/api/Apis";
import registerArr from "./registerArr";
import generateValidationSchema from "../../../component/createValidationSchema/validationSchema";
import generateInitialValue from "../../../component/genrateInitalValues/genrateInitalValues";
import GoogleSignInButton from "../../../component/googleSignInButton/GoogleSignInButton";
import { NavLink } from "react-router-dom";

const Register = () => {
  const initialValues = generateInitialValue(registerArr);
  const validationSchema = generateValidationSchema(registerArr);

  const handleSubmit = async (values, { setSubmitting }) => {
    const data = await postRequest("register", values);
    console.log(data);
    setSubmitting(false);
  };

  return (
    <section className="gradient-form  bg-neutral-200" style={
      {
        height : "calc(100vh - 4rem)"
      }
    }>
      <div className="h-full px-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 md:w-[90vw] mx-auto">
          
        </div>
      </div>
    </section>
  );
};

export default Register;
