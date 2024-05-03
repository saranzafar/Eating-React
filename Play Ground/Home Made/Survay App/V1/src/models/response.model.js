import mongoose, { Schema } from "mongoose";

const responseSchema = new Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true });

export const Response = mongoose.model('Response', responseSchema)   