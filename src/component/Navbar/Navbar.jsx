import React, { useContext, useEffect, useState } from 'react'
import LaptopNavbar from './LaptopNavbar/LaptopNavbar'
import PhoneNav from './PhoneNavbar/PhoneNav'
import SelfModal from '../Module/Modal/SelfModal';
import LoginItem from '../../pages/auth/LoginPage/LoginItem';
import { DataContext } from '../../context';
import registerItem from '../../pages/auth/RegisterPage/RegisterItem';
import navArr from './NavbarArr';
import { ToastContainer } from 'react-toastify';
import UploadContent from '../../ModelItems/UploadContent/UploadContent';

const Navbar = () => {
  const {
    isLoginPopUp,
    setIsLoginPopUp,
    registerPopUp,
    setRegisterPopUp,
    refreshToken,
    getSessionFunc,
    userInfo,
    setAskContentPost,
    askContentPost
  } = useContext(DataContext);

  const [updatedNavArr, setUpdatedNavArr] = useState([]);

  const updateNavArrFunc = () => {
    if (refreshToken && userInfo) {
      if (userInfo.user_type == 'admin') {
        setUpdatedNavArr([...navArr.allUser, ...navArr.admin]);
      }

      else {
        setUpdatedNavArr([...navArr.allUser, ...navArr.user])
      }
    }
    else {
      setUpdatedNavArr([...navArr.allUser, ...navArr.guest]);
    }
  }
  useEffect(() => {
    getSessionFunc();
    updateNavArrFunc();
    // console.log(userInfo);
  }, [refreshToken, userInfo?.user_type]);


  useEffect(() => { updateNavArrFunc }, [])
  return (
    <div >
      <ToastContainer />
      <SelfModal isItemOpen={isLoginPopUp} ModuleCompItem={LoginItem} setIsItemOpen={setIsLoginPopUp} />
      <SelfModal isItemOpen={askContentPost} ModuleCompItem={UploadContent} setIsItemOpen={setAskContentPost} />
      <SelfModal isItemOpen={registerPopUp} ModuleCompItem={registerItem} setIsItemOpen={setRegisterPopUp} />
      <div className='hidden xl:block'>
        <LaptopNavbar
          setIsLoginPopUp={setIsLoginPopUp}
          setRegisterPopUp={setRegisterPopUp}
          navArr={updatedNavArr}
        />
      </div>
      <div className='xl:hidden'>
        <PhoneNav
          setIsLoginPopUp={setIsLoginPopUp}
          setRegisterPopUp={setRegisterPopUp}
          navArr={updatedNavArr}
        />
      </div>
    </div>
  )
}

export default Navbar