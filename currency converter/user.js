

const express = require("express");
const db = require("./routes/dbcon");
const bodyParser = require("body-parser");
const app = express();
const encoder = bodyParser.urlencoded({ extended: true });
const router = express.Router();
var user_idstu = 0;
var user_idpro = 0;
const session = require('express-session');
const cors = require("cors");


// Enable CORS for all routes
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use("/css", express.static(__dirname + './public/css'));
app.use("/html", express.static(__dirname + './public/htmlfiles'));

//app.set("view engine", "ejs");
app.use(express.json());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/html/index.html");
})

app.get("/exchnage.html", function (req, res) {
  res.sendFile(__dirname + "/public/html/exchnage.html");
})

app.get("/contact.html", function (req, res) {
  res.sendFile(__dirname + "/public/html/contact.html");
})


app.post("/login", encoder, function (req, res) {
  const username_st = req.body.username_pr; 
  const password_st = req.body.password_pr; 
  db.query("select * from student where user_id  = ? and password = ?", [username_st, password_st], function (error, results, fields) {
    if (results.length > 0) {
      userid_st = results[0].studentid;
      req.session.user_idstu = username_st;
      res.redirect("/exchnage.html");
    } else {
      res.send('<script>alert( "Invalid username or password"); window.location.href="/";</script>');
    }
  })
});


//Localhost call
app.listen(7077);