import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
  // const navigate = useNavigate(); ///navigate fails outside browser router

  return (
    <div>
      {/* <div>
          Hi this is topbar
          <button onClick={() => {
           // window.location.href = "/";  // not right way when using client side routing 
           navigate("/"); // doesn't fetch the js bundle repeatedly 
          }}>Landing page</button>
          <button onClick={() => {
            //window.location.href = "/dashboard";
            navigate("/dashboard");
          }}>Dashboard</button>
      </div> */}
    <BrowserRouter>
      <Appbar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/' element={<Landing></Landing>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
// useNavigate hook can only be invoked in a component inside BrowserRouter
function Appbar(){
  const navigate = useNavigate();
  
  return <div>
            Hi this is topbar
            <button onClick={() => {
              navigate("/"); 
            }}>Landing page</button>
            <button onClick={() => {
              navigate("/dashboard");
            }}>Dashboard</button>
          </div>
}

export default App
