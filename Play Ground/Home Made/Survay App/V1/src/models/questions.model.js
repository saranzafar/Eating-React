import mongoose, { Schema } from "mongoose";

const questionSchema = new Schema({
    questionText: {
        type: String,
        required: true
    },
    options: [{
        optionText: {
            type: String,//need to be boolean
            required: true
        },
    },]
}, { timestamps: true })

export const Question = mongoose.model("Question", questionSchema)