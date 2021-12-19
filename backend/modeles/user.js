const mongoose = require("mongoose");


// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true,
        index: true,
    },
    FavFood: {
        type: String,
    },
});

//Export the model
const User = mongoose.model('User', userSchema);
module.exports = User;