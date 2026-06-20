//https://autosuggest-backend.onrender.com/api/autosuggest?q=b&weighted=true&algorithm=trie&limit=8
var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";

var searchbar = document.getElementById("search-bar");
var suggestions = document.getElementById("search-suggestions");

//get data from user input
//use user typed data in query in API call
//API call
//Append all search suggestions to div tag in ul
searchbar.addEventListener("input", function(){ //called everytime user types in the search bar
    var query = searchbar.value.trim();  // user input
    // console.log(query);
    fetchSuggestions(query); 
})

function fetchSuggestions(query){
    var fullAPI = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8"; //API call with user input
    fetch(fullAPI) //fetch is used to make API calls and get data from the API
        .then(function(response) {
            return response.json();
        })

        .then(function(data) {
            showSuggestions(data);
            // console.log(data);
        })

        .catch(function(error) {
            console.log("Error :" + error); 
        })
}

function showSuggestions(data){ 
    var suggestionsList = data.results; //results array is stored
    if(data.count == 0){ 
        suggestions.innerHTML = "<div>No Matching Results Found!</div>"; 
    }
    else {
        var htmlString = ""; //initially string is empty
        for(var i = 0; i < suggestionsList.length; i++){ //loop until the results arr ends
            htmlString += "<div><span class='suggestion-item'>" + suggestionsList[i].text + "</span><span class='item-weight'>" + suggestionsList[i].weight + "</span></div>"; //to add to the list of strings
        }
        suggestions.innerHTML = htmlString; // the suggestions in the API call is replaced with this list
    }
}

