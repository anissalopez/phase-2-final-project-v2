import express from "express";
const router = express.Router();
import { getHabits, createHabit, getHabitById, updateHabit} from "../controllers/habitController.js"
import { protect } from "../middlewares/authMiddleware.js"


router.route('/').get(protect, getHabits);
router.route('/create').post(protect, createHabit);
router.route('/:id').get(getHabitById).put(protect, updateHabit)

export default router;
