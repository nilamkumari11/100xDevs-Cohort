//length
str = "Hello World";
console.log(str.length);

// indexOf
target = "World";
console.log(str.indexOf(target));

// Not present in str then -1

//lastIndexOf
str2 = "Hello World World World"
console.log(str2.lastIndexOf(target));

//slice -> substring
console.log(str.slice(2, 5)); // last index not included

console.log(str.substr(2, 5)); // second argument give length till what we want
//substr function now not in use

//replace("world", "guys") -> replace a subtring

//splitString
//trim -> remove space
//toUpper
// toLower

//parseInt -> converts to Int

console.log(parseInt("42"));
console.log(parseInt("nilam42px")); //not converted
console.log(parseInt("3.14"));


console.log(parseFloat("42"));
console.log(parseFloat("nilam42px")); //not converted
console.log(parseFloat("3.14"));


//Arrays
 //push (at end)
 //pop (at end)
 //shift (at front)
 // unshift (at end)
 //concat
 

 //foreach

 const initialArray = [1, 2, 3]

function logThing(str) {
    console.log(str);
} 

initialArray.forEach(logThing)


// map,filter, find, sort


//classes

class Animal{
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    } 

    static myType(){
        console.log("animal");
    }

    speak() {
        console.log("Hi there " + this.speaks);
    }
}

let dog = new Animal("dog", 4, "barks"); //object
let cat = new Animal("cat", 4, "Meow");
dog.speak();
cat.speak(); // of object
Animal.myType(); //of class


//Date class

const currDate = new Date();
console.log(currDate);
console.log(currDate.getMonth() + 1);
console.log(currDate.getDate());
console.log(currDate.getFullYear());
console.log(currDate.getYear()); // year - 1900

console.log("Time in Milliseconds since 1970 ", currDate.getTime());  //epoch time stamp
