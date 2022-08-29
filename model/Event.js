import mongoose from "mongoose";

const Schema = mongoose.Schema;
const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    time: {
        type: String,

    },
    description: {
        type: String
    },
    poster: {
        type: String
    },
    venue: {
        type: String
    },
    registrationLink: {
        type: String,
    },
    meetingLink: {
        type: String
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    achievers: [{
        type: mongoose.Types.ObjectId,
        ref: "Achiever"
    }]

});

export default mongoose.model("Event", eventSchema);