
import './App.css'
import { RecoilRoot,  useRecoilValue, useSetRecoilState } from 'recoil'
import { todosAtomFamily } from './atoms';
import { useEffect } from 'react';

//atoms work only for one state
// for all todos to hit diffrent atoms, atom to each 
//atom family is a function that creates atom

function App() {
  return <RecoilRoot>
    <UpdaterComponent></UpdaterComponent>
    <Todo id = {1}/>
    <Todo id = {2} />
    <Todo id = {2} />
    <Todo id = {2} />
  </RecoilRoot>
}

//when we add multiple todo(2) -> all get updated based on id 
function UpdaterComponent(){
  const updateTodo = useSetRecoilState(todosAtomFamily(2));

  useEffect(() => {
    setTimeout(()=>{
      updateTodo({
        id: "2",
        title: "new todo",
        description: "updated todo"
      })
    }, 3000);
  }, []);
}

function Todo({id}){
  // const[todo, setTodo] = useRecoilState(todosAtomFamily(id));
  const currentTodo = useRecoilValue(todosAtomFamily(id));     // from atom family give me the one based on id 
  return(
    <>
      <h1>{currentTodo.title}</h1>
      <h2>{currentTodo.description}</h2>
    </>
  )
}

export default App
