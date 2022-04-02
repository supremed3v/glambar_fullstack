const express = require("express");
// const cors = require("cors");s
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

const app = express();
const PORT = 6000;

// Applying cors
// app.use(cors());
// Connecting mangodb
const mongoDB =
  "mongodb://admin:admin@cluster0-shard-00-00.j87vl.mongodb.net:27017,cluster0-shard-00-01.j87vl.mongodb.net:27017,cluster0-shard-00-02.j87vl.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-t26kf4-shard-0&authSource=admin&retryWrites=true&w=majority";
// First Api
mongoose.connect(mongoDB).then(()=> console.log("db working"))
.catch((err)=>{
  console.log(err);
})

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);





app.listen(PORT, ()=>{
  console.log("Server is up");
})