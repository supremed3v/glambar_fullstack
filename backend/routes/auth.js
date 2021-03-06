const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken")
const CryptoJS = require("crypto-js");

// Register

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      "Secret Password"
    ).toString(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    contactNumber: req.body.contactNumber
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    !user && res.status(401).json("Wrong Credentials!")

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      "Secret Password"

    )

    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    OriginalPassword != req.body.password && res.status(401).json("Wrong Password")
    const accessToken = jwt.sign(
      {
        id: user._id,
      }, "jwtSecret",
      { expiresIn: '3d' }

    ).toString();

    const { password, ...others } = user._doc;
    console.log(accessToken);

    res.status(200).json(others)
  }
  catch (err) {
    res.status(500).json(err)
  }

})

module.exports = router;
