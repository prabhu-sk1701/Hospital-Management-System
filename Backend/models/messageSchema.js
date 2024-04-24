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
        minLength: [10, "Phone number must contain exactly 10 digits"],
        maxLength: [10, "Phone number must contain exactly 10 digits"], 
    },
    message:{
        type: String,
        required: true,
        minLength: [10, "Message must contain at least 10 characters"],        
    },
});

export const Message = mongoose.model("Message", messageSchema); 