import { useCallback, useState } from 'react'
import './App.css'
import { memo } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const logSomething= useCallback(()=>{
    console.log("Child clicked");
    
  },[])

  return <div>
    <ButtonComponent inputFunction={logSomething}></ButtonComponent>
      <button onClick={() => {
        setCount(count+1);
      }}>Click me {count}</button>
    </div>
  
}

//child re renders as raw function changes without useCallback
const ButtonComponent = memo(({inputFunction}) => {
  console.log("Child render");
  
  return <div>
    <button onClick={inputFunction}>Button Clicked</button>
  </div>
})

export default App
