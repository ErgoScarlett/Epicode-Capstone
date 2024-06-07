import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center">
      <Container className="py-4">
        <section className="mb-4">
          <Button variant="outline-light" className="m-1" href="#!">
            <FontAwesomeIcon icon={faFacebook} />
          </Button>
          <Button variant="outline-light" className="m-1" href="#!">
            <FontAwesomeIcon icon={faTwitter} />
          </Button>
          <Button variant="outline-light" className="m-1" href="#!">
            <FontAwesomeIcon icon={faGoogle} />
          </Button>
          <Button variant="outline-light" className="m-1" href="#!">
            <FontAwesomeIcon icon={faInstagram} />
          </Button>
        </section>       

        <section className="mb-4">
          <p>
          Capstone Project for Epicode. Created at the end of the training course for part-time web developers.
          </p>
        </section>
      </Container>

      <div className="bg-dark text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-white" href="https://epicode.com/it/">
          Epicode Capstone Project
        </a>
      </div>
    </footer>
  );
};

export default Footer;
