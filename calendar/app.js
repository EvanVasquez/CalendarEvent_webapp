const express = require('express');
const Parser = require("body-parser");
const app = express();
const mysql = require('mysql');

app.use(Parser.urlencoded({extended: true}));
// Will look for a file in local directory called "views" and for a file with ".ejs" at the end
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); // Use public folder to access css

var valDay = "";
var Day = 0;
var valMon = "7";
var Mon = 6;

var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

var currentPlace = "Jul";

var connection = mysql.createConnection({
    host: 'den1.mysql4.gear.host',
    port: 3306,
    user: 'spotcalendar',
    password: 'Po03_629Lb3_',
    database: 'spotcalendar'
});


app.get('/',function(req,res){
    var monTemp = Mon + 1;
    var q = "SELECT * FROM event WHERE month = " + monTemp + " ORDER BY day" ;
    connection.query(q, function(err, results){
        if(err) throw err;
        var complete = {
            Re: results,
            Month: currentPlace
        }
        res.render( currentPlace, {Results: complete});
    });
});

app.get('/nextMonth', function(req,res){
    Mon++;
    currentPlace = months[Mon];
    var monTemp = Mon + 1;
    var q = "SELECT * FROM event WHERE month = " + monTemp + " ORDER BY day" ;
    connection.query(q, function(err, results){
        if(err) throw err;
        var complete = {
            Re: results,
            Month: currentPlace
        }
        res.render( currentPlace, {Results: complete});
    });
});

app.get('/prevMonth', function(req,res){
    Mon--;
    currentPlace = months[Mon];
    var monTemp = Mon + 1;
    var q = "SELECT * FROM event WHERE month = " + monTemp + " ORDER BY day" ;
    connection.query(q, function(err, results){
        if(err) throw err;
        var complete = {
            Re: results,
            Month: currentPlace
        }
        res.render( currentPlace, {Results: complete});
    });
});

app.get('/event',function(req,res){
    valDay = req.query.Day;
    Day = parseInt(valDay,10);
    console.log(Day);
    var some = [valDay,currentPlace];

    res.render("eventPage", {some: some});
});
app.post('/cancel', function(req,res){
    res.redirect('/');
});
app.post('/removeEvent',function(req,res){
    var id = req.body.RemoveEvent;
    console.log(id);
    var q = "DELETE FROM event WHERE id = " + id;
    connection.query(q, function(err,results){
        if(err) throw err;
        console.log("You deleted the event !");
        res.redirect('/');
    });
});

app.post('/insetEvent', function(req,res){
    var title = req.body.title;
    var desc = req.body.desc;
    var startT = req.body.start;
    var endT = req.body.end;
    var monTemp = Mon + 1;

    var event = {
        month: monTemp,
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
