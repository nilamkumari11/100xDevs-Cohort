const express = require("express");

const app = express();



//ugly way
// app.get("/health-checkup", function(req, res){
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if(username === "nilam" && password === "pass") {
//         if(kidneyId == 1 || kidneyId == 2) {
//             // do something with kidney
//             res.json({
//                 msg: "Your kidney is fine"
//             })
//         } else {
//             res.json ({
//                 msg : "bad input"
//             })
//         }
//     }

//     res.status(400).json({"msg" : "Something up with inputs"})
// });

//middlewares 
// many callback functions in middle

// app.get("/health-checkup", function(req, res, next){  // for multiple callback funtions there is another input next
//     //next is a function in itself which we can call when we think things are fine
//     console.log("hi from req1");
//     next();
// }, function(req, res){
//     console.log("hi from req2");
//     res.send("something")  // send text
// })

//res.json sends json





//calculate number of requests  

// let numberOfReq = 0;
// function calculateRequests(req, res, next){
//     numberOfReq++;
//     console.log(numberOfReq);
//     next();
// }

// app.use(calculateRequests); // purpose -> any route after this will have this middleware
// app.use(express.json()) // json() (calling) bcoz -> this return a function 

// app.get("/health-checkup", function(req, res){

// });

// app.get("/health-checkup2",calculateRequests, function(req, res){

// });

app.use(express.json()); // this middleware extracts the body

app.post("/health-checkup", function(req, res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have "+ kidneyLength + " kidneys")
})


//global catches -? Error handling middlewares 
//last middleware at the end -> called when exception occurs above
// exception like an empty input or anything

app.use(function(err, req, res, next){
    res.json({
        msg : "Something up with our server"
    })
})

app.listen(3000);
