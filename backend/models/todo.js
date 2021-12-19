const { Schema, model } = require("mongoose");
// let obj={fName:'Jouza', favFood:'Broasted'}
// const {fName,favFood} = obj

const todoSchema = new Schema({
    title:  String,
    itCompleted: String
    
});

// Model
const Todo = model("Todo", todoSchema);

// Export Model
module.exports = Todo;