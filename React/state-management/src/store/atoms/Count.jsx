import { atom } from "recoil";

export const countAtom = atom({
    key: "countAtom",  // uniquely identify
    default : 0   // default value of atom
});
