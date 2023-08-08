const express = require('express');
const habitList = require("./data");
const dotenv = require('dotenv');


dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("API is running...")
});


app.get("/data", (req, res) => {
    res.json(habitList)
})

app.get("/data/:id", (req, res) =>{
    const habit = habitList.find((n) => n.id === req.params.id)
    res.send(habit)
})

const PORT = process.env.PORT  || 4000

app.listen(PORT, ()=>{console.log(`app is listening on ${PORT}`)})