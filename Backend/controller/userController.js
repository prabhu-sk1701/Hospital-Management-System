import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleWare.js";
import { User } from "../models/userSchema.js";
import { generateToken } from "../utils/jwtToken.js";
export const patientRegister = catchAsyncErrors(async (req, res, next) => {
  const {
    firstName,
    lastName,
    phone,
    email,
    aadhar,
    dob,
    gender,
    password,
    role,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !phone ||
    !email ||
    !aadhar ||
    !dob ||
    !gender ||
    !password ||
    !role
  ) {
    return next(new ErrorHandler("Please fill the form completely!", 400));
  }
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User already registered.", 400));
  }
  user = await User.create({
    firstName,
    lastName,
    phone,
    email,
    aadhar,
    dob,
    gender,
    password,
    role,
  });
  generateToken(user, "User Successfully Registered.", 200, res);
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password, confirmPassword, role } = req.body;
  if (!email || !password || !confirmPassword || !role) {
    return next(new ErrorHandler("Please provide all details", 400));
  }
  if (password !== confirmPassword) {
    return next(
      new ErrorHandler("Passwords do no match! Please try again.", 400)
    );
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Incorrect email or Password.", 400));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Incorrect email or Password.", 400));
  }
  if (role !== user.role) {
    return next(new ErrorHandler("User with this role not found.", 400));
  }
  generateToken(user, "User Successfully Logged in.", 200, res);
});

export const addNewAdmin = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, phone, email, aadhar, dob, gender, password } =
    req.body;
  if (
    !firstName ||
    !lastName ||
    !phone ||
    !email ||
    !aadhar ||
    !dob ||
    !gender ||
    !password
  ) {
    return next(new ErrorHandler("Please fill the form completely!", 400));
  }
  const isRegistered = await User.findOne({ email });
  if (isRegistered) {
    return next(new ErrorHandler(`${isRegistered.role} already exists!`));
  }
  const admin = await User.create({
    firstName,
    lastName,
    phone,
    email,
    aadhar,
    dob,
    gender,
    password,
    role: "Admin",
  });
  res.status(200).json({
    success: true,
    message: "New admin registered successfully!",
  })
});
