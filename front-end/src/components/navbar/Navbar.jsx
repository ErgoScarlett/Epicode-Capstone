import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import Logo from '../../assets/logo-capstone.png';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';


const NavBar = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

      useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);

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

      const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/');
      };
    
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
            {isAuthenticated ? (
          <>
          <Link to="/profile">
            <Button variant="outline-light" size="sm" className="mt-1 me-3">
              Profilo
            </Button>
            </Link>
            <Nav.Link onClick={handleLogout} className="nav-link me-3 d-none d-lg-inline d-lg-flex text-decoration-underline">
              Logout
            </Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link href="/register" className="nav-link me-3 d-none d-lg-inline d-lg-flex text-decoration-underline">
              Sign In
            </Nav.Link>
            <Link to="/login">
              <Button variant="outline-light" size="sm" className="mt-1">
                Login
              </Button>
            </Link>
            <Link to="/register" className="d-lg-none mt-3">
              <Button variant="outline-light" size="sm">
                Sign In
              </Button>
            </Link>
          </>
        )}          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      );
    }

export default NavBar;



