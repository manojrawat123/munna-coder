import React, { useState } from 'react'

const Overlay = ({setIsItemOpen, isItemOpen}) => {

  const [ isOverlayOpen, setIsOverlayOpen ] = useState(isItemOpen);
  return (
    <>
      <div
        className={`${ isOverlayOpen ? '' : "hidden"}`}
        onClick={() => {
          setIsOverlayOpen(false);
          setIsItemOpen(false);
        }}
        style={{
          position: "fixed",
          top: "0rem",
          width: "100vw",
          height: "calc(100vh)",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}></div>
    </>
  )
}

export default Overlay  