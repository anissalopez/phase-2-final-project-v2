import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-router-dom";
import { logout } from "../actions/userActions";
import { Container, Nav, Button, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaCalendar, FaPlus, FaLogOut } from 'react-icons/fa';
import { BsHouse } from 'react-icons/bs';
import {RiLogoutBoxFill } from 'react-icons/ri';
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
                <Nav.Link  className="col-md-auto text-white"href="/addhabit">
                <FaPlus className="navIcon"  style={{color: "#ffffff",}} />
                </Nav.Link>
                <Nav.Link  className=" col-md-auto text-white"href="/monthlydata">
                <FaCalendar  className="navIcon" style={{color: "#ffffff",}} />
                </Nav.Link>
                <Nav.Link  className="col-md-auto text-white"href="/signup" title="logout">
                  <RiLogoutBoxFill size={20} className = "mr-2" onClick={logoutHandler} />
                </Nav.Link>

                </Nav>
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