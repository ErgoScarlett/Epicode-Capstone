import React, { useEffect } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import Logo from '../../assets/logo-capstone.png';
import { Link } from 'react-router-dom';
import './Navbar.css';


const NavBar = () => {
      useEffect(() => {
        const handleScroll = () => {
          const navbar = document.querySelector('.navbar');
          const scrollPosition = window.scrollY;
    
          if (scrollPosition > 0) {
            navbar.classList.add('bg-opacity-75');
          } else {
            navbar.classList.remove('bg-opacity-75');
          }
        };    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      return (
        <Navbar bg="dark" data-bs-theme="dark" sticky="top" expand="lg" className="bg-body-tertiary" collapseOnSelect={true}>
        <Container fluid>
          <Navbar.Brand href="/" className="d-lg-none">
            <img src={Logo} alt="Logo" className='logo-small' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/game">Game</Nav.Link>
              <Nav.Link href="/characters">Characters</Nav.Link>              
            </Nav>
            <Nav className="mx-auto d-none d-lg-block">
              <Navbar.Brand href="/">
                <img src={Logo} alt="Logo" className='logo-large' />
              </Navbar.Brand>
            </Nav>
            <Nav className="d-flex ms-auto">
              <Nav.Link href='/register' className='nav-link me-3 d-none d-lg-inline d-lg-flex text-decoration-underline'>
                    Sign In
                  </Nav.Link>
                  <Link to='/register' className='d-lg-none mb-2'>
                    <Button variant="outline-light" size="sm">
                      Sign In
                    </Button>
                  </Link>                  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      );
    }

export default NavBar;



