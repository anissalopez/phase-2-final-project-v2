import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Container, Button, InputGroup  } from "react-bootstrap";
import Loading from "./Loading"
import ErrorMessage from "./ErrorMessage";
import { CiMail, CiLock } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(()=>{
        if(userInfo){
            navigate("/habits")
        }
    }, [userInfo, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
        setEmail("");
        setPassword("");
    };
 
    const newUserHandler = (e) => navigate('/signup');
    
    return(
        <Container className="d-grid align-items-center justify-content-center text-center">
        <h2 className="mt-5 mb-5">Login</h2> 
         {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}  
         {loading && <Loading />}
        <Form className="userForm"  onSubmit={handleSubmit}> 
            <InputGroup className="mb-2" size="md">
                <InputGroup.Text ><CiMail /></InputGroup.Text>
                <Form.Control type="username" placeholder="enter email" value={email} name="username" onChange={(e)=>setEmail(e.target.value)}/>
            </InputGroup>
            <InputGroup className="mb-2" size="md">
                <InputGroup.Text ><CiLock /></InputGroup.Text>
                <Form.Control autoComplete="on" type="password" placeholder="enter password" value={password} name="password" onChange={(e)=>setPassword(e.target.value)} />
            </InputGroup>
                <Button type="submit" variant="primary" className="mt-3 mb-2">
                Login
                </Button>
        </Form>
            <p>Don't have an account? <Button variant="secondary" onClick={newUserHandler}>Sign up</Button></p>
       </Container>
    );
};

export default Login;
