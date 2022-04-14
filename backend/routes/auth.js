const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_TOKEN = "MYSECRET";

// Register

router.post("/register", async (req, res) => {
  const user = req.body;

  // check if username or email is already taken by another user already

  const takenUsername = await User.findOne({ username: user.username });
  const takenEmail = await User.findOne({ email: user.email });

  if (takenUsername || takenEmail) {
    res.json({ message: "Username or email has already been taken" });
  } else {
    user.password = await bcrypt.hash(req.body.password, 10);
    const dbUser = new User({
      username: user.username.toLowerCase(),
      email: user.email.toLowerCase(),
      password: user.password,
    });

    await dbUser.save();
    const token = jwt.sign({ userId: req.user._id }, SECRET_TOKEN);
    console.log(req.user._id);
    res.send({ token: token });
  }
});

// Login

router.post("/login", async (req, res) => {
  const userLogginIn = req.body;

  User.findOne({ username: userLogginIn.username }).then((dbUser) => {
    if (!dbUser) {
      return res.json({ message: "Invalid Username or Password" });
    }
    bcrypt.compare(userLogginIn.password, dbUser.password).then((isCorrect) => {
      if (isCorrect) {
        return res.json({
          message: "Success",
        });
      } else {
        return res.json({
          message: "Invalid Username or Password",
        });
      }
    });
  });
});

router.get("/getUsername", (req, res) => {
  res.json({ isLoggedIn: true, username: req.user.username });
});

module.exports = router;
