import { Router } from "express";
import { geminiHelper } from "../controllers/geminiControllers";
const router = Router();

//@ts-ignore
router.post("/geminiData", geminiHelper);

export default router;
