import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Container, Button, InputGroup  } from "react-bootstrap";
import Loading from "./Loading"
import ErrorMessage from "./ErrorMessage";
import { CiMail, CiLock } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";



function Login({ }){

    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
   

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;


    
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
     dispatch(login(email, password))
    };


    
    const navigate = useNavigate();


    
    function newUserHandler(){
        navigate('/')
    }

    return(
        <Container id="formContainer" className="mt-5 d-grid h-75 text-center">
         {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        
        <h2 className="pt-5">Login</h2>
        <Form id="userForm"  onSubmit={handleSubmit}> 
            <InputGroup className="mb-2" size="md">
            <InputGroup.Text id="basic-addon1"><CiMail /></InputGroup.Text>
            <Form.Control type="text" placeholder="enter email" value={email} name="username" onChange={(e)=>setEmail(e.target.value)}/>
            </InputGroup>
            <InputGroup className="mb-2" size="md">
            <InputGroup.Text id="basic-addon1"><CiLock /></InputGroup.Text>
            <Form.Control  type="password" placeholder="enter password" value={password} name="password" onChange={(e)=>setPassWord(e.target.value)} />
            </InputGroup>
            <Button type="submit" variant="primary" className="mt-3 mb-2">
             Login
            </Button>
        </Form>
        <p>Don't have an ccount? <Button variant="secondary" onClick={newUserHandler}>Sign up</Button></p>
        </Container>
    );
};

export default Login;
