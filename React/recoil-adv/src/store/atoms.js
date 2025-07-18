
import { atom, selector } from "recoil";

export const networkAtom = atom({
    key : "networkAtom",
    default : 104
})

export const jobAtom = atom({
    key : "jobAtom",
    default : 0
})

export const notificationAtom = atom({
    key : "notificationAtom",
    default : 12
})

export const messaginngAtom = atom({
    key : "messaginngAtom",
    default : 0
})

export const totalNotificationSelector = selector({
    key : "totalNotificationSelector",
    get : ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobAtomCount = get(jobAtom);
        const notificationAtomCount = get(notificationAtom);
        const messaginngAtomCount = get(messaginngAtom);
        return networkAtomCount + jobAtomCount + notificationAtomCount + messaginngAtomCount;
    }
})