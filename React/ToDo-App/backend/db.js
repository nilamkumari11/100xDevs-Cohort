const mongoose = require("mongoose");
require('dotenv').config({ path: '../.env' });

console.log("Loaded MONGO_URL:", process.env.MONGO_URL); 

mongoose.connect(process.env.MONGO_URL);
const todoSchema = mongoose.Schema({
    title:String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports ={
    todo
}