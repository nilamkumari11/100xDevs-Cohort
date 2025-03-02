import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios';

function App() {
  const[selectedId, setSelectedId] = useState(1);

  return <div>
    <button onClick={function(){
      setSelectedId(1)
    }}>1</button>
    <button onClick={function(){
      setSelectedId(2)
    }}>2</button>
    <button onClick={function(){
      setSelectedId(3)
    }}>3</button>
    <button onClick={function(){
      setSelectedId(4)
    }}>4</button>
    <Todo id={selectedId} />
  </div>
}

function Todo({id}){
  const [todo, setTodo] = useState({});

  useEffect(()=> {
    axios.get("http://localhost:3000/todo/"+ id)
    .then(response => {
      setTodo(response.data)  // axios
    })
  }, [id]) // whenever id changes it re renders, if empty then only once at beginning 

  return <div>
    Id={id}
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
  </div>
}
export default App
