import React, { useState, useEffect } from "react";
import {Form, Container, Button, InputGroup} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar"
import { BsPerson } from "react-icons/bs";
import { CiMail, CiLock } from "react-icons/ci";
import ErrorMessage from "./ErrorMessage";
import { register } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
 
function Signup({ updateHabitList, habits,  }){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();
  
    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    const handleSubmit = (e) => {
       e.preventDefault();
       dispatch(register(name, email, password));
      };

    const handleClick = () => navigate("./Login")

    return(
        <>
        <NavBar ></NavBar>
        <Container id="formContainer" className="mt-5 d-grid h-75 text-center">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
        <h2 className="pt-5">Sign Up</h2>
        <Form id="userForm"  onSubmit={handleSubmit}> 
            <InputGroup className="mb-2" size="md" controlId="name">
            <InputGroup.Text id="basic-addon1"><BsPerson /></InputGroup.Text>
            <Form.Control  type="name" value={name} placeholder="enter name" onChange={(e) => setName(e.target.value)} />
            </InputGroup>  
            <InputGroup className="mb-2" size="md" controlId="formBasicEmail">
            <InputGroup.Text id="basic-addon1"><CiMail /></InputGroup.Text>
            <Form.Control type="email" placeholder="enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </InputGroup>
            <InputGroup className="mb-2" size="md" controlId="formBasicPassword">
            <InputGroup.Text id="basic-addon1"><CiLock /></InputGroup.Text>
            <Form.Control  type="password" placeholder="minimum 8 characters" value={password} onChange={(e) => setPassword(e.target.value)} />
            </InputGroup>
            <Button variant="primary" className="mt-3 mb-2" type="submit">
            Submit
            </Button>
        </Form>
        <p>Have an account? <Button variant="secondary" onClick={handleClick}>Login</Button></p>
        </Container>
        </>
    )
}

export default Signup;