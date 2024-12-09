// normal syntax

// function kiratAsynsFunction() {
//     let p = new Promise(function(resolve){
//         // some asnc logic (set time out or something)
//         resolve("hi there");
//     });
//     return p;
// }

// function main() {
//     kiratAsynsFunction().then(function(value) {
//         console.log(value);
//     });
// }

// main();

// Async await syntax 

function kiratAsynsFunction() {
    let p = new Promise(function(resolve){
        // some asnc logic
        setTimeout(function(){
            resolve("hi there");
        }, 3000)
    });
    return p;
}

async function main() {
    // const value = kiratAsynsFunction();   -> Promise { 'hi there' }
    // const value = kiratAsynsFunction();  with set time out -> Promise { <pending> } 
    let value = await kiratAsynsFunction();   // hi there (await)
    console.log("hello");
    console.log(value);
}

main();