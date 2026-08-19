import { Router } from "express";
import { login, logoutUser, registerUser } from "../controllers/auth.controllers.js"
import { userLoginValidator, userRegisterValidator } from "../validators/index.js"
import { validate } from "../middlewares/validator.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router();

router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, login);
// Protected routes
router.route("/logout").post(verifyJWT, logoutUser);

export default router;
