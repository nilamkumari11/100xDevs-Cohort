import { atomFamily, selectorFamily } from "recoil";
import axios from 'axios';

//we know, atoms can not have asyncronous function in default, they use selector
//same in atomfamily we use, selectorFamily


export const todosAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: selectorFamily({
        key: "todoSelectorFamily",
        get: (id) => async ({get}) => {
            await new Promise(r => setTimeout(r, 5000));                   //blank for 5 secs
            // throw new Error("Error");          //throws error
            const res = await axios.get(`http://localhost:3000/todo/${id}`) ;
            return res.data;
        },
    })
});