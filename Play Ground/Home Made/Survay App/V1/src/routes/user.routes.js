import { Router } from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser } from "../controllers/user.controller.js"
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { addQuestion } from "../controllers/admin.controller.js";

const router = Router();

router.route('/register').post(registerUser)

router.route("/login").post(loginUser)

//secure routes
router.route("/logout").post(verifyJwt, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/add-question").post(addQuestion)
router.route("/c/:questionId").get(addQuestion)

export default router