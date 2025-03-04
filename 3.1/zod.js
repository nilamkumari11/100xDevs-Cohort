const express = require("express");
const zod = require("zod")
const app = express();

// const schema = zod.array(zod.number()); // describe the structure of your input

// {
//     email: String
//     password: at least 8 letters
//     country: "IN" "US"
// }

const schema = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US"))
})

app.use(express.json())

app.post("/health-checkup", function(req, res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg : "input is invalid"
        })
    }else {
        res.send({
            response
        })
    }
    
    // const kidneyLength = kidneys.length;

    // res.send("You have "+ kidneyLength + " kidneys")
})

app.listen(3000);
