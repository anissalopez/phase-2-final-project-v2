import { Container, Nav, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaCalendar, FaPlus} from 'react-icons/fa';
import { BsHouse, BsPerson, BsBarChartFill, BsPlus } from 'react-icons/bs';


export default function Navigation() {

  return (
      <Container fluid className="d-grid ">
        <Navbar fixed="top" bg="primary">
            <Navbar.Brand className="col text-white"href="/Habits">
            <BsHouse className="navIcon " style={{color: "#ffffff",}} />
              Home
            </Navbar.Brand>
            <Nav>
              <Nav.Link  className="navText col-md-auto text-white"href="/addhabit">
              <FaPlus className="navIcon"  style={{color: "#ffffff",}} />
              </Nav.Link>
              <Nav.Link className="navText col-md-auto text-white" href="/weekdata">
              <BsBarChartFill className="navIcon"  style={{color: "#ffffff",}} />
              </Nav.Link>
              <Nav.Link  className="navText col-md-auto text-white"href="/monthlydata">
              <FaCalendar className="navIcon" style={{color: "#ffffff",}} />
              </Nav.Link>
              <Nav.Link  className="navText col-md-auto text-white "href="/login">
              <BsPerson className="loginIcon" style={{color: "#ffffff",}} />
              </Nav.Link>
            </Nav>
        </Navbar>
      </Container>
  )
}