import mongoose from 'mongoose';

import Event from '../model/Event.js';
import User from '../model/User.js';

export const addEvent = async (req, res, next) => {

    const { name, startDate, endDate, time, description, poster, user } = req.body;

    let existingUser;
    try {
        existingUser = await User.findById(user);
    } catch (err) {
        return console.log(err);
    }

    if (!existingUser) {
        return res.status(400).json({
            message: "User not found"
        });
    }

    //creating the event object
    const event = new Event({
        name,
        startDate,
        endDate,
        time,
        description,
        poster,
        user,
        achievers: []
    });

    try {
        //checking if session exists
        const session = await mongoose.startSession();
        session.startTransaction(); //as we are communicating between User and Event documents
        await event.save({ session });
        existingUser.events.push(event); //pushing the event to user
        await existingUser.save({ session });
        await session.commitTransaction();
    } catch (err) {
        return console.log(err)
    }

    return res.status(200).json({ event });


}

export const getAllEvents = async (req, res, next) => {
    let events;
    try {
        events = await Event.find().populate('user');
    } catch (err) {
        return console.log(err)
    }

    if (!events) {
        return res.status(404).json({ message: "No Events found" });
    }

    return res.status(200).json({ events });
}

export const getEventById = async (req, res, next) => {
    const eventId = req.params.id;
    let event;
    try {
        event = await Event.findById(eventId);
    } catch (err) {
        return console.log(err);
    }

    if (!event) {
        return res.status(400).json({ message: "No events found" });
    }

    return res.status(200).json({ event });
}