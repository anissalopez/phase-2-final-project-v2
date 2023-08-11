import HabitForm from "./HabitForm";
import HabitContainer from "./HabitContainer";
import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Navigation from "./NavBar";
import WeekData from "./WeekData";
import {subWeeks, addWeeks} from "date-fns";
import { FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import MonthlyData from "./MonthlyData";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import axios from "axios";




function App() {
  const navigate = useNavigate()

  const [habits, setHabits] = useState([]);
  const [activeDay, setActiveDay] = useState(new Date());



  useEffect(() => {





    }, [])


  const changeWeek = () => {
    return (
        <div className="row">
          <div className= "col" onClick={() => changeWeekHandle("prev")}><FaArrowLeft className= "leftArrow fa-pull-left" /></div>
          <div className="col" onClick={() => changeWeekHandle("next")}><FaArrowRight className="rightArrow fa-pull-right" /></div>
        </div>
    );
  };

  const changeWeekHandle = (btnName) => {
    if (btnName === "prev") {
      setActiveDay(subWeeks(activeDay, 1));
    };
    if (btnName === "next") {
      setActiveDay(addWeeks(activeDay, 1));
    };
  };


  function updateHabitList(newUser){
    const newHabitList = [...habits, newUser]


    setHabits(newHabitList)
    
   
  };

  function removeHabit(habitID){
    const newHabits = habits.filter((habit) => habit.id !== habitID);
    setHabits(newHabits);
  };

  function updateCompletedHabits(updatedHabit){
    const newHabitArray = habits.map((habit) => {
      if (habit.id === updatedHabit.id) {
        return {
          ...habit,
          ...updatedHabit 
        };
      } else {
        return habit;
      }
    });
  
    setHabits(newHabitArray);
  };




  return (
    <div>
    <Navigation />
    <Routes>
          <Route path="/" element={<Signup />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/addhabit" element={<HabitForm />} />
          <Route exact path="/weekdata" element ={<WeekData changeWeek={changeWeek}  activeDay={activeDay} habits={habits}/>} />
          <Route exact path="/monthlydata" element ={<MonthlyData setActiveDay={setActiveDay} changeWeek={changeWeek}  changeWeekHandle={changeWeekHandle} activeDay={activeDay} removeHabit={removeHabit} updateCompletedHabits={updateCompletedHabits} habits={habits}/>} />
          <Route exact path="/habits" element ={<HabitContainer changeWeek={changeWeek}  changeWeekHandle={changeWeekHandle} activeDay={activeDay} removeHabit={removeHabit} updateCompletedHabits={updateCompletedHabits} habits={habits}/>} />
      </Routes>
    </div>
   
  
  );
};

export default App;
