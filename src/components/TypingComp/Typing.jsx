import React, { useState, useEffect } from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';

const TypingEffect = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">
      <Typewriter       
        words = {[ "Web Devlopment" , "Cyber Security", "Digital Marketing", "App Devlopment"]}
        loop = {true}
        typeSpeed= {50}
        deleteSpeed={50}
      />
      <Cursor />
      </h1>
    </div>
  );
};

export default TypingEffect;
