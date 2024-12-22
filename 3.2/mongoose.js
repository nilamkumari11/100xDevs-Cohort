const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://nilam:nilamPass@cluster0.te2ss.mongodb.net/");

const User = mongoose.model('Users', {name:String, email : String, password: String});

app.post('/signup', async function(req, res){
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await User.findOne({email: username});
    if(existingUser){
        return res.status(401).send("Username already exists ");
    }

    const user = new User({name: name,
                        email:email, 
                        password:password
                    });
user.save();

res.json({
    "msg" : "User created"
})
})


app.listen(3000);

// kitty.save().then(() => console.log('meow'));

