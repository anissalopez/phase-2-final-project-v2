import asyncHandler from "express-async-handler";
import User from "../models/userModels.js";
import generateToken from "../Utils/generateToken.js";

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id)
      });
    } 
    else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    };
    });

const registerUser = asyncHandler (async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(404);
        throw new Error("User already exists");
    };

    const user = await User.create({
        name,
        email,
        password
     });

    if (user) {
        res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
    });
    }

    else {
    res.status(400);
    throw new Error("Invalid user data received");
  }
});

export { authUser, registerUser };