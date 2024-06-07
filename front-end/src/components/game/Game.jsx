import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Game.css';
import Banner from '../../assets/Game-Banner.jpg';
import Gif from '../../assets/game-gif.mp4';
import LogoPiltover from '../../assets/piltover-logo.jpg';
import LogoZaun from '../../assets/zaun-logo.jpg'

const Game = () => {
    const [selectedFaction, setSelectedFaction] = useState(null);
  
    const toggleFaction = (faction) => {
      setSelectedFaction(selectedFaction === faction? null : faction);
    }; 

  return (
    <>
      <Container>
        <Row className="banner-container">
          <Col>
          <img src={Banner} alt="Arcane-Background" className='banner img-fluid'/>
            <h2 className="banner-text">Get ready to play!</h2>
            </Col>
          </Row>

        <Row className="gif-container flex">
          <Col lg={6} xs={12}>
            <h1 className='plot-title'>Arcane</h1>
            <p className='plot'>
              In the cities of Piltover and Zaun,
              tensions rise as inventors, hooligans, politicians, and crime lords grow increasingly 
              dissatisfied with the constraints of a devastated society. 
              With the situation on the verge of being unsustainable, 
              two sisters steal an artifact of immeasurable power. 
              Discovery and danger collide as heroes are born and bonds are broken. 
              Will this power change the world? Or will it lead to ruin?
              </p>
          </Col>
          <Col lg={6} xs={12}>
            <video src={Gif} autoPlay loop muted playsInline alt="Arcane-Gif" className='gif img-fluid'></video>
          </Col>
        </Row>

        <Row className="my-5 justify-content-center">
      <h2 className="text-center mb-4 faction-text">Which faction will you choose?</h2>
      <Col lg={6} xs={5} className="piltover-col">
        <div className="piltover-container">
          <img
            src={LogoPiltover}
            alt="Piltover"
            className="img-fluid piltover-image"
            onClick={() => toggleFaction('piltover')}
            style={{ cursor: 'pointer', display: selectedFaction === 'zaun' ? 'none' : 'block' }}
          />
          {selectedFaction === 'piltover' && (
            <div className="piltover-text">
              <h3 className='city'>Piltover</h3>
              <p className='city-description'>
                Piltover is a renowned progressive city, 
                dubbed the City of Progress for its innovations and Academy. 
                The city became particularly famous for its Hexgates, 
                the scientific utilization of what was dubbed Hextech 
                by its Piltovan pioneer, which revolutionized travel 
                and trade for the rest of the world, for which they have 
                since become the global shipping lane.
                </p>
            </div>
          )}
        </div>
      </Col>
      <Col lg={6} xs={5} className="zaun-col">
        <div className="zaun-container">
          <img
            src={LogoZaun}
            alt="Zaun"
            className="img-fluid zaun-image"
            onClick={() => toggleFaction('zaun')}
            style={{ cursor: 'pointer', display: selectedFaction === 'piltover' ? 'none' : 'block' }}
          />
          {selectedFaction === 'zaun' && (
            <div className="zaun-text">
              <h3 className='city'>Zaun</h3>
              <p className='city-description'>
                Zaun is a city across the river from Piltover,
                a large portion of which runs beneath the latter. 
                Whereas its upper counterpart is thriving and rich, 
                Zaun is the opposite, becoming almost literally the catch 
                basin of the waste from the city above it where its residents 
                try to survive from scraps spared to them. One known part of 
                Zaun is the Lanes.
                </p>
            </div>
          )}
        </div>
      </Col>
    </Row>


      </Container>
    </>
  );
};

export default Game;
