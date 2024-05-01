import { AsyncHandler } from "../utils/AsyncHandler";
import { Question } from "../models/questions.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";

const addQuestion = AsyncHandler(async (req, res) => {

    /*
    - take data
    - add to database
    */

    const { question, options, feedBack } = req.body

    if (!question || !options || options.length < 2) {
        throw new ApiError(400, "Question and Options must be provided")
    }

    // adding to DB
    let newQuestion;
    try {
        newQuestion = await Question.create({
            question,
            options,
            feedBack
        });
    } catch (error) {
        throw new ApiError(500, "Error while adding new data")
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, newQuestion, "Data Added Successfully")
        )
});

const deleteQuestion = AsyncHandler(async (req, res) => {
    const { questionId } = req.params;
    if (!questionId?.trim()) {
        throw new ApiError(400, "Question not be found")
    }

    let deletedQuestionResponse;
    try {
        deletedQuestionResponse = await Question.deleteOne({ questionId });
    } catch (error) {
        throw new ApiError(501, "Error While deleting data from DB")
    }
    console.log("Deleted Question Response:", deletedQuestionResponse);
})

export {
    addQuestion,
    deleteQuestion,
}