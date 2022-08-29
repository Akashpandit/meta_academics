import mongoose from "mongoose";

const Schema = mongoose.Schema;
const achieverSchema = new Schema({
    winner: {
        type: String,
        required: true,
        trim: true
    },
    winnerBatch: {
        type: String,
        required: true,
    },

    runnerUp: {
        type: String,
        required: true,
        trim: true
    },
    runnerUpBatch: {
        type: String,
        required: true,
    },

    secondRunnerUp: {
        type: String,
        required: true,
        trim: true
    },
    secondRunnerUpBatch: {
        type: String,
        required: true,
    },
    achieverImg: {
        type: String
    },
    event: {
        type: mongoose.Types.ObjectId,
        ref: "Event",
        required: true
    }
});

export default mongoose.model("Achiever", achieverSchema);