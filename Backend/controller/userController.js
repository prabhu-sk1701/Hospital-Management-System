import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleWare.js"
import { User } from "../models/userSchema.js";

export const patientRegister = catchAsyncErrors(async(req,res,next)=>{
    const {
        firstName,
        lastName,
        phone,
        email,
        aadhar,
        dob,
        gender,
        password,
        role

    } = req.body;
    if(
        !firstName ||
        !lastName ||
        !phone ||
        !email ||
        !aadhar ||
        !dob ||
        !gender ||
        !password ||
        !role){
            return next(new ErrorHandler("Please fill the form completely!", 400));
        };
    let user = await User.findOne({email});
    if(user){
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
        role
    });
    res.status(200).json({
        success: true,
        message: "User Successfully Registered."
    });
});