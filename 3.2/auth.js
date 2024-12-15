const express = require("express");
const jwt = require("jsonwebtoken"); //implementation of JWT
const jwtPassword = "123456";

const app = express();

app.use(express.json());

//in memory db
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
//   const exist = false;
//   for(let i = 0; i<ALL_USERS.length; i++) {
//     if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
//         exist = true;
//     }
//      return exist;

// using find function

    const user = ALL_USERS.find(u => u.username === username && u.password === password);
    if(user){
        return true;
    }
    return false;
    
}


app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

//when a post req with correct username and pass is sent then a token is generated
//also the token can be verified in jwt.io 

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
//   try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
        users: All_USERS.filter(function(value){
            if(value.username == username){
                return false;
            } else {
                return true;
            }
        })
    })
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
});

app.listen(3000)
