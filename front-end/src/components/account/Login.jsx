import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Alert from '../Error/AllertLogin.jsx';
import loginImage from '../../assets/login-img.jpg';
import './Login.css';

const LoginPage = () => {
    const [loginCredential, setLoginCredential] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://localhost:3001/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ loginCredential, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
          const token = data.token;
  
          if (token) {
            localStorage.setItem('token', token);
            window.location.href = '/welcome'; 
          } else {
            console.error('Error during authentication: token missing in response');
          }
        } else {
          const error = await response.json();
          console.error('Error during authentication:', error);
          setError(error.error); 
        }
      } catch (error) {
        console.error('Error during authentication:', error);
        setError('Error during authentication');
      }
    };


  return (
    <Container fluid className="min-vh-100 d-flex flex-column justify-content-between">
      <Row className="justify-content-center align-items-center my-5">
        <Col md={8} lg={6}>
        {error && <div className="error-message">{error}</div>}
          <div className="login-card">
            <div className="row g-0">
              <div className="col-md-6">
                <img src={loginImage} alt="Login" className="h-100 w-100" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="login-title">Login</h5>
                  {error && <Alert message={error} variant="danger" />}
                  <Form onSubmit={handleLogin} className="text-center">
                    <Form.Group controlId="loginCredential" className="mb-2">
                      <Form.Label className="login-text">Email o Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Inserisci email o username"
                        value={loginCredential}
                        onChange={(e) => setLoginCredential(e.target.value)}
                        className="mx-auto w-75"
                      />
                    </Form.Group>

                    <Form.Group controlId="password" className="mb-2">
                      <Form.Label className="login-text">Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Inserisci password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mx-auto w-75"
                      />
                    </Form.Group>

                    <Button variant="outline-light" type="submit" className="mt-3 mb-4">
                      Login
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
