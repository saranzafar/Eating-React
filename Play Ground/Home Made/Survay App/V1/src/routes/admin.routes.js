import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { addQuestion, deleteQuestion, updateAdminInfo } from "../controllers/admin.controller.js";

const router = Router();

//secure routes
router.route("/add-question").post(verifyJwt,addQuestion)
router.route("/c/:questionId").delete(verifyJwt,deleteQuestion)
router.route("/update-info").post(verifyJwt,updateAdminInfo)

export default router