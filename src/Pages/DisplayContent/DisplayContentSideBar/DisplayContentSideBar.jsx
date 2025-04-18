import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DisplayContentSidebar = ({ categories }) => {

    const { s_categories, topic } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <div className='shadow px-4 h-[85vh] border rounded mx-4 my-4 font-semibold'>
                <h1 className='text-xl font-bold text-center my-4'>Creative Tim</h1>
                <hr />
                {categories?.map((element) => {
                    return <div
                        onClick={() => { navigate(`/search/${element.label}/${element.value}`) }}
                        className={`my-2 text-start py-1 px-4 rounded cursor-pointer hover:bg-gray-800 hover:text-white ${element.label == s_categories ? 'bg-black text-white' : ''}`}>
                        {element.label}
                    </div>
                })}
                <div>
                    <button className='border border-black w-full rounded py-2'>Submit Review</button>
                </div>
                <div className='mt-4'>
                    <button className='border bg-black text-white w-full rounded py-2'>Contact Us</button>
                </div>
            </div>
        </>
    )
}

export default DisplayContentSidebar