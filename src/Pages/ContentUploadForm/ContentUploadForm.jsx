import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import generateInitialValue from "../../component/genrateInitalValues/genrateInitalValues";
import generateValidationSchema from "../../component/createValidationSchema/validationSchema";
import CustomBlackBtn from "../../component/Module/buttonLoader/Button/MyButton";
import { getAuthRequest, postAuthRequest, postRequest } from "../../SelfModule/api/Apis";
import { DataContext } from "../../context";
import { API_BASE_URL } from "../../config";
import CustomSelect from "../../component/Module/CustomSelect/CustomSelect";
import Select from "react-select";
import Loader from "../../component/Module/PageLoader/PageLoader";

const ContentUploadForm = ({ 
  fieldsArr, title, backend_route, num
 }) => {

  const initalValue = generateInitialValue(fieldsArr);
  const validationSchema = generateValidationSchema(fieldsArr);
  const [topicOption, setTopicOption] = useState([]);
  const { accessToken, getSessionFunc, getData } = useContext(DataContext);

  const dClName = ' border col-span-1 rounded-xl pl-4 w-full  border-gray-700 text-gray-900  focus:outline focus:outline-blue-600 focus:border-none';

  useEffect(() => {
    const fetchData = async () => {
      if (!accessToken) return;
      try {
        const data = await getAuthRequest('categories', accessToken);
        await getSessionFunc();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  if (!topicOption){
    return <Loader />
  }

  return (
    <div className=" md:pb-4 h-[95vh]">
      <div className="xl:w-[800px] px-10 pb-10 mx-auto bg-white rounded shadow-2xl border-2 border-t-0">
        <h1
          style={{
            color: 'rgb(72 0 255)'
          }}
          className="text-4xl font-extrabold text-center py-10 tracking-wide leading-tight underline">
          {title}
        </h1>

        <Formik initialValues={initalValue} validationSchema={validationSchema} onSubmit={async (values, { isSubmitting, setSubmitting,resetForm }) => {
          try{
            const newFormData = new FormData();
            Object.entries(values).forEach(([key, value]) => {
              newFormData.append(key, value);
            });
            newFormData.append('token', accessToken);
            newFormData.append('main_url', API_BASE_URL);
            await getSessionFunc();
            if (num == 1){
              await postAuthRequest(backend_route, values, accessToken, true, num);
            }
            if (num == 2){
              await postRequest(backend_route, newFormData, true, num);
            }
            // resetForm();
            setSubmitting(false);
          }
          catch(error){
            
          }
        }}>
          {({ isSubmitting, errors, touched, setFieldValue, values }) => (
            <Form encType="multipart/form-data">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {fieldsArr.map((e, i) => {
                  if (e.type == "dynamicselect") {
                    return <div className="col-span-2">
                      <div className="font-bold md:text-lg">{e.placeholder}</div>
                      <Select options={e.name == "topicId" ? topicOption.map(e=> ({label : e.title, value : e._id})) : e.option}
                      onChange={(selectedOptions)=>{
                        setFieldValue(e.name, selectedOptions.value);
                        // console.log(selectedOptions.value);
                        if (e.name == 'categorieId'){
                          getData(`question-form/${selectedOptions.value}`, setTopicOption);                          // console.log(topicOption);
                        }
                      }}
                        // setSelected={setFieldValue}
                        // selected={values[e.name]}
                        // nm={e.name}
                      />
                        <ErrorMessage name={e.name} component="div" className="text-red-500 text-sm" />
                    </div>
                  }
                  if (e.type === "file") {
                    return (
                      <div key={i} className="col-span-2 flex flex-col ">
                        {/* {e.placeholder} */}
                        <label
                          htmlFor={e.name}
                          className="border-2 border-dashed border-gray-300 rounded-lg p-4 w-full text-center cursor-pointer hover:bg-gray-100"
                        >
                          {values[e.name] ? (
                            <img
                              src={URL.createObjectURL(values[e.name])}
                              alt="Preview"
                              className="w-40 h-40 object-cover mx-auto rounded-lg"
                            />
                          ) : (
                            <p className="text-gray-600">📂 Click to upload or drag & drop</p>
                          )}
                        </label>
                        <input
                          id={e.name}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(event) => {
                            setFieldValue(e.name, event.target.files[0]);
                          }}
                        />
                        <ErrorMessage name={e.name} component="div" className="text-red-500 text-sm" />
                      </div>
                    );
                  }
                  if (e.type == "code") {
                    return <div className="flex flex-col col-span-2" key={i}>
                      <div className="">
                        <div className="font-bold md:text-lg">{e.placeholder}</div>
                        {/* <div className={dClName  + ""}> */}
                        <div
                          key={i}
                          contentEditable
                          className={dClName + ' inline-block overflow-auto  h-[4rem]'}
                          placeholder={e.placeholder}
                          name={e.name}

                          onInput={(event) => {
                            setFieldValue(e.name, event.target.innerHTML);
                          }}
                          dangerouslySetInnerHTML={{ __html: initalValue[e.name] || "" }}
                        />
                      </div>
                      <ErrorMessage
                        name={e.name}
                        render={(msg) => <div className="text-sm inline-block text-red-500">{msg}</div>}
                      />
                      {/* </div> */}
                    </div>
                  }
                  return <div
                    key={i}
                    className="flex flex-col col-span-2 " >
                    <div className="font-bold md:text-lg">{e.label ? e.label : e.placeholder}</div>
                    <Field
                      className={dClName + '  h-[2.5rem] inline-block ' + `${e.type == 'desc' ? 'h-[10rem]' : ' '}`}
                      placeholder={e.placeholder }
                      name={e.name}

                    />
                    <ErrorMessage
                      name={e.name}
                      render={(msg) => <div className="text-sm inline-block text-red-500">{msg}</div>}
                    />
                  </div>
                })}
                <div className="col-span-2">
                  <CustomBlackBtn isSubmitting={isSubmitting} btnText={"Upload Content"} color={"rgb(72 0 255)"} />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContentUploadForm;