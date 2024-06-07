import React, { useState } from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import Alert from '../Error/AllertLogin.jsx'
import signInImage from '../../assets/sign-in-image.jpeg';
import RegistrationConfirmation from './RegistrationConf.jsx';
import './Sign-in.css';

const SignInPage = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [continent, setContinent] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          surname,
          dateOfBirth,
          continent,
          username,
          email,
          password,
        }),
      });

      if (response.ok) {
       setShowConfirmation(true);
      } else {
        const error = await response.json();
        setError(error.error);
      }
    } catch (err) {
      setError('Error requesting registration:', err);
    }
  };

  return (
    <>
    <Container fluid className="min-vh-100 d-flex flex-column justify-content-between">
    {showConfirmation ? (
          <RegistrationConfirmation /> 
        ) : (
      <Row className="justify-content-center align-items-center my-5">
        <Col md={8} lg={6}>
          <div className="sign-in-card">
            <div className="row g-0">
              <div className="col-md-6">
                <img src={signInImage} alt="Sign In" className="h-100 w-100" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="sign-in-title">Registrazione</h5>
                  {error && <Alert message={error} variant="danger"/>}
                  <Form onSubmit={handleSignIn} className="text-center">
                    <Form.Group controlId="name" className="mb-2">
                      <Form.Label className="sign-in-text">Nome</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mx-auto w-75"
                      />
                    </Form.Group>

                    <Form.Group controlId="surname" className="mb-2">
                      <Form.Label className="sign-in-text">Surname</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        className="mx-auto w-75"
                      />
                    </Form.Group>

                    <Form.Group controlId="dateOfBirth" className="mb-2">
                      <Form.Label className="sign-in-text">Date Of Birth</Form.Label>
                      <Form.Control
                        type="date"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        className="mx-auto w-75"
                      />
                    </Form.Group>

                    <Form.Group controlId="continent" className="mb-2">
                      <Form.Label className="sign-in-text">Server</Form.Label>
                      <Form.Select
                        value={continent}
                        onChange={(e) => setContinent(e.target.value)}
                        className="mx-auto w-75"
                      >
                        <option value="">Select a Server</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="North America">North America</option>
                        <option value="South America">South America</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="username" className="mb-2">
                      <Form.Label className="sign-in-text">Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mx-auto w-75"
                      />
                    </Form.Group>

                    <Form.Group controlId="email" className="mb-2">
                      <Form.Label className="sign-in-text">Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mx-auto w-75"
                      />
                    </Form.Group>

                    <Form.Group controlId="password" className="mb-2">
                      <Form.Label className="sign-in-text">Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mx-auto w-75"
                      />
                    </Form.Group>

                    <Button variant="outline-light" type="submit" className="mt-3 mb-4">
                      Sign-In
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
        )}
    </Container>
    </>
  );
};

export default SignInPage;
