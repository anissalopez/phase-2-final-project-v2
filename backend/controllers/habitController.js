import Habit  from "../models/habitModels.js"
import asyncHandler from "express-async-handler";

// @desc    Get logged in user notes
// @route   GET /api/notes
// @access  Private
export const getHabits = asyncHandler(async (req, res) => {
  const habits = await Habit.find({ user: req.user._id });
  res.json(habits);
});

//@description     Fetch single Note
//@route           GET /api/notes/:id
//@access          Public
export const getHabitById = asyncHandler(async (req, res) => {
  const habit = await Habit.findById(req.params.id);

  if (habit) {
    res.json(habit);
  } else {
    res.status(404).json({ message: "habit not found" });
  }

  res.json(habit);
});

//@description     Create single Note
//@route           GET /api/notes/create
//@access          Private
export const createHabit = asyncHandler(async (req, res) => {
  const { habitName, datesCompleted  } = req.body;

   if(!habitName){
    res.status(400)
    throw new Error('Please enter a habit')
   }
   else{
    const habit = new Habit({ user: req.user._id, habitName, datesCompleted });

    const createdHabit = await habit.save();

    res.status(201).json(createdHabit);

   }
   
});

//@description     Delete single Note
//@route           GET /api/notes/:id
//@access          Private
export const DeleteHabit = asyncHandler(async (req, res) => {
  const habit = await habit.findById(req.params.id);

  if (habit.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (habit) {
    await habit.remove();
    res.json({ message: "habit deleted" });
  } else {
    res.status(404);
    throw new Error("habit not Found");
  }
});

// @desc    Update a note
// @route   PUT /api/notes/:id
// @access  Private
export const UpdateHabit = asyncHandler(async (req, res) => {
  const { habitName, datesCompleted } = req.body;

  const habit = await Habit.findById(req.params.id);

  if (habit.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (habit) {
    habit.habitName = habitName


    const updatedHabit = await habit.save();
    res.json(updatedHabit);
  }
   else {
    res.status(404);
    throw new Error("habit not found");
  }
});
