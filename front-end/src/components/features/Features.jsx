import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VideoOne from '../../assets/homepage1.mp4';
import VideoTwo from '../../assets/homepage2.mp4';
import './Features.css'

const Features = () => {
  return (
    <Container>
      <Row className="mt-5 mb-lg-5">      
        <Col lg={6} xs={12} className='d-flex justify-content-center mb-3 mb-lg-0'>
          <video
            src={VideoOne}
            autoPlay
            loop
            muted
            playsInline
            alt="Video One"
            className="video img-fluid"
          />
        </Col>
        <Col lg={6} xs={12} className='mb-3 mb-lg-0'>
            <h1 className='videone-title'>A new Gameplay</h1>
            <p className='videone'>
            An immersive graphic adventure that combines immersive storytelling, 
            dynamic combat, conflicting factions, and meaningful choices that 
            influence the course of the game. Set in a fascinating world steeped 
            in mystery, "Arcane" offers players a unique experience where every 
            decision counts.
              </p>
          </Col>
          </Row>
          <Row className="mb-5">
          <Col lg={6} xs={12} className='mb-3 mb-lg-0'>
            <h1 className='videotwo-title'>Which side will you be on?</h1>
            <p className='videotwo'>
            Explore the streets as much as possible 
            of Zaun and Piltover. Choose carefully how 
            to interact with the characters you will 
            meet during your journey. Only in this way 
            will you be able to discover all the secrets 
            of this new world. And remember, every action 
            will have consequences.
              </p>
          </Col>
        <Col lg={6} xs={12} className='d-flex justify-content-center'>
          <video
            src={VideoTwo}
            autoPlay
            loop
            muted
            playsInline
            alt="Video Two"
            className="video img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Features;



  
