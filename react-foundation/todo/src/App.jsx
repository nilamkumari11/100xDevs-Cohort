import { useState } from 'react'
import './App.css'

//any time a parent re renders, all its cild also rerenders
function App() {
  const [todos, setTodos] = useState([{
    title: "Complete class",
    description: "from 9-12",
    completed: false
  }, {
    title: "Self study",
    description: "from 6-9",
    completed: false
  }, {
    title: "Self study",
    description: "from 6-9",
    completed: false
  }])

  function addToDo(){
    setTodos([...todos, {
      title:"new Todo",
      description: "desc of new todo"
    }]
    )
  }

  return (
    <div>
      <button onClick={addToDo}>Add random todo</button>
      {/* <Todo title={todos[0].title} description={todos[0].description}> </Todo>
     <Todo title="Nilam" description="Nilam2"> </Todo> */}
     { todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description} />
     })}

    <DummyButton></DummyButton>
    </div>
    
  )
}

//this as no input still got re renbders as it is a child 
function DummyButton(){
  console.log("dummy button re rendered");
  return <button>dummy</button>
  
}

function Todo(props){ //take state variables as input, and state updator as i/p  
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
