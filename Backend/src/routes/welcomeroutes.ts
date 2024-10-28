import { Router } from "express";
import { welcome, updatedes } from "../controllers/welcommingControllers";
const router = Router();

//@ts-ignore
router.put("/welcome", welcome);
//@ts-ignore
router.put("/updatedes", updatedes);

export default router;
