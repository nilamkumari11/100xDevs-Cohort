console.log("Hello World");
// console.log(a);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 0; i< arr.length; i++) {
    if(arr[i]  % 2 == 0) {
        console.log(arr[i])
    }
}

// for( let i = 0; i<arr.length; i++) {
//     let min = In
// }

const user1 = {
    name: "Nilam",
    gender: "female"
}

console.log(user1["gender"]);

//array of objects

allUser = [{
    name: "Nilam",
    gender: "female"
}, {
    name: "Ram",
    gender: "male"
}]

for(let i = 0; i<allUser.length; i++) {
    if(allUser[i]["gender"] == "male"){
        console.log(allUser[i]["name"]);
    }
}

function findSum(a, b) {
    return a+ b;
}

const val = findSum(3, 4);
console.log(val);

//............................................

function sum(a, b, funcCall) {
    let res = a+b;
    funcCall(res);
}

function display(data){
    console.log("Result of sum is :", data);
}

function displyPassive(data) {
    console.log("Sum's result is :", data);
}

const ans = sum(3, 5, display);
const ans2 = sum(1, 3, displyPassive);
//callbacks
//passing functions inside a function

function Calc(a, b, arithmeticFunction) {
    const res = arithmeticFunction(a, b);
    return res;
}

function add(a, b) {
    return a+b;
}

function sub(a,b) {
    return a- b;
}

const value = Calc(1, 2, add);
console.log(value);

//inBuikt call back functions
// setInterval 
// setTimeout


//calc the time it takes between a setTimeOut call and the inner function actuakly running

// const start = Date.now();
// function delay(){
//     const time = Date.now();
//     console.log("difference", time-start);
// }
// setTimeout(delay, 1000);


const startTime = Date.now();

setTimeout(() => {
  const endTime = Date.now();
  const elapsed = endTime - startTime;
  console.log(`Time elapsed: ${elapsed} milliseconds`);
}, 2000);  // Set the timeout to 1000 milliseconds (1 second)




//Terminal Clock



function clock(){

    console.clear();

    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    console.log(hours," : ", minutes, " : ", seconds);
}

setInterval (clock, 1000);