const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.get("/index2.html", function(req, res) {
    res.sendFile(__dirname + "/index2.html")
    // res.fetch(__dirname + "/index2.html")
});

app.get("/meetings", function(req, res) {
    res.sendFile(__dirname + "/meetings.html")
});

app.listen(8081, () => {
    console.log("Server is running");
});