import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Container, Button, InputGroup  } from "react-bootstrap";
import { CiMail, CiLock } from "react-icons/ci"

function Login({ }){

    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    
    const navigate = useNavigate();

    function validateLogin(){
        let login = true;
        if(username === "" || username === null){
            login = false;
            alert("please enter a valid username");
        }
        if(password === "" || password === null){
            login = false
            alert("please enter a valid password")
        }

        
        return login;
    };

    function handleSubmit(e){
        e.preventDefault();

     if(validateLogin()){

     }
    }
    

    function newUserHandler(){
        navigate('/')
    }

    return(
        <Container id="formContainer" className="mt-5 d-grid h-75 text-center">
        <h2 className="pt-5">Login</h2>
        <Form id="userForm"  onSubmit={handleSubmit}> 
            <InputGroup className="mb-2" size="md">
            <InputGroup.Text id="basic-addon1"><CiMail /></InputGroup.Text>
            <Form.Control type="text" placeholder="enter email" value={username} name="username" onChange={(e)=>setUserName(e.target.value)}/>
            </InputGroup>
            <InputGroup className="mb-2" size="md">
            <InputGroup.Text id="basic-addon1"><CiLock /></InputGroup.Text>
            <Form.Control  type="text" placeholder="enter password" value={password} name="password" onChange={(e)=>setPassWord(e.target.value)} />
            </InputGroup>
            <Button variant="primary" className="mt-3 mb-2">
             Login
            </Button>
        </Form>
        <p>Don't have an ccount? <Button variant="secondary" onClick={newUserHandler}>Sign Up</Button></p>
        </Container>
    );
};

export default Login;
