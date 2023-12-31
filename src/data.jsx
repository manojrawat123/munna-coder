import axios from "axios";


const dummyProjects = [
    {
      id: 1,
      image: 'path/to/project1.jpg',
      projectName: 'Project One',
      title: 'Title for Project One',
      desc: 'Description for Project One',
      author: 'Author One',
    },
    {
      id: 2,
      image: 'path/to/project2.jpg',
      projectName: 'Project Two',
      title: 'Title for Project Two',
      desc: 'Description for Project Two',
      author: 'Author Two',
    },
    {
      id: 3,
      image: 'path/to/project3.jpg',
      projectName: 'Project Three',
      title: 'Title for Project Three',
      desc: 'Description for Project Three',
      author: 'Author Three',
    },
  ];
  
  export default dummyProjects;
  


  const steps = [
    {
      id: "0",
      message: "Hello I am A.I assistant of Manoj Rawat. My Name is Munnabot.",
      trigger: "1"
    },
    {
      id: "1",
      message: "Please tell me your name",
      trigger: "name"
    },
    {
      id: "name",
      user: true,
      trigger: "3"
    },	
    {
      id: "3",
      message: 'Hello, {previousValue}! Please select your gender',
      trigger: "gender"
    },
    {
      id: "gender",
      options: [
        { value: 'male', label: 'Male', trigger: '5' },
        { value: 'female', label: 'Female', trigger: '5' },
        { value: 'other', label: 'Other', trigger: '5' },
      ],
    },
    {
      id: "5",
      message:"Please Provide me your contact number",
      trigger: "phone"
    },
    
    {
      id: "phone",
      user: true,
      validator: (value) => {
        // Regular expression to validate phone number with digits and optional plus/hyphen
        const phonePattern = /^[+0-9-]+$/;
        
        if (value.match(phonePattern)) {
          return true;
        } else {
          return 'Please enter a valid phone number.';
        }
      },
      trigger: "7"
    },
    {
      id: "7",
      message: "Do you want to give your Email Id",
      trigger: "8"
    },
    {
      id: "8",
      options: [
        { value: 'yes', label: 'Yes', trigger: '9' },
        { value: 'no', label: 'No', trigger: '11' },
      ],
    },
    {
      id: "9",
      message: "Enter your email Id",
      trigger: "email"
    },
    
    {
      id: "email",
      user: true,
      validator: (value) => {
        // Regular expression to validate email address
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (value.match(emailPattern)) {
          return true;
        } else {
          return 'Please enter a valid email address.';
        }
      },
      trigger: "11"
    },
    {
      id: "11",
      message: "Plese tell me which Type of service you want to purchase from us.",
     trigger: "service"
    },
    {
      id: "service",
      options: [
        { value: 'Website', label: 'Web Devlopment', trigger: '13' },
        { value: 'Digital Marketing', label: 'Digital Marketing', trigger: '13' },
        { value: 'Hacking', label: 'Hacking', trigger: '13' },
        { value: 'App Devlopment', label: 'App Devlopment', trigger: '13' },
      ],
    },
    {
      id: "13",
      message: "Thankyou for show your intrest.",
     trigger: "14"
    },
    
    {
      id: "14",
      message: "Manoj Sir will Contact you later.",
      // end: true
      trigger: "postUserData"
    },
    {
      id: "postUserData",
      component: (
        <div>
          {/* You can display a message or loading spinner here */}
          Data Updated
        </div>
      ),
      end: true
    }
     
  ];

  
  export { steps };