const express = require("express");
const app = express();

var users = [
    {
        name: "John",
        kidneys: [{
            healthy:false
        }]
    }
];

app.use(express.json());

app.get("/", function(req, res){
    const johnKidney = users[0].kidneys;
    const numberOfKidneys = johnKidney.length;
    let healthyKidneys = 0;
    for(let i = 0; i<numberOfKidneys; i++) {
        if(johnKidney[i].healthy){
            healthyKidneys++;
        }
    }
    const unhealthyKidneys = numberOfKidneys - healthyKidneys;
    res.json({
        numberOfKidneys,
        healthyKidneys,
        unhealthyKidneys
    })
})

// send data in the body
app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })
})

app.put("/", function(req, res){
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }

    res.json({});
})

app.delete("/", function(req, res){
    if(!isThereAtLeastOneHealthyKidney()){
        res.sendStatus(411).json({
             msg: "You have no bad kidneys"
        });
    } else {
        const newKidneys = [];
    for(let i = 0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "done"})
    }
})

function isThereAtLeastOneHealthyKidney(){
    for(let i = 0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            return true;
        }

        return false;
    }
}
app.listen(3000);