const router = require("express").Router();
const SalonManager = require("../models/SalonManager");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_TOKEN = "MYSECRET";

// Register

router.post("/register", async (req, res) => {
  const user = req.body;

  // check if username or email is already taken by another user already

  const takenEmail = await SalonManager.findOne({ email: user.email });

  if (takenEmail) {
    res.json({
      message: "Account with same email has already been registered",
    });
  } else {
    user.password = await bcrypt.hash(req.body.password, 10);
    const dbUser = new SalonManager({
      email: user.email.toLowerCase(),
      password: user.password,
      salonName: user.salonName,
      contactNumber: user.contactNumber,
      address: user.address,
    });

    dbUser.save();
    res.json({ message: "Success", dbUser });
  }
});

// Login

router.post("/login", async (req, res) => {
  const userLogginIn = req.body;

  SalonManager.findOne({ email: userLogginIn.email }).then((dbUser) => {
    if (!dbUser) {
      return res.json({ message: "Invalid Email or Password" });
    }
    bcrypt.compare(userLogginIn.password, dbUser.password).then((isCorrect) => {
      if (isCorrect) {
        return res.json({
          message: "Success",
          dbUser,
        });
      } else {
        return res.json({
          message: "Invalid Username or Password",
        });
      }
    });
  });
});

function verifyJWT(req, res, next) {
  const token = req.headers["x-access-token"]?.split(" ")[1];
  if (token) {
    jwt.verify(token, SECRET_TOKEN, (err, decoded) => {
      if (err)
        return req.json({
          isLoggedIn: false,
          message: "Failed to Authenticate",
        });
      req.user = {};
      req.user.id = decoded.id;
      req.user.username = decoded.username;
      next();
    });
  } else {
    res.json({ message: "Incorrect Token Given", isLoggedIn: false });
  }
}

router.get("/getUsername", verifyJWT, (req, res) => {
  res.json({ isLoggedIn: true, username: req.user.username });
});

module.exports = router;
