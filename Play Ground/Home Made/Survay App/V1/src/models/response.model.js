import mongoose, { Schema } from "mongoose";

const responseSchema = new Schema({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Questions',
        required: true
    },
    selectedOption: [{
        optionText: {
            type: String,//need to be boolean
            required: true
        },
    },]
}, { timestamps: true })

export const Response = mongoose.model('Response', responseSchema)   