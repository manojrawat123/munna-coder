import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const DisplayTopicDetailSidebar = ({categories, setAddContentModal}) => {
    const { categoery_id,topic_name } = useParams();
    const navigate = useNavigate();
    console.log(categories);
    return (
        <div className='shadow px-4 h-[75vh] border rounded mx-4 my-4 font-semibold'>
            <h1 className='t
            ext-xl font-bold text-center my-4'>Creative Tim</h1>
            <hr />
            {categories?.map((element) => {
                return <div
                    onClick={() => { navigate(`/topic-search/${topic_name}/${categoery_id}/${element._id}`) }}
                    className={`my-2 text-start py-1 px-4 rounded cursor-pointer hover:bg-gray-800 hover:text-white ${element.label == categoery_id ? 'bg-black text-white' : ''}`}>
                    {element.title.substring(0, 100)}
                </div>
            })}
            <div>
                <button className='border border-black w-full rounded py-2'>Submit Review</button>
            </div>
            <div className='mt-4'>
                <button
                onClick={()=>{
                    setAddContentModal(true);
                }}
                className='border bg-black text-white w-full rounded py-2'>Add More Content</button>
            </div>
        </div>
    )
}

export default DisplayTopicDetailSidebar