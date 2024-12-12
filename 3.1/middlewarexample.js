//Ride 
// ticket checker and rides both are middlwares
// ride is route handler, as it is the last one

const express = require('express');

const app = express();

//function that returns a boolean whether age is > 14
// function correctAge(age) {
//     if(age >= 14){
//         return true;
//     }
//     return false;
// }
// app.get("/ride1", function(req, res){
//     if(correctAge(req.query.age)){
//         res.json({
//             msg: "You have succesfully riden ride 1"
//         })
//     } else {
//         res.status(411).json({
//             msg: "You are not old enough"
//         })
//     }
// })
// app.get("/ride2", function(req, res){
//     if(correctAge(req.query.age)){
//         res.json({
//             msg: "You have succesfully riden ride 1"
//         })
//     } else {
//         res.status(411).json({
//             msg: "You are not old enough"
//         })
//     }
// })

//using middlewares
function correctAgeMiddleware(age) {
    if(age >= 14){
        next();
    } else {
        res.json({
            msg: "Sorry you are not old enough"
        })
    }
}

//if all are using same one middleware
// app.use(correctAgeMiddleware); // attached to below will go to this then...

app.get("/ride1", correctAgeMiddleware, function(req, res){
    res.json({
        msg: "You have succesfully riden ride 1"
    })
})

app.get("/ride2", correctAgeMiddleware, function(req, res){
    res.json({
        msg: "You have succesfully riden ride 1"
    })
})

app.listen(3000);