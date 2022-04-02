const router = require("express").Router();

const User = require('../models/User');

const jwt = require("jsonwebtoken")


// Register

router.post('/register', async (req,res) =>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (err){
        res.status(500).json(err)
    }
});

// Login

router.post("/login", async (req,res)=>{
    try{
        const user = await User.findOne({ username: req.body.username})
        !user && res.status(401).json("Wrong Credentials!")
        // password != req.body.password && res.status(401).json("Wrong Password")

        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json(err)
    }

})

module.exports = router;