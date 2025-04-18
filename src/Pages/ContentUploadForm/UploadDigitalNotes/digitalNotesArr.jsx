const digitalNotesArr = [
    {
        name : 'title',
        placeholder : "Enter The Title",
        required : true,
    },
    {
        name : "mediaUrl",
        type : "url",
        label : "Enter the word File URL",
        placeholder : "https://docs.google.com..."
    },
    {
        name : "categories",
        type : 'dynamicselect',
        required : true,
        placeholder : "Please Select Categories"
    },
    {
        name : "desc",
        type : "desc",
        placeholder : `Description`
    },

];

export default digitalNotesArr;