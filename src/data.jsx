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
      trigger: "2"
    },
    {
      id: "2",
      user: true,
      trigger: "3"
    },	
    {
      id: "3",
      message: 'Hello, {previousValue}! Please select your gender',
      trigger: "4"
    },
    {
      id: "4",
      options: [
        { value: 'male', label: 'Male', trigger: '5' },
        { value: 'female', label: 'Female', trigger: '5' },
        { value: 'other', label: 'Other', trigger: '5' },
      ],
    },
    {
      id: "5",
      message:"Please Provide me your contact number",
      trigger: "6"
    },
    
    {
      id: "6",
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
      trigger: "10"
    },
    
    {
      id: "10",
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
     trigger: "12"
    },
    {
      id: "12",
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
      end: true
    },
  //   {
  //     id: "13",
  //     component: <></>,
  //     asMessage: false,
  //     trigger: "18"
  //   },
  //   {
  //     id: "18",
  //     component: <></>,
  //     asMessage: false,
  //     trigger: "19"
  
  //   },
  //   {
  //     id: "19",
  //     component: <></>,
  //     asMessage: false,
  //     trigger: "20"
  
  //   },
  //   {
  //     id: "20",
  //     component: <></>,
  //     asMessage: false,
  //     trigger: "21"
  
  //   },
  //   {
  //     id: "21",
  //     message: "Do you want to update any field",
  //     trigger: "22"
  
  //   },
  //   {
  //     id: "22",
  //     options: [
  //       { value: 'yes', label: 'Yes', trigger: '23' },
  //       { value: 'no', label: 'No', trigger: 'end-message' },
  //     ],
  //     trigger: "23"
  
  //   },
  //   {
  //     id: "23",
  //     message: "Which document you want to update",
  //     trigger: "24"
  
  //   },
    
  //   {
  //     id: "24",
  //     options: [
  //       { value: 'Pancard', label: 'Pancard', trigger: 'panUp' },
  //       { value: 'Gst', label: 'Gst', trigger: 'gstUp' },
  //       { value: 'Company', label: 'Company', trigger: 'companyUp' },
  //       { value: 'Other', label: 'Other', trigger: 'otherUp' },
  //     ],
  
  //   },
  
  
  //   // This is Pancard Update
  //   {
  //     id: "panUp",
  //     message: "Plese Submit your PAN Card photo",
  //     trigger: "pan1"
  //   },
  // 	{
  //     id: "pan1",
  //     component: <></>,
  //     asMessage: false,
  //     trigger: "pan2"
  //   },
  // 	{
  //     id: "pan2",
  //     user: true,
  //     validator: (value) => {
  //       if ((value !== "")) {
  //         return 'Plese Upload file';
  //       }
  //       else if(value === ""){
  //         return 'Plese Upload file'
  //       }
  //       return true;
  //     },
  //     trigger: "13"
  //   },
  //   // This is pan UPdate end
  
  //   // Gst Update
  //   {
  //     id: "gstUp",
  //     message: "Plese enter your Gst Card Photo",
  //     trigger: "gst1"
  //   },
  //   {
  //     id: "gst1",
  //     component: <></>,
  //     asMessage: false,
  //     trigger: "gst2"
  //   },
  // 	{
  //     id: "gst2",
  //     user: true,
  //     validator: (value) => {
  //       if ((value !== "")) {
  //         return 'Plese Upload file';
  //       }
  //       else if(value === ""){
  //         return 'Plese Upload file'
  //       }
  //       return true;
  //     },
  //     trigger: "13"
  //   },
  // // Gst File end
  
  // // Company File Upload
  // {
  //   id: "companyUp",
  //   message: "Plese enter your Gst Card Photo",
  //   trigger: "company1"
  // },
  // {
  //   id: "company1",
  //   component: <></>,
  //   asMessage: false,
  //   trigger: "company2"
  // },
  // {
  //   id: "company2",
  //   user: true,
  //   validator: (value) => {
  //     if ((value !== "")) {
  //       return 'Plese Upload file';
  //     }
  //     else if(value === ""){
  //       return 'Plese Upload file'
  //     }
  //     return true;
  //   },
  //   trigger: "13"
  // },
  // // Company File end
  
  // // Other File Upload
  // {
  //   id: "otherUp",
  //   message: "Plese upload Other Document",
  //   trigger: "other1"
  // },
  // 	{
  //     id: "other1",
  //     component: <></>,
  //     asMessage: false,
  //     trigger: "other2"
  //   },
  // 	{
  //     id: "other2",
  //     user: true,
  //     validator: (value) => {
  //       if ((value !== "")) {
  //         return 'Plese Upload file';
  //       }
  //       else if(value === ""){
  //         return 'Plese Upload file'
  //       }
  //       return true;
  //     },
  //     trigger: "13"
  //   },
  // // Other Details end
  //   {
  //     id: "end-message",
  //     message: "Are you sure you want to Save Data",
  //     trigger: "confirm-update"
  //   },
  //   {
  //     id: "confirm-update",
  //    options: [
  //     { value: 'ConfirmUp', label: 'Yes', trigger: 'update' },
  //     { value: 'Noup', label: 'No I want to update', trigger: '23' },
  //   ]
  //   },
  //   {
  //     id: "update",
  //     component: <></>,
  //     trigger: "thank"
  //   },
  //   {
  //     id: "thank",
  //     message: "Thankyou your data submitted sucessfully",
  //     end: true
  //   },
  
  
  
  ];
  
  
  
  export { steps };