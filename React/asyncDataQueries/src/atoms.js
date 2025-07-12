import { atom, selector } from "recoil";
import axios from 'axios';

// we can not add App.jsx's useEffect axios thing here in default as it cannot be async 
// but it can be a selector which can be asyncronous 
// here comes async data queries 
export const notifications = atom({
    key: "networkAtom",
    default: selector({
            key : "networkAtomSelector",
            get : async () => {
                await new Promise(r => setTimeout(r, 5000)) // sleeps for 5 secs 
                const res = await axios.get("http://localhost:3000/notifications")
                return res.data;
            }
        })
    
    // {
        // network: 4, 
        // jobs: 6, 
        // messaging: 3, 
        // notification: 3
    // }
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notification + 
        allNotifications.messaging
    }
})