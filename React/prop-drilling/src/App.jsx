import { useState } from 'react'
import './App.css'
import { CountContext } from './Context'
import { useContext } from 'react'



// push down a state as much as possible so only lowest one re renders when updated 
// store to the least common ancester for 2 


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Count count = {count} />
//       <Buttons count={count} setCount={setCount}/>
//     </>
//   )
// }

// if we want buttons to be child of count then count will pass down setcount as prop but it doesnt need it 
// this is prop drilling -> passing down props to children from where it is defined 
// nothing to do with re rendering
// prop drilling is not bad becoz it re renders, but makes code vissually unappeling, hard to maintain

// function Count({count}){
//   return <>
//     {count}
//   </>
// }

// function Buttons({count, setCount}){
//   return <div>
//     <button onClick={() => {
//       setCount(count+1)
//     }}>Increase</button>

//     <button onClick={() => {
//       setCount(count-1)
//     }}>Decrease</button>
//   </div>
// }

// context API 
//-> teleport props directly 
// -> lets keep al state logic outside of core react component 




// here we have the compont tree as App -> Count -> COuntRender & Buttons
// we want to teleport count directly from App to COuntRender & Buttons without passing it to Count 
// create a context -> acts as teleporter (Context.jsx)
// wrap anyone who wants to use the teleported value inside a provider 
function App() {
  const [count, setCount] = useState(0)

  //wraped count in Provider
  return (
    <>
      <CountContext.Provider value={count}> 
        <Count setCount={setCount}/>
      </CountContext.Provider>
    </>
  )
}

// count not passed here 
function Count({setCount}){  
  console.log("count-rerender");
  return <>
    <CountRenderer />
    <Buttons  setCount={setCount}/>
  </>
}

// directly teleported here using useContext 
function CountRenderer(){
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({ setCount}){
  const count = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count+1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count-1)
    }}>Decrease</button>
  </div>
}

export default App
