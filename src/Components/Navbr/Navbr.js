import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Moon, Sun } from 'react-bootstrap-icons';
import './nav.css';
import { useTheme } from '../Theme/Theme';
import { Link } from 'react-router-dom';

export default function Navbr() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar expand="lg" className="py-2 bg-light shadow-sm">
      <Container>
        <Navbar.Brand className="fs-4 fw-bold">
          <Link to="/home" className="text-dark text-decoration-none">
            المسبحة الرقمية
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar" />

      
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton className='px-4 pt-3'>
        
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="mx-auto fw-bold">
              <Nav.Link className="mx-3">
                <Link to="/home" className="text-dark text-decoration-none">
                  الصفحة الرئيسية
                </Link>
              </Nav.Link>
              <Nav.Link className="mx-3">
                <Link
                  to="/احاديث نبوية"
                  className="text-dark text-decoration-none"
                >
                  أحاديث نبوية
                </Link>
              </Nav.Link>
              <Nav.Link className="mx-3">
                <Link
                  to="/سُبحة رقمية"
                  className="text-dark text-decoration-none"
                >
                  مسبحة رقمية
                </Link>
              </Nav.Link>
          {/*    <Nav.Link className="mx-3">
                <Link to="/about" className="text-dark text-decoration-none">
                  عن المسبحة الرقمية
                </Link>
              </Nav.Link>*/}

              <Nav.Link className="mx-2 text-dark" onClick={toggleTheme}>
                {theme ? <Sun className="fs-3" /> : <Moon className="fs-3" />}
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
