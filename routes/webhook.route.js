import express from "express";
import { clerkwebhook } from "../controllers/webhook.controller.js";
const router = express.Router();

router.post("/clerk",clerkwebhook)

export default router;

