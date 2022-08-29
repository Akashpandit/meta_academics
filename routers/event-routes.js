import express from 'express';
const router = express.Router();

import { addEvent, getAllEvents, getEventById } from '../controllers/event-controller.js';

router.post('/addevent', addEvent);
router.get('/getevents', getAllEvents);
router.get('/event/:id', getEventById);

export default router;