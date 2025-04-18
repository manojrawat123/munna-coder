const questionArr = [
    {
        name : 'title',
        placeholder : "Enter The Question",
        required : true,
    },
    {
        name : "categorieId",
        type : 'dynamicselect',
        required : true,
        placeholder : "Please Select Categories"
    },
    {
        name : "topicId",
        type : 'dynamicselect',
        required : true,
        placeholder : "Please Select Topic"
    },
    {
        name : "desc",
        type : "code",
        placeholder : `(📋) Paste Your Code Here`
    },
];

export default questionArr;