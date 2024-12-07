
// const fs = require("fs");
// // file system 


// //async function
// fs.readFile("a.txt", "utf-8", function(err, data){
//     console.log(data);
// })

// // this runs first
// console.log("Hello from fs.js");


// promises

// const fs = require("fs");

// function kiratsReadFile() {
//     console.log("Inside kiratsReadFile");
//     return new Promise(function(resolve) {
//         console.log("Inside Promise");
//         fs.readFile("a.txt", "utf-8", function(err, data){
//             console.log("Before resolve");
//             resolve(data);
//         })
//     })
// }

// function onDone(data) {
//     console.log(data);
// }

// kiratsReadFile().then(onDone);


 
// promise    -> class that makes callbacks and asynchronous function more readable

// -> pending, resolved, undefined

var d = new Promise(function(resolve){
    setTimeout(function() {
        resolve("foo");
    }, 1000)
});

function callback() {
    console.log(d);
}

console.log(d);
d.then(callback); // then get called when the async function resolves 



// Callback hell -> lots of indentation of callbacks 

// setTimeout(function(){
//     console.log("hii");
//     setTimeout(function() {
//         console.log("Inside second");
//     }, 2000);
// }, 1000);

// approach 1 (wrapping another async function)

// function myOwnSetTimeout(fn, duration){
//     setTimeout(fn, duration);
// }

// myOwnSetTimeout(function(){
//     console.log("Hi there");
// }, 1000);


// Approach 2 (Promises)

// function myOwnSetTimeout(duratiom){
//     let p = new Promise(function (resolve) {
//         setTimeout(resolve, 1000);
//     });
//     return p;
// }

// myOwnSetTimeout(1000)
// .then(function() {
//     console.log("Log first thing");
// })