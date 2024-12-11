// creating http server
// express
// node default library => no

const express = require("express");

const app = express();

function fun(n){
    let ans = 0;
    for(let i = 1; i<=n; i++) {
        ans=ans+1;
    }
    return ans;
}

//req -> request (inputs)
//res -> response (data to send back)
app.get("/", function(req, res){ //first argument is route,second is callback function
    const n = req.query.n;
    const ans = fun(n);
    res.send("hi there ans is " + ans);
})

app.listen(3000);