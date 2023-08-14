import Habit  from "../models/habitModels.js"
import asyncHandler from "express-async-handler";

export const getHabits = asyncHandler(async (req, res) => {
  const habits = await Habit.find({ user: req.user._id });
  res.json(habits);
});

export const getHabitById = asyncHandler(async (req, res) => {
  const habit = await Habit.findById(req.params.id);

    if (habit) {
      res.json(habit);
    } else {
      res.status(404).json({ message: "habit not found" });
    }

   res.json(habit);
});

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


export const deleteHabit = asyncHandler(async (req, res) => {
  const habit = await Habit.findById(req.params.id);

  if (habit.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }
  console.log(habit)

  if (habit) {

    await habit.deleteOne();
    res.json({ message: "habit deleted" });
  } else {
    res.status(404);
    throw new Error("habit not Found");
  }
});

export const updateHabit = asyncHandler(async (req, res) => {
  const { habitName, datesCompleted } = req.body;

  const habit = await Habit.findById(req.params.id);

  if (habit.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (habit) {
    habit.datesCompleted = datesCompleted;
    habit.habitName = habitName;


    const updatedHabit = await habit.save();
    res.json(updatedHabit);
  }
   else {
    res.status(404);
    throw new Error("habit not found");
  }
});
