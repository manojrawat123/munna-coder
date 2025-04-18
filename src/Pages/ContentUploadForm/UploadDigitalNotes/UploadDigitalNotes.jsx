import React, { useContext, useEffect } from 'react';
import ContentUploadForm from '../ContentUploadForm';
import digitalNotesArr from './digitalNotesArr';
import { DataContext } from '../../../context';
import Loader from '../../../component/Module/PageLoader/PageLoader';


const uploadDigitalNotes = () => {
    // fieldsArr={topicArr} 

    const {
        getCategoriesFunc,
        categories
    } = useContext(DataContext);

    useEffect(() => {
        getCategoriesFunc();
    }, []);

    if (!categories) {
        return <Loader />
    }

    else {
        digitalNotesArr.forEach((element) => {
            if (element.name == 'categories') {
                element['option'] = categories;
            }
        });
    }

    return <>
        <ContentUploadForm fieldsArr={digitalNotesArr} title={"Upload Topic"} backend_route={'uploadDigitalNotes'} key={1} num={1}/>
    </>
}

export default uploadDigitalNotes;