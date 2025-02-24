import { useEffect } from "react"
import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setInterval(()=>{
      fetch("http://localhost:3000/todos") //sumServer
      .then(async function(res){
          const json = await res.json();
          setTodos(json);
      })
    }, 5000)
  }, []) //dependency array

  return (
    <div>
        {todos.map(todo=> <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </div>
  )
}

function Todo({title, description}){
  return(
    <div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>
  )
}

export default App
