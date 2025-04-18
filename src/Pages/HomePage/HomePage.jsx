import React, { useContext, useEffect, useState } from 'react'
import WelcomePage from './HomeSection/WelcomePage';
import SliderService from './SliderSection/SliderService';
import ChatbotItem from '../../component/Chatbot/Chatbot';
import { getAuthRequest, getRequest } from '../../SelfModule/api/Apis';
import { DataContext } from '../../context';
import Loader from '../../component/Module/PageLoader/PageLoader';

const HomePage = () => {
  const [suggetion, setSuggetions] = useState();
  const [search, setSearch] = useState();
  const { getDataParams } = useContext(DataContext);

  useEffect(() => {
    getDataParams('search', setSuggetions, { search: search });
  }, [search]);

  if (!suggetion) {
    return <Loader />
  }
  return (
    <>
      <WelcomePage data={suggetion} setSearch={setSearch} search={search} />
      <SliderService />
    </>
  );
}

export default HomePage