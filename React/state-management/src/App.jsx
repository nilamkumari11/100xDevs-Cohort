import React, {  useState } from 'react';
import { RecoilRoot,  useRecoilValue, useSetRecoilState } from 'recoil';

import { countAtom, evenSelector } from './store/atoms/Count';


// In case of contextAPI, we don't make re rendering more performant, it just makes syntax cleaner and removes prop drilling
// even though Count in that case was not using the count variable got re rendered 
// so state management using recoil(lib) -> it also gets rid of disadvantage of contextAPI 
// it is react thing to keep components(UI) and states(backend call) seperately, state management lets us do that
// Recoil -> state management library for React (others are -> Redux, Zustand)
// Recoil has concept of atom to store state , an atom is defined outside component, teleported to any component 
// atom is same as useState hook we used earlier, both create states 
// this is benficial, upper any component not needs to have it so no one will re render expect the ones using atom

//atom => same as states 
// RecoilRoot => at top in Appp.jsx 
//useRecoilState -> same as useState (one value, another update val)
// useRecoilValue -> only value
// useSetRecoilValue -> only gives the update value
// selector -> represents derived state(o/p of a state from a pure functionas new val of the said state) 
// whenever we have a derived state we use, useMemo

function App() {

  return (
    <>
      <RecoilRoot>  
        <Count  />
      </RecoilRoot>
    </>
  )
}


function Count(){  
  return <>
    <CountRenderer />
    <Buttons />
  </>
}

//we dont use atoms eveytime, sometimes useState is also used
// when a state valriable needs to be defined and used in the same component 
// for global sates (thing that actually create application) use recoil
function Input() {
  const [setInputValue] = useState("");
  return <>
    <input onChange={(e) => {
        setInputValue(e.target.value) // input button that filters a few string
    }} />
  </>
}


function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
    <EvenCountRerenderer />
  </div>
}

function EvenCountRerenderer(){
  //  const count = useRecoilValue(countAtom);
  // return <div>
  //   {/* {(count % 2 ==0) ? "It is even" : "It is odd"} */}
  // </div>
  // if(count % 2==0){
  //     return <div>It is even</div>
  //   } else {
  //     return <div>It is Odd</div>
  //   }

  // this is good enough than the previous one 
  // as when a re render happens and count has not changed then isEven will not run the inner function
  // const isEven = useMemo(() => {
  //   return count % 2 == 0
  // }, [count])

  // return <>
  //     {isEven ? "It is even" : "It is odd"}
  // </>

  //Simlarly a selector is defined when something is competely dependent on something to change

    const isEven = useRecoilValue(evenSelector);

    return <div>
      {isEven ? "It is even" : "It is odd"}
     </div>
}
function Buttons(){
  // const [count, setCount] = useRecoilState(countAtom);
  //setcount(count+1)
  //setCount(c=>c+1)
  //setcopunt(function(c){
      // return c+1;
// })
//all three do the same thing 
/// and in the last two count is not required 
// with count it would everytime we click on buttons , we dont want that 

const setCount = useSetRecoilState(countAtom); // here it will stop re rendering 
console.log("buttons re render");
  return <div>
    <button onClick={() => {
      setCount(count => count+1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count-1)
    }}>Decrease</button>
  </div>
}

export default App
