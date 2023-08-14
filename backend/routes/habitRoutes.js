import express from "express";
const router = express.Router();
import { getHabits, createHabit, getHabitById, updateHabit, deleteHabit} from "../controllers/habitController.js"
import { protect } from "../middlewares/authMiddleware.js"


router.route('/').get(protect, getHabits);
router.route('/create').post(protect, createHabit);
router.route('/:id').get(getHabitById).delete(protect, deleteHabit).put(protect, updateHabit)


export default router;
