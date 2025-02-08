import React from 'react';
import { useState } from 'react'

let counter = 4;
function App() {
  const [todos, setTodos] = useState([{
    id:1,
    title: "Complete class",
    description: "within 2 hrs"
  }, {
    id:2,
    title: "Study DSA",
    description: "2 pm"
  }, { 
    id:3,
    title: "Code",
    description: "3 questions on hashmap"
  }])

  function addTodo(){
    setTodos([...todos , {
      id:counter++,
      title: "self study",
      description: "1 hr"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {todos.map(todo => <Todo key = {todo.id} title = {todo.title} description = {todo.description}></Todo>)}
    </div>
  )
}
//when rendering a list, list should have a unique identifier and key is that identifier

function Todo({title, description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h2>
      {description}
    </h2>
  </div>
}

export default App
