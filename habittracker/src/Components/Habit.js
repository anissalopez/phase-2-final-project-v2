import React from "react";
import { FaCheck, FaTrash } from 'react-icons/fa';
import { format, startOfWeek, addDays } from "date-fns";

function Habit({ }) {

const currentDay = new Date()


  return (
    <tr>
      <th scope="row"></th>
      <td><button  className="btn btn-danger"><FaTrash  /></button></td>
    </tr>
  )
}
export default Habit;
