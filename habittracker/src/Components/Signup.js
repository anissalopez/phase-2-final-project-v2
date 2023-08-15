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
import Header from "./Header";
 
function Signup( ){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();
  
    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    useEffect(()=>{
      if(userInfo){
        navigate("/habits")
      }
    }, [userInfo, navigate])

    const handleSubmit = (e) => {
       e.preventDefault();
       if(password.length < 8){
        setMessage("please enter minimum of 8 characters")
       }
       else dispatch(register(name, email, password));
       setEmail("");
       setPassword("");
       setName("");
      };

    const handleClick = () => navigate("/login");

    return(
      <Container className="d-grid align-items-center justify-content-center text-center">
          <h2 className="mt-5 mb-5">Sign up</h2> 
            <Form className="userForm"  onSubmit={handleSubmit}> 
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
                {loading && <Loading />}
                <InputGroup className="mb-2" size="md" >
                  <InputGroup.Text ><BsPerson /></InputGroup.Text>
                  <Form.Control  autoComplete="on" type="username" value={name} placeholder="enter name" onChange={(e) => setName(e.target.value)} />
                </InputGroup>  
                <InputGroup className="mb-2" size="md" >
                  <InputGroup.Text ><CiMail /></InputGroup.Text>
                  <Form.Control type="email" placeholder="enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </InputGroup>
                <InputGroup className="mb-2" size="md" >
                  <InputGroup.Text ><CiLock /></InputGroup.Text>
                  <Form.Control  autoComplete="on" type="password" placeholder="minimum 8 characters" value={password} onChange={(e) => setPassword(e.target.value)} />
                </InputGroup>
                  <Button variant="primary" className="mt-3 mb-2" type="submit">
                  Submit
                  </Button>
            </Form>
              <p>Have an account? <Button variant="secondary" onClick={handleClick}>Login</Button></p>
        </Container>
    )
};

export default Signup;