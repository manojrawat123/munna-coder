import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context';
import { useParams } from 'react-router-dom';
import DisplayContentSidebar from '../DisplayContent/DisplayContentSideBar/DisplayContentSideBar';
import DisplayTopicDetailSidebar from './DisplayTopicSidebar/DisplayTopicDetailsSidebar';
import DisplayTopicDetailContent from './DisplayTopicDetailsContent/DisplayTopicDetailContent';
import Loader from '../../component/Module/PageLoader/PageLoader';
import SelfModal from '../../component/Module/Modal/SelfModal';
import AddContent from './AddContent/AddContent';

const DisplayTopicDetails = () => {

  const [content, setContent] = useState();
  const [addContentModal, setAddContentModal] = useState(false);

  const {
    categoery_id,
    topic_name
  } = useParams();

  const { getData } = useContext(DataContext);
  const [data, setData] = useState();

  useEffect(() => {
    setContent();
    getData(`get-topic/${categoery_id}`, setContent);
  }, [categoery_id]);

  if (!content) {
    return <Loader />
  }

  


  return (
    <>
        <SelfModal
                ModuleCompItem={AddContent}
                isItemOpen={addContentModal}
                setIsItemOpen={setAddContentModal}
                setData={setData}
            />
            
      <div className='grid grid-cols-4 h-[75vh]' style={{

      }}>


        {
        }
        <div>
          <DisplayTopicDetailSidebar categories={content} setAddContentModal={setAddContentModal}/>
        </div>
        <div className='col-span-3'>
          
          <DisplayTopicDetailContent data={data} setData={setData} />
        </div>
      </div>
    </>
  )
}

export default DisplayTopicDetails