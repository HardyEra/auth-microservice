import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import apiKeyAuth from "../middleware/apiKeyAuth.js";

const router = express.Router();

router.post("/auth/register", apiKeyAuth, register);
router.post("/auth/login", apiKeyAuth, login);

export default router;
