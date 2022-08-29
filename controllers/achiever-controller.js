import mongoose from "mongoose";
import Event from "../model/Event.js";
import Achiever from "../model/Achiever.js";

export const addAchiever = async (req, res, next) => {

    const { winner, winnerBatch, runnerUp, runnerUpBatch, secondRunnerUp, secondRunnerUpBatch, achieverImg, event } = req.body;

    let existingEvent;
    try {
        existingEvent = await Event.findById(event);
    } catch (err) {
        return console.log(err);
    }

    if (!existingEvent) {
        return res.status(400).json({ message: "Event doesnot exist" });
    }

    //create Achievers object
    const achiever = new Achiever({
        winner,
        winnerBatch,
        runnerUp,
        runnerUpBatch,
        secondRunnerUp,
        secondRunnerUpBatch,
        achieverImg,
        event
    });

    try {
        //checking if session exists
        const session = await mongoose.startSession();
        session.startTransaction(); //communicating between event and achiever documents
        await achiever.save({ session });
        existingEvent.achievers.push(achiever);
        await existingEvent.save({ session });
        await session.commitTransaction();
    } catch (err) {
        return console.log(err)
    }

    return res.status(200).json({ achiever });

}

export const getAllAchievers = async (req, res, next) => {
    let achievers;
    try {
        achievers = await Achiever.find().populate('event'); //to fetch the event of the achievers

    } catch (err) {
        return console.log(err)
    }

    if (!achievers) {
        return res.status(404).json({ message: "No Achievers found" });
    }

    return res.status(200).json({ achievers });
}

export const getAchieverById = async (req, res, next) => {
    const achieverId = req.params.id;
    let achiever;
    try {
        achiever = await Achiever.findById(achieverId);
    } catch (err) {
        return console.log(err);
    }

    if (!achiever) {
        return res.status(400).json({ message: "No achiever found" });
    }

    return res.status(200).json({ achiever });
}

//Getting the entire detail of event of each event by event id alongwith achievers
export const eventAchievers = async (req, res, next) => {
    const eventId = req.params.id;
    let eventAchievers;
    try {
        eventAchievers = await Event.findById(eventId).populate("achievers");
    } catch (err) {
        return console.log(err);
    }

    if (!eventAchievers) {
        return res.status(404).json({ message: "No Achievers found" });
    }


    return res.status(200).json({ event: eventAchievers });
}