import { Router } from "express";
import { login, signup } from "../controllers/authControllers";
import { checkfrontend } from "../middlewares/authvalidtor";
const router = Router();

//@ts-ignore
router.post("/login", login);
//@ts-ignore
router.post("/signup", signup);
//@ts-ignore
router.get("/check", checkfrontend);

export default router;
