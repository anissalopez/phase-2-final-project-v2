import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-router-dom";
import { logout } from "../actions/userActions";
import { Container, Nav, NavDropdown, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaCalendar, FaPlus} from 'react-icons/fa';
import { BsHouse, BsPerson, BsBarChartFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";



export default function Navigation() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;



  const logoutHandler = () => {
    dispatch(logout());
    navigate("/signup")
    
  };



  return (
      <Container fluid className="d-grid mb-5 pb-5">
        
          { userInfo ? (
            <Navbar fixed="top" bg="primary">
              <Navbar.Brand className="col text-white"href="/habits">
              <BsHouse className="navIcon " style={{color: "#ffffff",}} />
                Home
              </Navbar.Brand>
                <Nav>
                <Nav.Link  className="navText col-md-auto text-white"href="/addhabit">
                <FaPlus className="navIcon"  style={{color: "#ffffff",}} />
                </Nav.Link>
                <Nav.Link  className="navText col-md-auto text-white"href="/monthlydata">
                <FaCalendar className="navIcon" style={{color: "#ffffff",}} />
                </Nav.Link>
                </Nav>
                <NavDropdown title={<BsPerson className="loginIcon" style={{color: "#ffffff",}} />} >
                 <NavDropdown.Item className="mr-1" onClick={logoutHandler}>
                   Logout
                 </NavDropdown.Item>
                 </NavDropdown>
             
                </Navbar>
              
          ) : (
            <Navbar fixed="top" bg="primary">
              <Navbar.Brand className="col text-white"href="/signup">
              <BsHouse className="navIcon " style={{color: "#ffffff",}} />
                Home
              </Navbar.Brand>
                <Nav>
                <Nav.Link  className="navText col-md-auto text-white"href="/signup">
                <FaPlus className="navIcon"  style={{color: "#ffffff",}} />
                </Nav.Link>
                <Nav.Link  className="navText col-md-auto text-white"href="/signup">
                <FaCalendar className="navIcon" style={{color: "#ffffff",}} />
                </Nav.Link>
                </Nav>

                </Navbar>
          )}
      </Container>
  )
}