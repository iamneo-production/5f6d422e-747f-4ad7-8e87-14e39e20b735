const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
// const mongoose = require('./db.js');

// const mongoose = require('mongoose');
// const db = 'mongodb+srv://meanapp:meanapp@cluster0.vg3aqfb.mongodb.net/?retryWrites=true&w=majority'

// const connectionParams = {
//     useNewUrlParser : true,
//     // useCreateIndex: true,
//     useUnifiedTopology : true,
// };

// mongoose.connect(db, connectionParams).then(() => {
//     console.log('connection successful');
// }).catch((err) => console.log('no connection'));



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://meanapp:meanapp@cluster0.vg3aqfb.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



// API middlewares
app.use(bodyParser.urlencoded({extended : true})); //This is basically to decode th data send through html
app.use(express.static("public")); // This is to serve our public folder as a static folder

app.use(bodyParser.json());
app.use(cors({origin:'https://8081-cccdafacbeebfebbbcbfdcfbcdebacdacedf.project.examly.io/'}));


//API Routes
const db = [];

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

// app.get("/", function(req, res){
//     res.set({
//         "Allow-Access-Allow-Origin" : "*"
//     })
//     return res.redirect("index.html")
// })

app.get("/index2.html", function(req, res){
    res.sendFile(__dirname + "/index2.html")
    // res.fetch(__dirname + "/index2.html")
});

app.get("/meetings.html", function(req, res){
    res.sendFile(__dirname + "/meetings.html")
});

// app.get("/mentor.html", function(req, res){
//     res.sendFile(__dirname + "/mentors.html")
// });

app.get("/mentors.html", function(req, res){
    res.sendFile(__dirname + "/mentor.html")
});

app.get("/signup.html", function(req, res){
    res.sendFile(__dirname + "/signup.html")
});

app.post("/signup", function(req, res){
    var name = req.body.name
    var email = req.body.email
    var username = req.body.username
    var password = req.body.password

    var data = {
        "name" : name,
        "email" : email,
        "username" : username,
        "password" : password
    }

    db.push(data)
    console.log(db)
    res.redirect("/")


    // client.connect(err => {
    //     const collection = client.db("test").collection("devices");
    //     // perform actions on the collection object
    //     db.collection("users").insertOne(data,(err, collection)=>{
    //         if(err){
    //             throw err;
    //         }
    //         console.log("Record inserted successfully");
    //     });
    //     client.close();
    // });



    // // db.collection("users").insertOne(data,(err, collection)=>{
    // //     if(err){
    // //         throw err;
    // //     }
    // //     console.log("Record inserted successfully");
    // // });

    

})

app.get("/profile.html", function(req, res){
    res.sendFile(__dirname + "/profile.html")
});

// This is to listen on port 8081
app.listen(8081, ()=>{
    console.log("Server is running");
});