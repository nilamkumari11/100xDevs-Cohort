// java script object notation

const user = '{"name" : "Nialm", "age" : "20"}'
// console.log(user[0]);

//JSON.parse
// JSON.stringify

const users = JSON.parse(user);
console.log(users["age"]);

/// ----------------------------------

const user1 = {
    name : "Nilam",
    gender : "Female"
}

const finalString = JSON.stringify(user1);
console.log(finalString[1]);