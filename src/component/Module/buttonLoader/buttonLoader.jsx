import React from 'react';
import "./loaderCss.css";

const ButtonLoader = ({size = "22px", color="blue-500"}) => {
  return (
        <button 
        id='loading-btn'
        className={``} style={{
          height : size,
          width : size
        }}> </button>
  )
}

export default ButtonLoader