import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-router-dom";
import { logout } from "../actions/userActions";
import { clearHabits } from "../actions/habitActions";
import { Container, Nav, Button, Navbar, Offcanvas} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaCalendar, FaPlus } from 'react-icons/fa';
import { BsHouse, BsPersonCircle } from 'react-icons/bs';
import {CiLogout} from 'react-icons/ci';
import { useNavigate } from "react-router-dom";



export default function Navigation() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(clearHabits());
    navigate("/signup");
    setShow(false);
  };

  return (
      <Container fluid className="d-grid mb-5 pb-5">
          { userInfo ? (
            <Navbar fixed="top" bg="primary">
              <Navbar.Brand className="col text-white"href="/habits">
                 <BsHouse className="navIcon" size={30} style={{color: "#ffffff",}} />
              </Navbar.Brand>
                <Nav>
                  <Nav.Link  className="col-md-auto text-white"href="/addhabit">
                    <FaPlus size={15} className="navIcon"  style={{color: "#ffffff",}} />
                  </Nav.Link>
                  <Nav.Link  className=" col-md-auto text-white"href="/monthlydata">
                    <FaCalendar  size={15}className="col-md-auto text-white" style={{color: "#ffffff",}} />
                  </Nav.Link>
                    <Container className="col-md-auto text-white pr-2">
                    <BsPersonCircle size={30} onClick={handleShow} className="navIcon pt" style={{color: "#ffffff",}}/>
                    </Container>
                <Offcanvas show={show} onHide={handleClose} placement="end">
                  <Offcanvas.Body>
                    <div onClick={logoutHandler}>
                      <CiLogout size={20} className = "offCanvasText mr-2" onClick={logoutHandler}/>
                      Logout
                    </div>
                </Offcanvas.Body>
              </Offcanvas>
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
};