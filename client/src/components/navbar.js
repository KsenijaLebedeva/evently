import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../logo.png';
import { BrowserRouter as Link } from 'react-router-dom';


function Header() {
  return (
    <>
    {['lg'].map((expand) => (
      <Navbar key={expand} expand={expand} className="mb-3">
        <Container>
          <Navbar.Brand href="/"><img src={logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <img src={logo}/>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 pe-3">
                <Nav.Link href="/map">Map</Nav.Link>
                <Nav.Link href="/events">Events</Nav.Link>
                <Nav.Link href="/establishments">Establishments</Nav.Link>
                <Nav.Link className="log-reg" href="/login">Log in</Nav.Link>
                <Nav.Link className="log-reg" href="/signup">Sign up</Nav.Link>
                <NavDropdown
                  title="Name"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">My profile</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className="search" variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
);
}

export default Header;