import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
// import { useEffect } from 'react'
// import axios from 'axios'
import './App.css'

// a flash occurs, to solve this, we make update in atom.js 
function App() {
   return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp(){
  const [networkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // this will now be in atom.js -> all backend logic in atom.js
  // useEffect(() => {
  //   // fetch
  //   axios.get("http://localhost:3000/notifications")
  //     .then(res => {
  //       setNetworkCount(res.data)
  //     })
  // }, [])

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notification})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
