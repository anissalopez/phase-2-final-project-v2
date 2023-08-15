import React, { useState } from "react";
import {Routes, Route} from "react-router-dom";
import MonthlyData from "./MonthlyData";
import Signup from "./Signup";
import Login from "./Login";
import Navigation from "./NavBar";
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
          <Route exact path="/monthlydata" element ={<MonthlyData  activeDay={activeDay} />} />
          <Route exact path="/habits" element ={<HabitContainer activeDay={activeDay} setActiveDay={setActiveDay} />} />
      </Routes>
    </div>
  );
};

export default App;
