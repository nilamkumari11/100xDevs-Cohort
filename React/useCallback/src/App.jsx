import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { memo } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function logSomething(){
    console.log("Child clicked");
    
  }

  return <div>
    <ButtonComponent inputFunction={logSomething}></ButtonComponent>
      <button onClick={() => {
        setCount(count+1);
      }}>Click me {count}</button>
    </div>
  
}

const ButtonComponent = memo(({inputFunction}) => {
  console.log("Child render");
  
  return <div>
    <button onClick={inputFunction}>Button Clicked</button>
  </div>
})

export default App
