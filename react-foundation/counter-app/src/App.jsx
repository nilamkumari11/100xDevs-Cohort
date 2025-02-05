import './App.css'

//hook
import { useState } from 'react';
//state, component

//this is not watched by react, so when updated not displayed
// let state = {
//   count:0
// }
function App() {
  const [count, setCount] = useState(0);
  // function onClickHandler(){ 
  //   // state.count = state.count+1;
  //   // console.log(state.count); // this gets increased but not displayed

  //   // count = count+1; // not correct way
  //   setCount(count+1); 
  // }
  return(
    <div>
      {/* <button onClick={onClickHandler}>Counter {state.count}</button> */}
      {/* <button onClick={onClickHandler}>Counter {count}</button> */}
      <CustomButton count = {count} setCount= {setCount}></CustomButton>
      <CustomButton count = {count-1} setCount= {setCount}></CustomButton>
      <CustomButton count = {count+1} setCount= {setCount}></CustomButton>
      <CustomButton count = {count*100} setCount= {setCount}></CustomButton>
    </div>
  )
}

//good practice, not everything should be in App
function CustomButton(props){ //take state variables as input, and state updator as i/p  

  function onClickHandler(){
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}
export default App
