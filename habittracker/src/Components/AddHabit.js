import { Button, Container, Form }from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createHabitAction } from "../actions/habitActions";
import ErrorMessage from './ErrorMessage';
import { useNavigate } from "react-router-dom";


function AddHabit({ }){
    const [habitName, setHabitName] = useState("");
    const [datesCompleted, setDatesCompleted] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const habitCreate = useSelector((state) => state.habitCreate);
    const { error, habit } = habitCreate;


    const resetHandler = () => {
        setHabitName("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createHabitAction(habitName, datesCompleted));
        if(!habitName) return;
        resetHandler();
        navigate("/habits")
    }

    useEffect(() => {}, [])
  

    return(
        <Container id="formContainer" className="d-grid h-75 mt-5">
        <Form id="habitForm" className="text-center mt-5" onSubmit={handleSubmit} >
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group>
            <Form.Label className="mb-4 fs-4">Add Habit</Form.Label>
            <Form.Control className="mb-4" type="text" placeholder="please enter a habit" onChange={(e)=>setHabitName(e.target.value)}/>
            <Button variant="primary" type="submit">
            Submit
            </Button>
         </Form.Group>
        </Form>
        </Container>
    );
};

export default AddHabit;