const express =  require("express");
const app = express();
const port = process.env.PORT || 6700; //declaring port variable either environment variable or 6700

//To tell app where static files html/css/js are stored
app.use(express.static("frontend"));

//if listen starts successfully, it will print the message to console
app.listen(port, function() {
    console.log("App is running on http://localhost:" + port);
});