import React, { useEffect } from 'react'
import HomePageLap from './HomePageLap'
import HomePagePhone from './HomePagePhone'
import axios from 'axios'
import { API_BASE_URL } from '../../config'

const HomePage = () => {

  const userTracerFunc = ()=>{
    axios.get("https://api.ipify.org").then((value)=>{
      axios.post(`${API_BASE_URL}/visitor/`, {
        sup_id_adress: value.data,
        website_accessed: "User Found"
      }).then((response)=>{

      }).catch((err)=>{
        
      })
    }).catch((err)=>{
      console.log(err);
      axios.post(`${API_BASE_URL}/visitor/`, {
        website_accessed: "User Found"
      }).then((response)=>{
        
      }).catch((err)=>{
        axios.post(`${API_BASE_URL}/visitor/`, {
          website_accessed: "User Found"
        })
      })
    })
  }

  useEffect(()=>{
    userTracerFunc();
  },[])



  return (
    <>
    <div className='hidden md:block'>
    <HomePageLap />
    </div>
    <div className='md:hidden block'>
    <HomePagePhone />
    </div>
    </>
  )
}

export default HomePage