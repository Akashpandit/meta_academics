import mongoose from "mongoose";

const Schema = mongoose.Schema;
const wordSchema = new Schema({
    word:{
        type: String,
        required: true,
        trim: true
    },
    uploadDate:{
        type: String,
        required: true,
        trim: true
    },
    meaning:{
        type: String,
        required: true,
        trim: true
    },
    pronunciation:{
        type: String,
        required: true,
        trim: true
    },
    sentence:{
        type: String,
        required: true,
        trim: true
    },
    synonyms:{
        type: String,
        required: true,
        trim: true
    },
    antonyms:{
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
});

export default mongoose.model("Word",wordSchema);