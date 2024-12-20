import { Router } from "express";
import { signUpRouter } from "./sign-up/route";
import { SignInRouter } from "./sign-in/route";
import { SignOutRouter } from "./sign-out/route";

const router = Router();

router.use("/auth", signUpRouter, SignInRouter, SignOutRouter);
export { router as authRoutes };
