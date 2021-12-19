const express = require("express");
const app = express();

app.use(express.json());
const db = require("./db");
const Todo = require("./models/todo");
console.log(Todo)
app.get("/", (req, res) => {
    res.json("GET / is Working");
});

app.get("/todos", (req, res) => {
 
});

app.post("/users", (req, res) => {
  console.log("hi")
});





app.listen(5000, () => {
    console.log("SERVER IS WORKING ...");
});