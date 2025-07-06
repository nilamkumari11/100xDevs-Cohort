import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
// import { Dashboard } from './components/Dashboard'
// import { Landing } from './components/Landing'
import { lazy, Suspense } from "react";
const Dashboard = lazy(() => import('./components/Dashboard')) 
const Landing = lazy(() => import('./components/Landing'))

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
        <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard></Dashboard></Suspense>}></Route>
        <Route path='/' element={<Suspense fallback={"loading..."}><Landing></Landing></Suspense>}></Route>
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

// lazy loading 
// earlier complete bundle comes back all at once, and then client side routing is done
// problem -> sometimes person comes to landing page and not go to other pages then why 
// load the full of other pages 
// when at page 1, recieve code bundle only for page 1, then for pg2 so on

// Suspense API -> used for asynchronous component fetching, data fetching
// when on landing page we go to dashboard it takes some time to fetch hence it becomes asynchronous 
// when some data is not tjere and goin to come eventually render the fallback 
// so when we move from landing to dashboard for the first time it shows loding... for just a milli sec 

export default App
