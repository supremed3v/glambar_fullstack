const mongoose = require("mongoose");

const SalonManagerSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    salonName: { type: String, required: true, maxlength: 10, unique: true },
    contactNumber: {
      type: Number,
      required: true,
      maxlength: 11,
      unique: true,
    },
    address: { type: String, required: true, unique: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SalonManager", SalonManagerSchema);
