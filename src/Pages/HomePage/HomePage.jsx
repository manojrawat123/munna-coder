import React from 'react'
import HomePageLap from './HomePageLap'
import HomePagePhone from './HomePagePhone'

const HomePage = () => {
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