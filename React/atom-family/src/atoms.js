import { atomFamily } from "recoil";
import { TODOS } from "./todos";

//DECLARING ATOMfAMILY
export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: (id) => {
         return TODOS.find((x) => x.id === id);
    }
});

// atomFamily return an atom 
// it is same as
// fucntion giveAtom() {
//  return atom();
//}