import { Container, Nav, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaCalendar, FaPlus} from 'react-icons/fa';
import { BsHouse, BsPerson, BsBarChartFill, BsPlus } from 'react-icons/bs';


export default function Navigation() {

  return (
      <Container fluid className="d-grid ">
        <Navbar fixed="top" bg="primary">
            <Navbar.Brand className="col text-white"href="/">
            <BsHouse className="navIcon " style={{color: "#ffffff",}} />
              Home
            </Navbar.Brand>
            <Nav>
              <Nav.Link  className="navText col-md-auto text-white"href="/AddHabit">
              <FaPlus className="navIcon"  style={{color: "#ffffff",}} />
              </Nav.Link>
              <Nav.Link className="navText col-md-auto text-white" href="/WeekData">
              <BsBarChartFill className="navIcon"  style={{color: "#ffffff",}} />
              </Nav.Link>
              <Nav.Link  className="navText col-md-auto text-white"href="/MonthlyData">
              <FaCalendar className="navIcon" style={{color: "#ffffff",}} />
              </Nav.Link>
              <Nav.Link  className="navText col-md-auto text-white "href="/Login">
              <BsPerson className="loginIcon" style={{color: "#ffffff",}} />
              </Nav.Link>
            </Nav>
        </Navbar>
      </Container>
  )
}