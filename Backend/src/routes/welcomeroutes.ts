import { Router } from "express";
import { welcome } from "../controllers/welcommingControllers";
const router = Router();

//@ts-ignore
router.put("/welcome", welcome);

export default router;
