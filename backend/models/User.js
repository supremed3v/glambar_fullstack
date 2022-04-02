const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {type: String ,required: true, unique: true},
    email: {type: String ,required: true, unique:true},
    password: {type: String, required: true},
    firstName: {type: String, required: true, maxlength:10},
    lastName: {type: String, required: true, maxlength:10},
    contactNumber: {type: Number, required: true, maxlength: 11, unique: true}

    
},
{timestamps: true}
)

module.exports =mongoose.model("User",UserSchema)