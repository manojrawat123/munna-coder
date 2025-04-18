import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../../context';
import { useParams } from 'react-router-dom';
import Loader from '../../../component/Module/PageLoader/PageLoader';
import SelfModal from '../../../component/Module/Modal/SelfModal';
import AddContent from '../AddContent/AddContent';
import DOMPurify from 'dompurify';

const DisplayTopicDetailContent = ({ data, setData }) => {
    const {
        getData
    } = useContext(DataContext);

    const { search_id, topic_name } = useParams();
    const [copyText, setCopyText] = useState("Copy");

    useEffect(() => {
        setData();
        getData(`get-topic-by-id/${search_id}`, setData);
    }, [search_id]);

    if (!data) {
        return <Loader />
    }

    return (
        <>
            <div className='h-[80vh] border rounded mx-4 my-4 font-semibold  overflow-auto shadow-xl'>
                <h1 className='bg-gray-200 text-2xl shadow-xl  text-start font-bold  text-gray-800  py-4 px-4  '>{data?.title}</h1>
                <div className='p-4'>
                {
                    data?.beforeContent?.map((beforeEl, beforeIndex) => {
                        return (
                            <div
                                className="rich-text-content my-4"
                                key={beforeIndex}
                                style={{ whiteSpace: 'pre-wrap' }} // optional style to preserve formatting
                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(beforeEl.desc) }} />
                        )
                    })
                }
                <div className='bg-gray-900 flex text-white py-2 px-4 rounded-t'>
                    <span>{topic_name}</span>
                    <button className='ml-auto text-xs' onClick={() => {
                        navigator.clipboard.writeText(data?.desc);
                        setCopyText("Copied ")
                        setTimeout(() => {
                            setCopyText("Copy ")
                        }, 3000);
                    }}>{copyText}</button>
                </div>
                <div className='bg-[#1f1f1f] pb-4 px-4'>
                    <div
                        className=''
                        style={{ whiteSpace: 'pre-wrap' }} // optional style to preserve formatting
                        dangerouslySetInnerHTML={{ __html: data?.desc }}>
                    </div>
                </div>
                <div>
                    <h1 className='text-4xl  underline my-4'>Output</h1>

                    <img src={data?.mediaUrl} alt="" className='border-2' />
                </div>
                {
                    data?.afterContent?.map((beforeEl, beforeIndex) => {
                        return (
                            <div
                                className="rich-text-content my-4"
                                key={beforeIndex}
                                style={{ whiteSpace: 'pre-wrap' }} // optional style to preserve formatting
                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(beforeEl.desc) }} />
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}

export default DisplayTopicDetailContent