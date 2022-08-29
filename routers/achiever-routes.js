import express from 'express';
const router = express.Router();

import { addAchiever, getAllAchievers, getAchieverById, eventAchievers } from '../controllers/achiever-controller.js';

router.post('/addachiever', addAchiever);
router.get('/getallachievers', getAllAchievers);
router.get('/achiever/:id', getAchieverById);
router.get('/event/achiever/:id', eventAchievers);

export default router;