import express from "express";
import { getHabitById, getHabits, CreateHabit, DeleteHabit, UpdateHabit } from "../controllers/habitController.js"
const router = express.Router();
//import { protect } from "../middleware/authMiddleware"

//router.route("/").get(protect, getHabits);
router
  .route("/:id")
  .get(getHabitById)

 /* .delete(protect, DeleteHabit)
  .put(protect, UpdateHabit);
router.route("/create").post(protect, CreateHabit) */

export default router;