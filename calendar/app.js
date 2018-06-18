var express = require('express');
var Parser = require("body-parser");
var app = express();

app.use(Parser.urlencoded({extended: true}));
// Will look for a file in local directory called "views" and for a file with ".ejs" at the end
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); // Use public folder to access css


app.get('/',function(req,res){
    res.render("home");
});

app.get('/event',function(req,res){
    var val = req.query.Day;
    console.log(typeof val);
    res.render("eventPage");
});




app.get('*', function(req, res) {
    res.redirect('/');
});

// Message for devs to see on localhost http://127.0.0.1:8080/
app.listen(8080, function() {
    console.log("Server running on 8080");
});
