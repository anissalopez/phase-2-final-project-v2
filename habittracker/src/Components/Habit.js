import React from "react";
import { FaCheck, FaTrash } from 'react-icons/fa';
import { format, startOfWeek, addDays } from "date-fns";

function Habit({ habit, updateCompletedHabits, removeHabit,  activeDay }) {

const currentDay = new Date()


  function handleClick(index) {

    console.log(index)

    const formattedIndex = format((index), "MM dd")
    const formattedDay = format((currentDay), "MM dd")
   
    if(habit[index]){
        alert("this habit has been completed!")
    }
    else if (formattedIndex <= formattedDay){
        const clickedDate = index
        const updateDays = {
            [clickedDate]: true};

        fetch(`https://habittracker-rvvt.onrender.com/habits/${habit.id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
          body: JSON.stringify(updateDays)
        })
          .then(resp => resp.json())
          .then(data => updateCompletedHabits(data))
      }

      else if(formattedIndex > formattedDay){
        alert("You can not complete a habit for a future day")
      }
    }

    
     
  


  function handleDelete() {
    fetch(`https://habittracker-rvvt.onrender.com/habits/${habit.id}`, {
      method: 'DELETE',
    })
      .then(resp => resp.json())
      .then(() => removeHabit(habit.id))
  }



function renderButtons(){
    let weekButtons = [];
    const startDate = startOfWeek(activeDay, { weekStartsOn: 1 });

    let currentDate = startDate;

      for(let day = 0; day < 7; day++){
      


        weekButtons.push(<td key={day}><button className={
            habit[addDays(currentDate, day)] ? "btn btn-success" : "btn btn-outline-primary custom"
        }onClick={()=>handleClick(addDays(currentDate, day))}>
             {habit[addDays(currentDate, day)] ?  <FaCheck /> : null }
            </button></td>);
      }
    return <>{weekButtons}</> 
}



  return (
    <tr>
      <th scope="row">{habit.habit}</th>
      {renderButtons()}
      <td><button onClick={handleDelete} className="btn btn-danger"><FaTrash  /></button></td>
    </tr>
  )
}
export default Habit;
