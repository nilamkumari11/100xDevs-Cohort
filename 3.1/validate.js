// if this in an array of number with at least one input, then return true, else false

const zod = require("zod");

function validateInput(arr) {
    // if(typeof arr == "object" && arr.length >= 1){
    //     return 
    // }
    // all kind of checks without zod
    
    // const schema = zod.array(zod.number());

    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(arr);
    console.log(response);
}

// validateInput([1, 2, 3,]);

validateInput({
    email:"nilam@gmail.com",
    password: "6483gjscgai548"
})

app.post("/login", function(req, res){
    const response = validateInput(req,body);
    if(!response.success){
        res.json({
            msg :"Your inputs are invalid"
        })
        return;
    }
})