import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    events: [{
        type: mongoose.Types.ObjectId,
        ref: "Event"
    }]
});

export default mongoose.model("User", userSchema);