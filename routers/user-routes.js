import express from "express";

const router = express.Router();
import { login, signup, getAllUsers } from "../controllers/user-controller.js";

router.post("/signup", signup);
router.post("/login", login);
router.get("/getallusers", getAllUsers);

export default router;