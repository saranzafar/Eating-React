import { AsyncHandler } from '../utils/AsyncHandler.js'
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const registerUser = AsyncHandler(async (req, res) => {
    //get the user details from frontend
    // validate
    // check if the user already exist - username, email
    // create user object - create entery in DB
    // remove password filed from response
    // check for user creation
    // return response

    const { name, password, email } = req.body;
    console.log('email: ', email);
    console.log('password: ', password);

    //validation
    if (!name || !password || !email) {
        throw new ApiError(400, "Please provide all fields");
    }

    // check if the user already exist - username, email
    const existingUser = User.findOne({ email })// check it again
    if (existingUser) {
        throw new ApiError(409, "User with this email already exist")
    }

    // create user object - create entery in DB
    const user = await User.create({
        name,
        password,
        email
    })


    // remove password filed from response
    const createdUser = await user.findById(user._id).select(
        "-password"
    )


    // check for user creation
    if (!createdUser) {
        throw new ApiError("Something went wrong while registering the user")
    }

    // return response
    return res.status(201).json(
        new ApiResponse(200, "User Registered Successfully", createdUser)
    )
})

export { registerUser }