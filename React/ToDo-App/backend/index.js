const express = require("express");
const { createTodo } = require("./types");
const { MongoServerClosedError, ServerDescription } = require("mongodb");
const { todo } = require("./db");
const app = express();
app.use(express.json());

app.post("/todo", async function(req, res){
    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "wrong inputs",
        })
        return
    }
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })
    res.json({
        msg:"todo created"
    })
})

app.get("/todos", async function(req, res){
    const todos = await todo.find({}); //all todos
    res.json({
        todos
    })
})

app.put("/completed", async function(req, res){
    const updatePayLoad = req.body;
    const parsePayLoad = updatePayLoad.safeParse(updatePayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "wrong inputs",
        })
        return
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed:true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);