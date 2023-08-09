import { Container, Nav, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaCalendar, FaPlus, } from 'react-icons/fa';
import {MdPercent } from 'react-icons/md';
import { BsHouse, BsPerson } from 'react-icons/bs';


export default function Navigation() {

  return (
      <Container fluid className="d-grid ">
        <Navbar fixed="top" bg="primary">
            <Navbar.Brand className="col text-white"href="/">
            <BsHouse className="navIcon" style={{color: "#ffffff",}} />
              Home
            </Navbar.Brand>
            <Nav>
              <Nav.Link  className="navText col-md-auto text-white square border"href="/AddHabit">
              <FaPlus className="navIcon"  style={{color: "#ffffff",}} />
              Add Habit
              </Nav.Link>
              <Nav.Link className="navText col-md-auto text-white square border" href="/WeekData">
              <MdPercent className="navIcon"  style={{color: "#ffffff",}} />
                Weekly Data
              </Nav.Link>
              <Nav.Link  className="navText col-md-auto text-white sqare border"href="/MonthlyData">
              <FaCalendar className="navIcon" style={{color: "#ffffff",}} />
              Monthly Data</Nav.Link>
              <Nav.Link  className="navText col-md-auto text-white"href="/Login">
              <BsPerson className="navIcon" style={{color: "#ffffff",}} />
              </Nav.Link>
            </Nav>
        </Navbar>
        </Container>
  )
}