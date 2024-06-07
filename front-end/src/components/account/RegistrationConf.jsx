import { Container, Row, Col, Button } from 'react-bootstrap';
import SignIn from '../../assets/sign-in-image.jpeg';
import './RegistrationConf.css';

const RegistrationConfirmation = () => {
  
  return (
    <>
    <Container fluid className="min-vh-100 d-flex flex-column justify-content-between">
  <Row className="justify-content-center align-items-center my-5">
    <Col md={8} lg={6}>
      <div className="regist-card">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={SignIn} alt="Login" className="h-100 w-100" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="regist-title">Welcome!</h5>
              <p className='regist-text'>You have successfully registered! Please check your email to confirm your account.</p>
              <div className="mt-3 text-center">
                <Button href='/' variant="link" size="sm" className="text-light">
                  Home Page
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  </Row>
</Container>

    </>
  );
};

export default RegistrationConfirmation;
