
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobAtom, messaginngAtom, networkAtom, notificationAtom, totalNotificationSelector } from './store/atoms'

function App() {
  return <RecoilRoot>
    <MainApp></MainApp>
  </RecoilRoot>
}

function MainApp(){
   const networkNotificationCount = useRecoilValue(networkAtom); 
   const jobNotificationCount = useRecoilValue(jobAtom); 
   const NotificationCount = useRecoilValue(notificationAtom); 
   const [messageNotificationCount, setmessagingNotification] = useRecoilState(messaginngAtom); 
   const totalNotificationCount = useRecoilValue(totalNotificationSelector); // can also use useMemo instead

  return (
    <>
      <button>Home</button>
     {/* these 4 buttons will have real values inside  */}
      <button>My Networks {networkNotificationCount >= 100 ? "99+" : networkNotificationCount}</button>
      <button>Jobs {jobNotificationCount}</button>
      <button>Messaging {NotificationCount}</button>
      <button>Notifications {messageNotificationCount }</button>

      <button onClick={() => {
          setmessagingNotification(c => c+1);
      }}>Me {totalNotificationCount}</button>
    </>
  )
}

export default App
