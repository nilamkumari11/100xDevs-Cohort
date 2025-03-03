import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'
import { useEffect } from 'react'

//useMemo -> across renders memorises a value
function App() {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(0)
  // const [count, setCount] = useState(0)

  // let count = 0;
  // for(let i=1; i<= inputValue; i++){
  //   count = count+i;
  // }

  //useMemo
  let count = useMemo(()=>{
    console.log("Memo got called");
    
    let finalCount = 0;
    for(let i=1; i<= inputValue; i++){
      finalCount = finalCount+i;
    }
    return finalCount;
  }, [inputValue]); // run only when inputValue changes

  //useEfect
  // useMemo is better because useEffect uses an extra state variable
  // useEffect(() => {
  //   let finalCount = 0;
  //   for(let i=1; i<= inputValue; i++){
  //     finalCount = finalCount+i;
  //   }
  //   setCount(finalCount);
  // }, [inputValue])

  //when the counter button is clicked then the whole renders, the for loop also which is not good 
  return (
    <>
      <input onChange={function(e){
        setInputValue(e.target.value);
      }} placeholder='Find sum from 1 to n'></input> < br>
      </br>
      Sum from 1 to {inputValue} is {count}
      <br></br>
      <button onClick={() => {
        setCounter(counter+1);
      }}>Counter ({counter})</button> 
    </>
  )
}

export default App
