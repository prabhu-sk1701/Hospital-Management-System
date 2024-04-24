import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "At least 3 characters required."],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "At least 3 characters required."],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email id."],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain exactly 10 digits"],
    maxLength: [10, "Phone number must contain exactly 10 digits"],
  },
  aadhar: {
    type: String,
    required: true,
    minLength: [12, "Please enter a valid Aadhar number."],
    maxLength: [12, "Please enter a valid Aadhar number."],
  },
  dob: {
    type: Date,
    required: [true, "DOB is required."],
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Choose not to answer"],
  },
  appointment_date: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  doctor: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  hasVisited: {
    type: Boolean,
    default: false,
  },
  doctorId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  patientId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
