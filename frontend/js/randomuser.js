function randomuser() {
    fetch("https://randomuser.me/api/") //fetch is used to make API calls and get data from the API
        .then(function(response) {
            return response.json();
        })

        .then(function(data) {
            var user = data.results[0]; //get 1st user from results(exists in JSON file) array
            var fullName = user.name.title + " " + user.name.first + " " + user.name.last; //get full name of user
            document.getElementById("user-img").src = user.picture.large; //update the image
            document.getElementById("user-name").innerText = fullName; //update the name 
            document.getElementById("user-gender").innerText = user.gender; //update the gender
        })

        .catch(function(error) { //occurs when the above calls fail
            console.log("Error :" + error); //log the error in console
        })
}