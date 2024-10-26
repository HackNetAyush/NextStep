import { Router } from "express";
import { login, signup } from "../controllers/authControllers";
const router = Router();

//@ts-ignore
router.post("/login", login);
//@ts-ignore
router.post("/signup", signup);

export default router;
