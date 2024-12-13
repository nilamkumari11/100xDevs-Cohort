// how does jwt verify user and how verifies the signature

const jwt = require("jsonwebtoken");

const password = "123";

const token = jwt.sign({
    name:"Nilam"
}, password);
//someone who decoded without password, when will go and verify will fail in the original server without the password

//jwt creates this token
//this token was signed by this password
console.log(token);

//get back this token, we can do 
jwt.verify(token, password); //verify it was hashed by me or not

//this token has been generated using this password and hence this token can be only verified by this token 

// the token we get here can be decoded by anyone without the password, jwt.io 