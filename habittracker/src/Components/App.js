import React, { useState } from "react";
import {Routes, Route} from "react-router-dom";
import {subWeeks, addWeeks} from "date-fns";
import { FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import MonthlyData from "./MonthlyData";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Navigation from "./NavBar";
import WeekData from "./WeekData";
import HabitForm from "./AddHabit";
import HabitContainer from "./HabitContainer";



function App() {
    const [activeDay, setActiveDay] = useState(new Date());


  return (
    <div>
    <Navigation />
    <Routes>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/addhabit" element={<HabitForm />} />
          <Route path="/" element={<Home />} />
          <Route exact path="/monthlydata" element ={<MonthlyData  activeDay={activeDay} />} />
          <Route exact path="/habits" element ={<HabitContainer activeDay={activeDay} setActiveDay={setActiveDay} />} />
      </Routes>
    </div>
  );
};

export default App;
