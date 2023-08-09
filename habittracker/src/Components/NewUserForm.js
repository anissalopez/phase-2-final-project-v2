import React, {useState} from "react";
import {Form, Container, Button} from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup'
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar"
import { BsPerson } from "react-icons/bs";
import { CiMail, CiLock } from "react-icons/ci"
 
function NewUserForm({ updateHabitList, habits, handleClick }){
    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullname: "",
        id: "",
        password: "",
        habits: []
    })

    function handleChange(e){
        const updatedForm = {
            ...form, [e.target.name]: e.target.value
        }


        setForm(updatedForm)
    }

    function validateNewUser(){
        let newUser = true;

        if(form.fullname === "" || form.fullname === null){
            newUser = false;
            alert("please enter a valid first name")
         }

        if(form.id === "" || form.id === null){
            newUser = false;
            alert("please enter a valid username")
        }
        if(form.password === "" || form.password === null){
            newUser = false;
            alert("please enter a valid password")
        }

        if(form.password.length < 8){
            newUser = false;
            alert("please enter minimum of 8 characters")
        }



    /* need to add functionality to create an alert if username is already taken habits.forEach((habit) => {
        if(form.username === habit.id){
            newUser = false;
            alert("this username is taken")
        }
    })*/
    return newUser;
}

    function handleSubmit(e){
    e.preventDefault();
    console.log(e)

    if(validateNewUser()){
        fetch('https://habittracker-rvvt.onrender.com/habits', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(form)
        })
        .then(resp => resp.json())
        .then((data) => {
            updateHabitList(data)
            navigate('/')
        }); 
        
    }
    }

    function handleClick(){
      
    }

    return(
        <>
        <NavBar ></NavBar>
        <Container id="formContainer" className="mt-5 d-grid h-75 text-center">
        <h2 className="mt-5">Sign Up</h2>
        <Form id="userForm"  onSubmit={handleSubmit}> 
            <InputGroup className="mb-2" size="md">
            <InputGroup.Text id="basic-addon1"><BsPerson /></InputGroup.Text>
            <Form.Control  type="text" placeholder="enter name" value={form.fullname} name="fullname" onChange={handleChange} />
            </InputGroup>  
            <InputGroup className="mb-2" size="md">
            <InputGroup.Text id="basic-addon1"><CiMail /></InputGroup.Text>
            <Form.Control type="text" placeholder="enter email" value={form.id} name="id" onChange={handleChange} />
            </InputGroup>
            <InputGroup className="mb-2" size="md">
            <InputGroup.Text id="basic-addon1"><CiLock /></InputGroup.Text>
            <Form.Control  type="text" placeholder="minimum 6 characters" value={form.password} name="password" onChange={handleChange} />
            </InputGroup>
            <Button variant="primary" className="mt-3 mb-2" type="submit">
            Submit
            </Button>
        </Form>
        <p>Have an account? <button onClick={handleClick}>Login</button></p>
        </Container>
        </>
    )
}

export default NewUserForm;