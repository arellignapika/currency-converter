const express = require("express");
const router = express.Router();


router.get("/",function(req,res){
    res.sendFile("index.html",{ root : "./public/html"});
})

router.get("/exchnage",function(req,res){
    res.sendFile(  "exchnage.html", {root :  "./public/html"})
})

router.get("/contact",function(req,res){
    res.sendFile(  "contact.html", {root :  "./public/html"})
})



module.exports = router;