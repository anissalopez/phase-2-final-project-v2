import mongoose from "mongoose";

const habitSchema = mongoose.Schema(
  {
    habitName: {
      type: String,
      required: true,
    },
    datesCompleted: {
      type: Array,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Habit = mongoose.model("Habit", habitSchema);

export default Habit;