const express = require('express');
const habitList = require("./habitList");
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT  || 4000
const app = express();


app.get("/", (req, res) => {
    res.send("API is running...")
});


app.get("/habitList", (req, res) => {
    res.json(habitList)
})

app.get("/habitList/:id", (req, res) =>{
    const habit = habitList.find((n) => n.id === req.params.id)
    res.send(habit)
})


console.log(module)
app.listen(PORT, ()=>{console.log(`app is listening on ${PORT}`)})