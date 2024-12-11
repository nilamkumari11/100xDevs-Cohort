//rest API, http
// http can be accessed by any browser, mobile, or backend applications
// rest can only be accessed by backend applications

const express = require('express')
const app = express()
// const port = 3000

app.get('/route-handler', function(req, res){
    // req -> headers, body, query parameters
    // do machine learning model
    res.json({
        name:"nilam",
        age:20
    })
})

app.post('/conversations', function(req, res){
    res.send('<b>hi there<b>')
})

// app.get('/', function(req, res){
//     // let a = 0;
//     // console.log("request has been reached");
//     // for(let i = 0; i<10000000000000; i++) {
//     //     a=a+1;
//     // }
    

//   res.send('Hello World!')
// })

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})