import express from 'express';
import mongoose from 'mongoose';

import userRouter from './routers/user-routes.js';
import eventRouter from './routers/event-routes.js';
import achieverRouter from './routers/achiever-routes.js';

import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

//routes for api
app.use("/api/user", userRouter)
app.use("/api/event", eventRouter)
app.use("/api/achiever", achieverRouter)


mongoose.connect(process.env.MONGO_CONNECTION_URL)
    .then(() => app.listen(PORT))
    .then(() => console.log("Connected to database and listening on port " + PORT))
    .catch((err) => console.err(err));