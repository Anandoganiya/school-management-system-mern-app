const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
    },
    class: {
      type: String,
      required: [true, "Please provide class"],
    },
    section: {
      type: String,
      required: [true, "Please provide section"],
    },
    rollnumber: {
      type: String,
      required: [true, "Please provide rollnumber"],
    },
    address: {
      type: String,
      required: [true, "Please provide addresss"],
    },
    mobile: {
      type: Number,
      required: [true, "Please provide mobile number"],
    },
    email: {
      type: String,
      required: [true, "Please provide with email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      unique: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
