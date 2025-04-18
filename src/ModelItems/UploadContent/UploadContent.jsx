import React, { useContext, useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context';

const UploadContent = () => {
    const options = [
        { id: 1, label: "Add Today Lecture Content" , link : "notes_upload" },
        { id: 2, label: "Add Questions & Solutions" , link : "upload_question" },
        { id: 3, label: "Add Project" , link : "notes_upload" },
        { id: 4, label: "Upload Handwritten Notes" , link : "notes_upload" },
        { id: 5, label: "Upload Digital Notes" , link : "digital_notes" },
    ];

    const [nextLink,  setNextLink] = useState('notes_upload');
    const { setAskContentPost } = useContext(DataContext);
    const navigate = useNavigate();
    return (
        <>
            <div className="block rounded-lg bg-gray-200  dark:bg-neutral-800 shadow-xl m-4 w-full h-[90%]">

                <h1 className='text-purple-600 text-center text-4xl mt-8 font-bold underline'>Upload Content</h1>
                {/* <ToastContainer /> */}
                <div className="px-4 md:px-0">
                    <div className="md:mx-6 p-2 md:p-12">
                        <form>
                            {/* Username input */}
                            <div className="relative my-4" data-te-input-wrapper-init>
                                <select
                                    id="username"
                                    name="username"
                                    required
                                    className=" border border-gray-300 outline-none peer  block min-h-[auto] w-full pl-9 bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:border-orange-600  focus:border rounded"
                                    placeholder="Select Type of content"
                                onChange={(e) => setNextLink(e.target.value)}                                >
                                    {options.map((element, index) => <option 
                                    value={element.link}
                                    className={index == options.length - 1 ? 'rounded-b bg-black text-white' : ''}>{element.label}</option>)}
                                </select>
                                <span className="absolute top-[8px] left-[8px] ">
                                    <MdEmail size={25} />
                                </span>
                            </div>
                            {/* Password input */}
                            <div className=" pb-1 pt-1 text-center">
                                <button
                                    className={`mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
                                    type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    style={{
                                        background: "black",
                                    }}
                                    onClick={()=>{
                                        navigate(nextLink);
                                        setAskContentPost(false);
                                    }}
                                >
                                    {"Continue"}
                                </button>
                            </div>
                        </form>
                        <hr />

                        <div className='text-center'>Terms and Service <a href="" className='mt-auto text-blue-600 underline'>Privicy Policy</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadContent    
