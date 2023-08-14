import React, { useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import {format, startOfWeek, addDays} from "date-fns";
import DateHeader from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { deleteHabitAction, listHabits, updateHabitAction } from "../actions/habitActions"
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaTrash } from 'react-icons/fa';




function HabitContainer({changeWeek, activeDay }){
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const habitList = useSelector((state) => state.habitList );
  const habits = habitList.habits



  
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


  const habitDelete = useSelector((state) => state.habitDelete);
  const { error: errorDelete, success: successDelete} = habitDelete;

  const habitCreate = useSelector((state) => state.habitCreate);
  const { success: successCreate } = habitCreate;

  const habitUpdate = useSelector((state) => state.habitUpdate);
  const { success: successUpdate } = habitUpdate;




  const handleDelete = (id) => {
    console.log(id)
    if (window.confirm("Are you sure?")) {
      dispatch(deleteHabitAction(id));
    }
  };

  useEffect(() => {
    dispatch(listHabits());
    if(!userInfo){
      navigate("/signup")
    }
  }, [navigate, userInfo, dispatch, habitUpdate, habitCreate, habitDelete]);
  

  

  const renderWeekDays = () => {
    let week = [];
    const startDate = startOfWeek(activeDay, { weekStartsOn: 1 });
    let currentDay = startDate;
      for(let day = 0; day < 7; day++){
        week.push(<th key={day}>{format(addDays(currentDay, day), "E")} {format(addDays(currentDay, day), "d")}</th>);
      };
    return <>{week}</> 
  };



   function handleClick(habit, date){
      habit.datesCompleted.push(date)
      dispatch(updateHabitAction(habit._id, habit.habitName, habit.datesCompleted))
    }


  const renderButtons = (habit) => {
     let weekButtons = [];
     const startDate = startOfWeek(activeDay, {weekStartsOn:1});
     let currentDate = startDate;
     
     for(let day = 0; day < 7; day++){
      const formattedDate = format(addDays(currentDate, day), "MM dd yyyy");
  
      weekButtons.push(<td key={addDays(currentDate, day)}><button className={ 
        habit.datesCompleted.includes(formattedDate) ?
                        "btn btn-success" :
                        "btn btn-outline-primary custom"
                    }
        
      onClick={()=>handleClick(habit, format(addDays(currentDate, day), "MM dd yyyy"))}>
         { habit.datesCompleted.includes(formattedDate) ?  <FaCheck /> : null }
        </button></td>);
      }
     return <>{weekButtons}</> 
     }
     

  
  
  

    return(
      <>
        <DateHeader activeDay={activeDay}/>
        <Container id="habitContainer" fluid className="d-grid pt-5">
            <Table responsive>
                <thead>
                    <tr>
                        <th>Habits</th>
                        {renderWeekDays()}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {habits.map((habit) => {
                    return(
                      <tr key={habit.habitName}>
                      <td>{habit.habitName}</td>
                      {renderButtons(habit)}
                      <td><button onClick={()=>handleDelete(habit._id)} className="btn btn-danger"><FaTrash  /></button></td>
                     </tr>)})}
                </tbody>
                </Table>
              {changeWeek()}
        </Container>   
      </>
    );
};

export default HabitContainer;