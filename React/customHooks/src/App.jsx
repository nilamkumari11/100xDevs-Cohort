import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';

//cannot create raw function
//own hook -> always starts with use
function useTodos(){
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    axios.get("")
    .then((res) => {
      setTodos(res.data.todos)
    })
  },[])

  return todos;
}
function App() {
 const todos = useTodos();
  return (
    <>
      {todos}
    </>
  )
}

export default App
