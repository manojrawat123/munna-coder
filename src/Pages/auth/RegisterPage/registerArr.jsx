import { FaLock } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const registerArr = [
    { required : true ,type: "text", placeholder: "Enter your Email", name: "email", icon: <MdEmail size={23}/>, label : "Email" },
    // { required : true, type: "text", placeholder: "Enter your Name", name: "username", icon: <FaUserCircle size={23}/>, label : "Username" },
    { required : true ,type: "password", placeholder: "Enter your password", name: "password", icon: <FaLock size={23}/> , label: "Password"},
    { required : true ,type: "password", placeholder: "Enter your confirm password", name: "password2", icon: <FaLock size={23}/>, label : "Confirm Password" }
];

export default registerArr;