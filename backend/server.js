import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"



dotenv.config();
connectDB();



const app = express();
app.use(express.json());
app.use(cors());

app.use('/data/users', userRoutes)


app.get("/", (req, res) => {
    res.send("API is running...")
});










const PORT = process.env.PORT  || 4000

app.listen(PORT, ()=>{console.log(`app is listening on ${PORT}`)})