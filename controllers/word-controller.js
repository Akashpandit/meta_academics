import mongoose from "mongoose";
import Word from "../model/Word.js";
import User from "../model/User.js";

export const addWord = async (req,res,next) =>{
    const {word,uploadDate, meaning, pronunciation, sentence, userId, synonyms, antonyms} = req.body;

    let currWord;

    try{
        currWord = await Word.findOne({word});
    }
    catch(err){
        return console.log(err);
    }

    if(currWord){
        return res.status(400).json({message: "Word already exists."})
    }

    const wordObj = new Word({
        word,
        uploadDate,
        meaning,
        pronunciation,
        sentence,
        userId,
        synonyms,
        antonyms
    });

    try{
        wordObj.save();
    }
    catch(err){
        return console.log(err)
    }

    return res.status(200).json({wordObj});

}

export const getAllWords = async (req,res,next) =>{
    let words;
    try{
        words = await Word.find();
    }
    catch(err){
        console.log(err);
    }

    if(!words){
        return res.status(400).json({message:"No words available in the database."});
    }

    return res.status(200).json({ words });
}

export const getWordById = async (req,res,next) =>{

    const wordId = req.params.id;
    let word;
    try{
        word = await Word.findById(wordId);
    }
    catch(err){
        console.log(err);
    }

    if(!word){
        return res.status(400).json({message:"No such word available in the database."});
    }

    return res.status(200).json({ word });

}

export const updateWordById = async (req,res,next) =>{
    let wordId = req.params.id;
    let word ;

    try{
        word = await Word.findById(wordId);
    }
    catch(err){
        console.log(err);
    }

    if(!word){
        return res.status(400).json({message:"No such word available in the database."});
    }

    let updateWordFields = {
        word: req.body.word,
        uploadDate: req.body.uploadDate,
        meaning: req.body.meaning,
        pronunciation: req.body.pronunciation,
        sentence: req.body.sentence,
        synonyms: req.body.synonyms,
        antonyms: req.body.antonyms,
        userId: req.body.userId
    }

    try{
        const updatedWord = await Word.findByIdAndUpdate(wordId,{$set: updateWordFields},{new: true});

        if(updatedWord == null)
        {
            res.status(400).json({
                message: "No such word available in the database."
            })
        }
        else{
            res.status(200).json({
                message: "Word updated successfully.",
                updatedWord: updatedWord
            })
        }

    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Something went wrong.",
            error: err
        })
    }

    // return res.status(200).json({ word });

}