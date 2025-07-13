
import './App.css'
import { RecoilRoot,  useRecoilValue } from 'recoil'
import { todosAtomFamily } from './atoms';

//atoms work only for one state
// for all todos to hit diffrent atoms, atom to each 

function App() {
  return <RecoilRoot>
    <Todo id = {1}/>
    <Todo id = {2} />
  </RecoilRoot>
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
