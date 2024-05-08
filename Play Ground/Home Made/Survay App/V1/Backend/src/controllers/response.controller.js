import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { AsyncHandler } from '../utils/AsyncHandler.js';
import { Question } from '../models/questions.model.js';
import { Answer } from "../models/response.model.js"
import { User } from "../models/user.model.js"

const setResponse = AsyncHandler(async (req, res) => {
    try {
        const { questionId, selectedOptionId } = req.body;
        const userId = req.user._id;

        if (!(questionId, selectedOptionId)) {
            new ApiError(401, "Please Provide reqireData")
        }

        // fetching question from DB
        const question = await Question.findById(questionId)
        if (!question) {
            throw new ApiError(400, 'Question not found');
        }

        const selectedOption = await question.options.find(option => option._id.toString() === selectedOptionId);
        if (!selectedOption) {
            throw new ApiError(400, 'Selected option not found');
        }

        // fetching user from DB
        const userInfo = await User.findById(userId)
            .select("-password -createdAt -updatedAt -refreshToken -role -name")
        if (!userInfo) {
            throw new ApiError(400, 'Question not found');
        }

        await Answer.create({
            question: question,
            selectedOption: selectedOption,
            user: userInfo
        })

        return res.status(201).json(
            new ApiResponse(200, {}, "Response added Successfully")
        );
    } catch (error) {
        throw new ApiError(501, 'Error While Saving Response to Database');
    }
});

const getResponse = AsyncHandler(async (req, res) => {
    // try {
        // Fetch all responses from the database
        const responses = await Answer.find()
            .populate({
                path: 'question',
                select: 'question options', // Specify the fields to include from the related question document
            })

        // Check if there are any responses
        if (!responses.length) {
            return res.status(404).json(new ApiResponse(404, null, 'No responses found'));
        }

        // Return the responses
        return res.status(200).json(new ApiResponse(200, responses, 'Responses fetched successfully'));
    // }
});



export {
    setResponse,
    getResponse,
}
