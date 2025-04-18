import { IoHomeSharp } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { GrPowerShutdown } from "react-icons/gr";


const cssClassLoginBtn = 'border border-green-500 rounded text-green-600 hover:text-white font-semibold hover:bg-green-700 px-4 py-2';
const cssClassUploadNotes = 'border bg-black rounded text-white font-semibold hover:shadow px-4 py-2';

const userProfileOpt =
    [
        {
            img: <GrPowerShutdown size={21} />, type: "btn", heading: "Logout", css: "bg-red-600 text-white py-2 ", link: "/materials/static"
        },
    ];

const uploadNotes = { link : null, lable : "Upload",css : cssClassUploadNotes }

const navArr = {
    allUser : [
        { link: '/', lable: "Home", ic: <IoHomeSharp size={21} /> },
        { link: '/search/HTML/67d7eefc531e54c7de47d3b8/', lable: "Notes", ic: <FaInfoCircle /> },
    ],

    user : [
        { link: 'profile', lable: <FaUserCircle size={21} color="orange" />, options: userProfileOpt },
    ],

    admin :  [
        {...uploadNotes},
        { link: 'profile', lable: <FaUserCircle size={21} color="orange" />, options: userProfileOpt },
    ],

    guest : [
        { link: 'register', lable: "Signup", ic: <IoMdLogIn size={21} /> },
        { link: 'login', cssClass: cssClassLoginBtn, lable: "Join" }
    ]
};



export default navArr;
