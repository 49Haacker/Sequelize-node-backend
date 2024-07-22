import { Router } from "express";
import { loginUser } from "../controllers/user.controler.js";

const router = Router();

router.get("/login", loginUser);

export default router;
