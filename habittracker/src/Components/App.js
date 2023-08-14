import HabitForm from "./AddHabit";
import HabitContainer from "./HabitContainer";
import React, { useState } from "react";
import {Routes, Route} from "react-router-dom";
import Navigation from "./NavBar";
import WeekData from "./WeekData";
import {subWeeks, addWeeks} from "date-fns";
import { FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import MonthlyData from "./MonthlyData";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import { Container } from "react-bootstrap";






function App() {
    const [activeDay, setActiveDay] = useState(new Date());
    
    let iconStyles = { color: "black", fontSize: "3em" };

    const changeWeek = () => {
      return (
          <div className="row">
            <div className= "col" onClick={() => changeWeekHandle("prev")}><FaArrowLeft className= "leftArrow fa-pull-left" /></div>
            <div className="col" onClick={() => changeWeekHandle("next")}><FaArrowRight  className="rightArrow fa-pull-right" /></div>
        </div>
     );
   };

   const changeWeekHandle = (btnName) => {
      if (btnName === "prev") {
        setActiveDay(subWeeks(activeDay, 1))
      }
      else {
        setActiveDay(addWeeks(activeDay, 1))
     };
    };




  return (
    <div>
    <Navigation />
    <Routes>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/addhabit" element={<HabitForm />} />
          <Route path="/" element={<Home />} />
          <Route exact path="/weekdata" element ={<WeekData changeWeek={changeWeek} />} />
          <Route exact path="/monthlydata" element ={<MonthlyData changeWeek={changeWeek}  changeWeekHandle={changeWeekHandle} activeDay={activeDay} />} />
          <Route exact path="/habits" element ={<HabitContainer changeWeek={changeWeek}  changeWeekHandle={changeWeekHandle} activeDay={activeDay} />} />
      </Routes>
    </div>
  );
};

export default App;
