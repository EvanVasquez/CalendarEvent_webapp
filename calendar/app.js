const express = require('express');
const Parser = require("body-parser");
const app = express();
const mysql = require('mysql');

app.use(Parser.urlencoded({extended: true}));
// Will look for a file in local directory called "views" and for a file with ".ejs" at the end
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); // Use public folder to access css

var val = "";
var Day = 0;

var connection = mysql.createConnection({
    host: 'den1.mysql4.gear.host',
    port: 3306,
    user: 'spotcalendar',
    password: '	Po03_629Lb3_',
    database: 'compose'
});



app.get('/',function(req,res){
    res.render("home");
});

app.get('/event',function(req,res){
    val = req.query.Day;
    Day = parseInt(val,10);
    console.log(Day);
    res.render("eventPage", { Day : val });
});
app.post('/cancel', function(req,res){
    res.redirect('/');
});

app.post('/insetEvent', function(req,res){
    var title = req.body.title;
    var desc = req.body.desc;
    var startT = req.body.start;
    var endT = req.body.end;

    var event = {
        day: Day,
        title: title,
        description: desc,
        startTime: startT,
        endTime: endT,
    }

    connection.query("INSERT INTO event SET ?", event ,function(err,results){
        if(err) throw err;
        console.log("Your event has been added ! :D");

    });
    res.redirect('/');
});



app.get('*', function(req, res) {
    res.redirect('/');
});

// Message for devs to see on localhost http://127.0.0.1:8080/
app.listen(8080, function() {
    console.log("Server running on 8080");
});
