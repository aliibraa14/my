const mongoose = require("mongoose");
const db = mongoose.connection;
mongoose.Promise = global.Promise;
// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/test12', {
    useNewUrlParser: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
/* 
const mongoURI = 'mongodb://localhost:27017/t'
const db = mongoose.connection;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
}, () => {
    console.log("The connectino established .....")

});
console.log("db")
db.on("error", (err) => {
    console.log(err.message + ('Error in DB connection: ' + err))
});
db.on("coneccted", () => { console.log('MongoDB Connection Succeeded') });
/*
mongoose.Promise = global.Promise;
// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/t', {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
console.log('h')*/