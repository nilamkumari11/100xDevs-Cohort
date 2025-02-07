
import React, { useState } from 'react'
import './App.css'

function App() {
const [title, setTitle] = useState("Nilam1");

  function updateTitle(){
    setTitle(Math.random);
  }

  return (
    // can only have single parent, but this gives an extra div so to get rid 
    // we use <> </> or <React.Fragment>
    <React.Fragment>
      <button onClick={updateTitle}>Update Title</button>
      <Header title={title}></Header>
      <Header title="Nilam2"></Header>
    </React.Fragment>
  )
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App
