import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form }from 'react-bootstrap'

function HabitForm({ updateHabitList, currentUserHabits, habits}){
    const [habit, setHabit] = useState("")
    const navigate = useNavigate();
    const handleSubmit = () => {

    }

    return(
        <Container id="formContainer" className="d-grid h-75 mt-5">
        <Form id="habitForm" className="text-center w-60 pt-5 mt-5" onSubmit={handleSubmit}>
            <Form.Group  controlId="habitForm">
            <Form.Label className="mb-4 fs-4">Add Habit</Form.Label>
        
            <Form.Control className="mb-4" type="text" placeholder="please enter a habit" onChange={(e) => setHabit(e.target.value)}/>
            <Button variant="primary" type="submit">
            Submit
            </Button>
         </Form.Group>
        </Form>
        </Container>
    );
};

export default HabitForm;