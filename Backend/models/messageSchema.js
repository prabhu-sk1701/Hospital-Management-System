import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
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
        valiate: [validator.isEmail, "Please provide a valid email id."]
    },
    phone:{
        type: String,
        required: true,
        minLength: [11, "Phone number must contain exactly 11 digits"],
        maxLength: [11, "Phone number must contain exactly 11 digits"], 
    },
    message:{
        type: String,
        required: true,
        minLength: [11, "Message must contain exactly 10 characters"],        
    },
});

export const Message = mongoose.model("Message", messageSchema); 