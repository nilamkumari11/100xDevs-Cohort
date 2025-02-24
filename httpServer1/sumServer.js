const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors());

const todos = [
  { id: 1, title: "Todo 1", description: "This is todo 1" },
  { id: 2, title: "Todo 2", description: "This is todo 2" },
  { id: 3, title: "Todo 3", description: "This is todo 3" },
  { id: 4, title: "Todo 4", description: "This is todo 4" },
  { id: 5, title: "Todo 5", description: "This is todo 5" }
];

// Define a GET route to fetch todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
