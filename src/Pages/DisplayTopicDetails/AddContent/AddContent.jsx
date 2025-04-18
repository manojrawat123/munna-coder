import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { postAuthRequest } from "../../../SelfModule/api/Apis";
import { DataContext } from "../../../context";
import ButtonLoader from "../../../component/Module/buttonLoader/buttonLoader";
import SelfModal from "../../../component/Module/Modal/SelfModal";
import { useParams } from "react-router-dom";

const AddContent = ({ data, setData }) => {
    const [content, setContent] = useState('');
    const [mode, setMode] = useState('before');
    const { search_id } = useParams();
    const { getSessionFunc, accessToken } = useContext(DataContext);

    const handleToggle = (selectedMode) => {
        setMode(selectedMode);
    };

    const handleChange = (value) => {
        setContent(value);
    };

    const getCurrentContent = () => {
        // return mode === 'before' ? beforeContent : afterContent;
        return content;
    };

    const [button, setButton] = useState(false);

    const postData = async ()=>{
        setButton(true);
        await getSessionFunc();
        const result = postAuthRequest('add-topic-support', 
            { 
            desc : content, 
            topicId: search_id,
            insertAt : mode 
        }, accessToken);
        setButton(false);
        setData(result);
    }

    return (
        <>
        <div style={{ padding: '20px' }}>
            <div className="button-group" style={{ marginBottom: '15px' }}>
                <button
                    onClick={() => handleToggle('before')}
                    style={{
                        padding: '8px 16px',
                        marginRight: '10px',
                        backgroundColor: mode === 'before' ? '#007bff' : '#ccc',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px'
                    }}
                    >
                    Apply Before Content
                </button>
                <button
                    onClick={() => handleToggle('after')}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: mode === 'after' ? '#007bff' : '#ccc',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px'
                    }}
                    >
                    Apply After Content
                </button>
            </div>
            <ReactQuill
                theme="snow"
                value={getCurrentContent()}
                onChange={handleChange}
                modules={{
                    toolbar :  [[{ 'header': [1, 2, false] }],
                    ['bold', 'italic', 'underline'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'align': [] }], 
                    ['clean']  ]
                }}
                />

            <button className="w-full bg-black text-white py-2 px-4" onClick={()=> {
                postData();
            }}>{button ?  <ButtonLoader size="20px" />: "Add Content"}</button>
        </div>
            </>
    );
};

export default AddContent;