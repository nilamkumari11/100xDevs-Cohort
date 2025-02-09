const { ServerDescription } = require("mongodb");
const mongoose = require("mongoose");

const mongoURL = ("mongodb+srv://nilam:nilamPass@cluster0.te2ss.mongodb.net/todos");

mongoose.connect(mongoURL);

const todosSchema = mongoose.Schema({
    title:String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todosSchema);

module.exports = {
    todo 
}