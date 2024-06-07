import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Background from '../../assets/Arcane-Banner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaystation, faXbox, faSteamSymbol } from '@fortawesome/free-brands-svg-icons';

import './Jumbotron.css'

const Jumbotron = () => {
  return (
    <div className="jumbotron d-flex justify-content-center align-items-center">
      <Container fluid className='h-100'>
        <Row className="h-100 mx-0 justify-content-center align-items-center">
          <Col xs={12} lg={10} className="px-0">
          <img src={Background} alt="Background" className='w-100 h-100'/>
          <div className="console-icons">
      <div className="console-icon">
        <FontAwesomeIcon icon={faPlaystation} />
        <span>PlayStation</span>
      </div>
      <div className="console-icon">
        <FontAwesomeIcon icon={faXbox} />
        <span>Xbox</span>
      </div>
      <div className="console-icon">
      <FontAwesomeIcon icon={faSteamSymbol} />
        <span>Steam</span>
      </div>
    </div>
           <h1 className='jumbotron-text'> Are you ready to enter a new world?</h1>
          </Col>
           </Row>
      </Container>
    </div>
  );
};

export default Jumbotron;
