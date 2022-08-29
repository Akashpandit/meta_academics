import User from "../model/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        return console.log(err);
    }

    if (existingUser) {
        return res
            .status(400)
            .json({
                message: "Failed to add you as a User. User already exists."
            })
    }

    const hashPassword = bcrypt.hashSync(password);
    const user = new User({
        name,
        email,
        password: hashPassword,
        events: []
    });

    try {
        user.save();
    } catch (err) {
        return console.error(err);
    }

    return res.status(201).json({ user });
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email });

    } catch (err) {
        return console.log(err);
    }

    if (!existingUser) {
        return res.status(400).json({ message: "Invalid Credential / No User Found." });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid Credentials." });
    }

    res.status(200).json({ message: "Logged in successfully", user: existingUser });
}

export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find()
    } catch (err) {
        console.log(err)
    }
    if (!users) {
        return res.status(400).json({ message: "No Users found" });
    }
    return res.status(200).json({ users });
}