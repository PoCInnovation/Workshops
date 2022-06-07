import express, { Request, Response } from 'express';
import { sendVerificationMail, signinUser, signupUser, verifyUserMail } from "../controllers/controllerLogin";
import { signupUserValidation, signinUserValidation, verifyUserMailValidation, sendVerificationMailValidation } from "../midleware/midleware";

const router = express.Router();

router.post("/signup", signupUserValidation, signupUser);
router.post("/signin", signinUserValidation, signinUser);
router.post("/send-verification-mail", sendVerificationMailValidation, sendVerificationMail);
router.post("/verfiy-user-mail", verifyUserMailValidation, verifyUserMail);

export default router;