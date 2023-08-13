import React, { useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import {format, startOfWeek, addDays} from "date-fns";
import DateHeader from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { deleteHabitAction, listHabits } from "../actions/habitActions"
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaTrash } from 'react-icons/fa';



function HabitContainer({changeWeek, activeDay }){
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const habitList = useSelector((state) => state.habitList);
  const { loading, error, habits} = habitList;

  console.log(habits)

  
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

    
 

  const habitDelete = useSelector((state) => state.habitDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = habitDelete;

  const habitCreate = useSelector((state) => state.habitCreate);
  const { success: successCreate } = habitCreate;

  const habitUpdate = useSelector((state) => state.habitUpdate);
  const { success: successUpdate } = habitUpdate;


  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteHabitAction(id));
    }
  };

  useEffect(() => {
    dispatch(listHabits());
  }, []);


  const renderWeekDays = () => {
    let week = [];
    const startDate = startOfWeek(activeDay, { weekStartsOn: 1 });
    let currentDay = startDate;
      for(let day = 0; day < 7; day++){
        week.push(<th key={day}>{format(addDays(currentDay, day), "E")} {format(addDays(currentDay, day), "d")}</th>);
      };
    return <>{week}</> 
  };


function handleClick(date){
  console.log(date)
}



  const renderButtons = (habit) => {
     let weekButtons = [];
     const startDate = startOfWeek(activeDay, {weekStartsOn:1});
     let currentDate = startDate;
     
     for(let day = 0; day < 7; day++){
      weekButtons.push(<td key={day}><button className={
        habit.datesCompleted[addDays(currentDate, day)] ? "btn btn-success" : "btn btn-outline-primary custom"
      }onClick={()=>handleClick(addDays(currentDate, day))}>
         {habit.datesCompleted[addDays(currentDate, day)] ?  <FaCheck /> : null }
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
                { habits.map((habit) => {
                    return(
                      <tr key={habit.Name}>
                      <td>{habit.habitName}</td>
                      {renderButtons(habit)}
                     </tr>)})}
                </tbody>
                </Table>
              {changeWeek()}
        </Container>   
      </>
    );
};

export default HabitContainer;