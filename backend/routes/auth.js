const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
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
      firstName: user.firstName,
      lastName: user.lastName,
      contactNumber: user.contactNumber,
      address: user.address,
    });

    dbUser.save();
    res.json({ message: "Success" });
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

// const jwt = require("jsonwebtoken");module.exports = (req, res, next) => {
//   try { const token = req.headers.authorization.split(" ")[1];
//  const decodedToken = jwt.verify(
//    token,
//    "secret_this_should_be_longer"
// ); req.userData = {
//          email: decodedToken.email,
//          userId: decodedToken.userId
//    };    next();
//   } catch (error) {
//     res.status(401).json({ message: "Auth failed!" });
//   }
// };
