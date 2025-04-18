import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context';
import Loader from '../../component/Module/PageLoader/PageLoader';
import DisplayContentSidebar from './DisplayContentSideBar/DisplayContentSideBar';
import DisplayContentSection from './DisplayContentSection/DisplayContentSection';

const DisplayContent = () => {
    const { getCategoriesFunc, categories } = useContext(DataContext);
    useEffect(() => {
        getCategoriesFunc();
    }, [])

    if (!categories) {
        return <Loader />
    }


    return (
        <>
            <div className='grid grid-cols-4' style={{

            }}>
                <div>
                    <DisplayContentSidebar categories={categories} />
                </div>
                <div className='col-span-3'>
                 
                    <DisplayContentSection />
            
                </div>
            </div>
        </>
    )
}

export default DisplayContent