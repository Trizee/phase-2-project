import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavBar.module.css'
import { useNavigate } from 'react-router-dom';

function NavBar(){

  const navigate = useNavigate()

  return (
    <>
      {['sm'].map((expand) => (
        
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" data-bs-theme="dark"> 
            <Container fluid>
            <Container >
            <Navbar.Brand onClick={()=>navigate('/home')}>
              <img
                alt="logo"
                src="/noun-gamepad-1815883.svg"
                width="35"
                height="35"
                className="d-inline-block align-top"
              />
              TriEmulation
            </Navbar.Brand>
          </Container>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Explore
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3" >
                  <Nav.Link onClick={()=>navigate('/shop')}>Shop</Nav.Link>
                  <Nav.Link onClick={()=>navigate('/cart')}>Cart</Nav.Link>
                  <Nav.Link onClick={()=>navigate('/reviews')}>Reviews</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}


export default NavBar;