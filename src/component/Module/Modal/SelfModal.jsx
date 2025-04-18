import React from "react";
import Overlay from "../Overlay/Overlay";

const SelfModal = ({
  isItemOpen,
  setIsItemOpen,
  ModuleCompItem,
  setData = null,
  position = "center",
  width = "full",
}) => {
  return (
    <>
      <div
        style={{
          zIndex: 70,
        }}
        className="fixed top-0 "
      >
        {isItemOpen ? (
          <Overlay
            setIsItemOpen={setIsItemOpen}
            isItemOpen={isItemOpen}
          />
        ) : null}
      </div>
      <div
        className={`flex ${position == "end" ? "justify-end" : "justify-center items-center"}`}
      >
        <div className="fixed top-20 w-full md:w-[80%] xl:w-[50%]  z-[100]">
          {isItemOpen ? (
            <>
              <div className={`flex items-center justify-${position} `}>
                <div
                  className={`w-${width} mx-4 sm:mx-12 z-30 bg-white rounded-xl      overflow-auto flex items-center ${position == 'end' ? "h-[full]" : "h-[80vh]"}` }
                >
                  {setData == null ? <ModuleCompItem /> : <ModuleCompItem setData={setData} />}
                

                </div>
              </div>
            </>
          ) : null}
        </div>
  
      </div>
    </>
  );
};

export default SelfModal;
