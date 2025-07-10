import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",  // uniquely identify
    default : 0   // default value of atom
});


// Selector 
// simlar as useMemo
export const evenSelector = selector({
    key : "evenSelector",
    get : ({get}) => {
        const count = get(countAtom);
        return count % 2;
    }
})