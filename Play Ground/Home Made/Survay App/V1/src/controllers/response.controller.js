import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Response } from "../models/response.model.js";

const uerResponse = AsyncHandler(async (req, res) => {
    const { questionId, selectedOption } = req.body;
    if (!(questionId && selectedOption)) {
        new ApiError(401, "Please select an option");
    }

    const response = await Response.aggregate([
        {
            $match: {
                question: new mongoose.Types.ObjectId(questionId),
            }
        },
        {
            $lookup: {
                from: "questions",
                localField: "question",
                foreignField: "_id",
                as: "fullQuestion"
            }
        },
        {
            $lookup: {
                from: "questions",
                localField: "selectedOption",
                foreignField: "options.optionText._id",
                as: "selectedOption"
            }
        },
        {
            $addFields: {
                question: "$fullQuestion",
                selectedOption: "$selectedOption",
            }
        }
    ])

    if (!response?.length) {
        throw new ApiError(404, "Question does not exist")
    }

    return res.status(200)
        .json(
            new ApiResponse(200, response, "Response Added Successfully")
        )
})