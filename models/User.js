import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profilePic: {
        type: String,
    },
    coverPic: {
        type: String,
    },
    razor_id: {
        type: String,
    },
    razor_secret: {
        type: String,
    }
}, { timestamps: true });   

export default mongoose.models.User || mongoose.model('User', UserSchema);