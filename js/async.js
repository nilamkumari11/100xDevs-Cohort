// // Asynchronous Function

// function findSum() {
//     let sum = 0;
//     for(let i = 0; i<= 100; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }

// setTimeout(findSum, 1000);
// console.log("second line");


// to make it Synchronous 
// dumb way

function findSum() {
    let sum = 0;
    for(let i = 0; i<= 100; i++) {
        sum += i;
    }
    console.log(sum);
}

//busy waiting
function syncSleep(){
    let a = 1;
    for( let i = 0; i< 10000; i++) {
        a++;
    }
}

syncSleep();
findSum();
// setTimeout(findSum, 1000);
console.log("second line");

// common asynchronous functions
// setTimeout
// fs.ReadFile -> read file from file system
// fetch -> to fetch some data from API endpoint


