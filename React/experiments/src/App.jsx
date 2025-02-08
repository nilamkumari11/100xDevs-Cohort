
import React, { useState } from 'react'
import './App.css'

// function App() {
// const [title, setTitle] = useState("Nilam1");

//   function updateTitle(){
//     setTitle(Math.random);
//   }

//   return (
//     // can only have single parent, but this gives an extra div so to get rid 
//     // we use <> </> or <React.Fragment>
        // when we click on Button then everything re renders which is not even changed 
        // to fix that we move the state down
       // define state variable in lowest common ancestor 
//     <React.Fragment>
//       <button onClick={updateTitle}>Update Title</button>
//       <Header title={title}></Header>
//       <Header title="Nilam2"></Header>
//     </React.Fragment>
//   )
// }

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

//minimise re render by moving state down or using React memo

function App() {
  
    return (
      <React.Fragment>
        <HeaderWithButton/>
        <Header title="Nilam2"></Header>
      </React.Fragment>
    )
  }
  
  // minimise the re renders by moving state down 
  function HeaderWithButton(){
    const [title, setTitle] = useState("Nilam1");
  
    function updateTitle(){
      setTitle(Math.random);
    }

    return <div>
      <button onClick={updateTitle}>Update Title</button>
      <Header title={title}></Header>
    </div>
  }

  // react memo -> parents re renders but individual children dont
  function Header = React.memo(function Header({title}) {
    return <div>
      {title}
    </div>
  })
export default App

//memo skips rerender a component when its props are unchanged
