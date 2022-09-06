import express from "express";
import { getAllWords, addWord, getWordById, updateWordById } from "../controllers/word-controller.js";

const router = express.Router();

router.post("/word-form",addWord);
router.get("/words",getAllWords);
router.get("/:id",getWordById);
router.put("/edit/:id",updateWordById);

export default router;