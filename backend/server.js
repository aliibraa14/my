const express = require("express");
const app = express();

app.use(express.json());
const db = require("./db");
const Todo = require("./models/todo");

app.get("/", (req, res) => {
    res.json("GET / is Working");
});

app.get("/todos", (req, res) => {
    Todo.find({},(err,date)=>{
        if(err){console.log("err")}
        else{
            res.json(date)
        }
    })
});

app.post("/todos", (req, res) => {
    console.log("24324234234",req.body)
    Todo.create({},(err,newTask)=>{
        
        if(err){console.log("err",err)}
        else{
            res.status(201).json("create new ")
        }
    })
});





app.listen(5000, () => {
    console.log("SERVER IS WORKING ...");
});