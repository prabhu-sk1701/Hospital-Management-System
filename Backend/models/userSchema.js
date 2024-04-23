import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3, "At least 3 characters required."] 
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3, "At least 3 characters required."] 
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email id."]
    },
    phone:{
        type: String,
        required: true,
        minLength: [11, "Phone number must contain exactly 11 digits"],
        maxLength: [11, "Phone number must contain exactly 11 digits"], 
    },
    aadhar:{
        type: String,
        required: true,
        minLength: [12, "Please enter a valid Aadhar number."],
        maxLength: [12, "Please enter a valid Aadhar number."],        
    },
    dob:{
        type: Date,
        required: [true, "DOB is required."],
    },
    gender:{
        type: String,
        required: true,
        enum: ["Male", "Female", "Choose not to answer"],
    },
    password:{
        type: String,
        required: true,
        minLength: [8, "Password must contain at least 8 characters!"],
        select: false,
    },
    role:{
        type: String,
        required: true,
        enum: ["Admin", "Doctor", "Patient"],
    },
    doctorDepartment:{
        type: String,
    },
    doctorProfile:{
        public_id: String,
        url: String,
    },
});

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 8);
});

userSchema.methods.comparePassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRES,
    });
};

export const User = mongoose.model("User", userSchema); 