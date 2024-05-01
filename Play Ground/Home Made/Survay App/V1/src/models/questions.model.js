import mongoose, { Schema } from "mongoose";

const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    options: [
        {
            optionText: {
                type: Boolean,
                required: true
            },
        }
    ],
    feedBack: {
        type: String,
    }

}, { timestamps: true })

export const Question = mongoose.model("Question", questionSchema)