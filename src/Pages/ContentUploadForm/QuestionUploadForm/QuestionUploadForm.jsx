import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../../context'
import questionArr from './QuestionUploadArr';
import ContentUploadForm from '../ContentUploadForm';
import Loader from '../../../component/Module/PageLoader/PageLoader';

const QuestionUploadForm = () => {
    const { getData } = useContext(DataContext);
    const [categories, setCategories] = useState();

    useEffect(()=>{
        getData('question-form', setCategories);
    },[]);

    if (!categories){
        return <Loader />
    }
    const newQuestionArr = questionArr.map((e, i)=>{
        if (e.name == 'categorieId'){
            e["option"] = categories.map((c_e)=> ({label : c_e.name, value : c_e._id}));
        }
        if (e.name == 'topicId'){
            e['option'] = [];
        }
        return e;
    })
  return (
    <>
        <ContentUploadForm fieldsArr={newQuestionArr} title={"Upload Question"} backend_route={'upload-question'} key={1} num={1} />
    </>
)
}

export default QuestionUploadForm