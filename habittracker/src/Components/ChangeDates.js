import React from "react";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default function ChangeDates({ dateHandler }){

    return (
        <div className="row h-15 w-15 col">
          <div className= "col" onClick={() => dateHandler("prev")}><FaArrowLeft className= "leftArrow"  /></div>
          <div className="col" onClick={() => dateHandler("next")}><FaArrowRight  className="rightArrow" /></div>
        </div>
    )
};