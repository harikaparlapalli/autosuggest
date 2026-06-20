var users = [ //array of user objects
    {
        "name" : "John Doe",
        "gender" : "Male",
        "image" : "/images/john.png"
    },

    {
        "name" : "Jane Doe",
        "gender" : "Female",
        "image" : "/images/jane.png"
    }
]

var currId = 0; //variable to keep track of the current user index
function  toggle() { //function to toggle between users
    //toggle currId from 0 -> 1 and 1 -> 0
    currId = (currId+1)%2; 

    //toggle the rendered user details
    var user = users[currId]; //get the current user object
    document.getElementById("user-img").src = user.image; //update the image
    document.getElementById("user-name").innerText = user.name; //update the name 
    document.getElementById("user-gender").innerText = user.gender; //update the gender
}