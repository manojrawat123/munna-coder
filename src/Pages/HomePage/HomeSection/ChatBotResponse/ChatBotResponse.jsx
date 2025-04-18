import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../../../context';
import Loader from '../../../../component/Module/PageLoader/PageLoader';
import { data } from 'autoprefixer';
import DOMPurify from 'dompurify';

const ChatBotResponse = ({ steps }) => {
    const [response, setResponse] = useState();
    const { munnaBotFunc, chatBotResponse } = useContext(DataContext);

    useEffect(() => {
        munnaBotFunc(steps?.user_prompt.message, setResponse);
    }, []);

    if (!response) {
        return <Loader />
    }

    return (
        <div className='w-[96%] overflow-y-auto'>
            {console.log(response)}
            {response.from_word_doc ?
                <div  >
                    <h1 className='text-2xl font-bold'>{response?.data?.title}</h1>

                    

                    <div className='mt-5'>
                        <a href={response?.data.mediaUrl} className='border border-blue-600 rounded text-blue-600 font-bold px-4 py-2'>Read More</a>
                    </div>
                </div>

                : response?.from_topic ? <>
                    <div>
                        {
                            response?.data?.beforeContent?.map((beforeEl, beforeIndex) => {
                                return (
                                    <div
                                        className="rich-text-content"
                                        key={beforeIndex}
                                        style={{ whiteSpace: 'pre-wrap' }} // optional style to preserve formatting
                                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(beforeEl.desc) }} />
                                )
                            })
                        }
                        <div>
                            <h1 className='text-2xl font-bold'>{response?.data?.title}</h1>
                            <div className='bg-gray-900 flex text-white py-2 px-4 rounded-t'>
                        <span>{response?.data?.title}</span>
                        <button className='ml-auto text-xs' onClick={() => {
                            // navigator.clipboard.writeText(data?.desc);
                            // setCopyText("Copied ")
                            // setTimeout(() => {
                            //     setCopyText("Copy ")
                            // }, 3000);
                        }}>{"Copy"}</button>
                    </div>
                    <div className='bg-[#1f1f1f] pb-4 px-4 overflow-x-auto w-full'>
                        <div
                            className=''
                            style={{ whiteSpace: 'pre-wrap' }} // optional style to preserve formatting
                            dangerouslySetInnerHTML={{ __html: response?.data.desc }}>
                        </div>
                    </div>
                            <h1 className='text-3xl mt-4  underline'>Output</h1>
                            <div className='mt-5'>
                                <img src={response?.data?.mediaUrl} className='border border-blue-600 rounded text-blue-600 font-bold px-4 py-2' />
                            </div>
                        </div>
                    </div>

                </> : "Sorry I cannot understand your prompt"}
        </div>
    )
}

export default ChatBotResponse