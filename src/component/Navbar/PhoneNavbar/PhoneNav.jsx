import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import DownArrow from "../../../imgIc/DownArrow";
import GoogleSignInButton from '../../googleSignInButton/GoogleSignInButton';
import Overlay from '../../Module/Overlay/Overlay';
import SelfModal from '../../Module/Modal/SelfModal';
import LoginItem from '../../../pages/auth/LoginPage/LoginItem';


const PhoneNav = ({setIsLoginPopUp, setRegisterPopUp, navArr }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
 <div
        className={`${isMenuOpen ? '' : "hidden"}`}
        onClick={() => setIsMenuOpen(false)}
        style={{
          position: "fixed",
          top: "0rem",
          width: "100vw",
          height: "calc(100vh)",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: "70"
        }}></div>
     
      <div>


        <div
          style={{
            transition: 'all 0.3s linear'
          }}
          className={` p-10 fixed top-0 h-[100vh] gap-4 bg-white w-[80vw] flex flex-col z-[1000] ${isMenuOpen == true ? 'left-0' : '-left-[80vw]'}`}
        >

          {navArr.map((el, index) => {
            if (el.link == 'login') return;
            else {
              return (<div key={index}> {el.options == undefined ? <NavLink to={el.link}><div key={index} className='items-center flex gap-4 border border-solid border-gray-100   text-gray-800 font-bold hover:bg-gray-100 p-3 rounded '>
                {el.ic} {el.lable}
              </div></NavLink> :
                <div className='border border-solid border-gray-100  flex justify-between text-gray-800 font-bold hover:bg-gray-100 p-3 rounded cursor-pointer'>
                  <button className='flex gap-4 items-center'>{el.ic} {el.lable} </button>
                  <DownArrow />
                </div>
              } </div>)
            }
          }
          )}
          <div>
            <button className='bg-green-600 text-white w-full py-2 rounded font-semibold'>Login Now</button>
          </div>
          <div>
            <button style={{
              padding: '10px 30px 10px 30px',
              border: '1px solid green',
              borderRadius: '4px',
              backgroundColor: 'black',
              fontSize: '16px',
              fontWeight: '600',
              color: 'white',
              cursor: 'pointer'
            }} className='w-full'>

              Join Us
            </button>
          </div>

          <GoogleSignInButton />

        </div>
        <div className='flex justify-between shadow p-4 items-center fixed top-0 w-[100vw] h-[4rem] '>
          <div className=''>
            <button onClick={() => setIsMenuOpen(true)}>
              <FaBars size={29} />
            </button>
          </div>
          <div className="font-bold text-2xl text-gray-700 italic">
            <h1 className=" rounded-full inline-block">
              Mannoj <span className="text-green-500">*</span>
            </h1>
          </div>
          <div className=''>
            <button
              onClick={() => { setIsLoginPopUp(true) }}
              className='border border-green-500 rounded text-green-600 hover:text-white font-semibold hover:bg-green-700 px-4 py-2'>Join</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default PhoneNav