var express=require('express');
var bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.get("/data",function(req,res){
    res.send([{name:"vishnu",salary:35000},{name:"arun",salary:30000}])
})
app.listen(8081,function(req,res){
    console.log("started")
})

