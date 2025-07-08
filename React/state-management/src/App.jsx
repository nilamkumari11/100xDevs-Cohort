// import { useState } from 'react'
import './App.css'

// In case of contextAPI, we don't make re rendering more performant, it just makes syntax cleaner and removes prop drilling
// even though Count in that case was not using the count variable got re rendered 
// so state management using recoil(lib) -> it also gets rid of disadvantage of contextAPI 
// it is react thing to keep components(UI) and states(backend call) seperately, state management lets us do that
// Recoil -> state management library for React (others are -> Redux, Zustand)
// Recoil has concept of atom to store state , an atom is defined outside component, teleported to any component 
// atom is same as useState hook we used earlier, both create states 
// this is benficial, upper any component not needs to have it so no one will re render expect the ones using atom


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
    </>
  )
}

export default App
