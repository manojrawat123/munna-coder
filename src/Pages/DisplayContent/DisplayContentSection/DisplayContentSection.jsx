import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DataContext } from '../../../context';
import Loader from '../../../component/Module/PageLoader/PageLoader';

const DisplayContentSection = () => {
    const [content, setContent] = useState();
    const {
        s_categories,
        search_id
    } = useParams();

    const { getData } = useContext(DataContext);
    
    useEffect(() => {
        setContent();
        getData(`get-topic/${search_id}`, setContent);
    }, [search_id]);
    // console.log(s_categories);
    
    const navigate = useNavigate();

    if (!content) {
        return <Loader />
    }
    // console.log(content);

    return (
        <div className='shadow  h-[80vh] border rounded mx-4 my-4 font-semibold'>
            <div className='grid grid-cols-3 text-center font-bold text-white underline'>
                <div className='bg-gray-800 cursor-pointer py-2 underline'>Topics</div>
                <div className='text-gray-800 cursor-pointer bg-gray-200  py-2 underline'>Question</div>
                <div className='text-gray-800 cursor-pointer bg-gray-200  py-2 underline'>Project</div>
            </div>

            <div className='grid  px-4'>
                {content?.map((element, index) => {
                    return (
                        <div
                        key={element?._id}
                        onClick={()=>{
                            navigate(`/topic-search/${s_categories}/${search_id}/${element?._id}`)
                        }}
                        className='cursor-pointer shadow-4xl border border-slate-200  py-2 px-4 mx-4 my-2 rounded bg-slate-100'>
                           {index + 1}. {element.title}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DisplayContentSection