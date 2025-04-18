import React, { useEffect, useState } from 'react'
import ContentUploadForm from '../ContentUploadForm'
import topicArr from './TopicsArr'
import Loader from '../../../component/Module/PageLoader/PageLoader';
import { getRequest } from '../../../SelfModule/api/Apis';

const UploadTopicForm = () => {

  const [suggetion, setSuggetions] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRequest('categories');
        setSuggetions(data);
        topicArr.map((e, i) => {
          if (e.name == "categories") {
            e['option'] = data.data.map((element, index) => {
              return {
                label: element.name,
                value: element._id
              }
            });
            return e;
          }
          else {
            return e;
          }
        });
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [suggetion?.status]);

  if (!suggetion) {
    return <Loader />
  }
  return (
    <>
      <ContentUploadForm fieldsArr={topicArr} title={"Upload Topic"} backend_route={'upload'} key={1} num={2} />
    </>
  )
}

export default UploadTopicForm