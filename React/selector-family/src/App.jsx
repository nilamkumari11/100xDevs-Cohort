
import './App.css'
import { RecoilRoot, useRecoilStateLoadable, useRecoilValueLoadable } from 'recoil'
import { useRecoilState } from 'recoil'
import { todosAtomFamily } from './atoms'
import { Suspense } from 'react'

// even when multiple id 2 are it will hit the backend for 2 only once 


// when the functions remains blank for few seconds becoz it takes data from backend 
// in that case a froze screen is visible 
// so to show a loader that it is happening can be done using suspense, error boundary with recoil val
// or here it uses useRecoilState Loadable

//when a asyncronous callback takes time, we dont want user to be hung, some times it shows skeletons

function App() {
  return <RecoilRoot>
    {/* <Suspense fallback="loadong"> */}
      <Todo id={1}></Todo>
      <Todo id={2}></Todo>
      <Todo id={2}></Todo>
      <Todo id={2}></Todo>
      <Todo id={2}></Todo>
    {/* </Suspense> */}
     
  </RecoilRoot>
}

function Todo({id}){
  // const [todo] = useRecoilState(todosAtomFamily(id));

  const [todo] = useRecoilStateLoadable(todosAtomFamily(id));
  // and for values ->
  // const todo = useRecoilValueLoadable(todosAtomFamily(id));

// here todo is a object which has 
//{
    // contents
    // state -> this resolvbes whether it has resolved or not 
//}

  if(todo.state === "loading"){
    return <div> loading ...</div>
  } else if (todo.state === "hasValue"){
      return (
    <>
      <h3>{todo.contents.title}</h3>
      <p>{todo.contents.description}</p>
    </>
  )
  }else if(todo.state === "hasError"){
    return <div>
      Error while getting data from backend
    </div>
  }

  //if loadable is not used then in recoilVal the error will not display it will hung 
  
  // return (
  //   <>
  //     {todo.title}
  //     {todo.description}
  //   </>
  // )
}

export default App
