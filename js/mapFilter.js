//map, filter and arrow functions

// arrow function

// function sum(a, b){
//     return a+b;
// }

// const sum = (a,b) => {
//     return a+b;
// }

// given a array give back a new array in which every value is multiplied by 2

//map

const input = [1,2,3,4,5]

function transform(i){
    return i*2;
}

const ans = input.map(transform);
console.log(ans);

const ans2 = input.map((i) => {
    return i*2;
})
console.log(ans2);

//filtering

// what if I tell you given an input array give me back all the even values

const arr = [1,2,3,4,5]

const res = arr.filter((i) => {
    if(i%2==0){
        return i 
    }
})

console.log(res);

