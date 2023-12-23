import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div className="flex space-x-4 justify-center items-center my-4">
      <a href="https://www.linkedin.com/in/manoj-rawat-412804259" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="text-3xl text-blue-800 hover:text-blue-900" />
      </a>

      <a href="https://chat.whatsapp.com/BwYJPMeDZluFjTOy9rKKTb" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} className="text-3xl text-green-500 hover:text-green-700" />
      </a>

      <a href="https://www.instagram.com/bahi_munna2023" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="text-3xl text-pink-500 hover:text-pink-700" />
      </a>

      <a href="https://www.facebook.com/bahimunna2023" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className="text-3xl text-blue-600 hover:text-blue-800" />
      </a>
      
    </div>
  );
};

export default SocialIcons;
