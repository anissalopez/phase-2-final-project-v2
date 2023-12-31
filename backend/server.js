import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import habitRoutes from "./routes/habitRoutes.js";
import { notFound, errorHandler} from "./middlewares/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/data/users', userRoutes);
app.use('/data/habits', habitRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT  || 5000;
app.listen(PORT, ()=>{console.log(`app is listening on ${PORT}`)})