import React from "react";
import { Button, Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home(){

    const navigate = useNavigate();

    function handleClick(e){
        if(e.target.name === "login"){
            navigate("/login")
        };
        if(e.target.name === "signup"){
            navigate("/signup")
        };
    };

    return(
        <Container className="d-flex">
            <Button name="login" className="mt-5" onClick={handleClick}>Login</Button>
            <Button name="signup" className="mt-5" onClick={handleClick}>Sign Up</Button>
        </Container>
    )
};