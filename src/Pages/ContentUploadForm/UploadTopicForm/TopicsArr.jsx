const topicArr = [
    {
        name : 'title',
        placeholder : "Enter The Title",
        required : true,
    },
    {
        name : "categories",
        type : 'dynamicselect',
        required : true,
        placeholder : "Please Select Categories"
    },
    {
        name : "desc",
        type : "code",
        placeholder : `(📋) Paste Your Code Here`
    },
    {
        name : "word_file",
        type : "file",
        placeholder : "Upload Word or ScreenShort"
    },
];

export default topicArr;