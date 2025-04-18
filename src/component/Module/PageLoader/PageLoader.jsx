import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Blur Background */}
      <div className="absolute inset-0 "></div>

      {/* Spinning Circle Loader */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-transparent border-t-green-500 border-b-green-500 rounded-full animate-spin"></div>
        <div className="absolute w-10 h-10 bg-green-500 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default Loader;