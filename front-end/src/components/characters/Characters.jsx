import React from 'react';
import FlipCard from './FilpCard.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import Piltover from '../../assets/Piltover-Banner.jpg';
import Zaun from '../../assets/Zaun-Banner.jpg';
import CharaOne from '../../assets/Character-Cait.png';
import CharaTwo from '../../assets/Character-Jayce.png';
import CharaThree from '../../assets/Character-Viktor.png';
import CharaFour from '../../assets/Character-Mel.png';
import CharaFive from '../../assets/Character-Vi.png';
import CharaSix from '../../assets/Character-Ekko.png';
import CharaSeven from '../../assets/Character-Jinx.png';
import CharaEight from '../../assets/Character-Silco.png';

const CardSection = () => {
  return (
    <div>
       <div className="banner-container">
        <img src={Piltover} alt="Banner" className="banner-image img-fluid" />
        <div className="character-banner-text">Piltover</div>
      </div>
      <Container>
        <Row className="card-row">
          <Col md={6} lg={6} className="card-col">
            <FlipCard            
              frontContent={
                <div className="flip-card-content">
                <div className="flip-card-text">
              <h2>Caitlyn Kiramman</h2>
                </div>
                <div className="flip-card-image">
                  <img src={CharaOne} alt="Immagine" className="img-fluid" />
                  </div>
                </div>
              }
              backContent={
                <div className="flip-card-content">
                <div className="flip-card-text invisible-scrollbar">
                  <p>
                Caitlyn Kiramman is the scion of House Kiramman, 
                one of the wealthiest and most influential families 
                of Piltover. Eager to prove herself from under the 
                powerful shadow and overbearing nature of her parents, 
                Caitlyn joined the Enforcers. With the Sheriff and her 
                parents—for very different reasons—constantly blocking 
                her efforts to further investigate a so-called conspiracy, 
                Caitlyn sets off on her own to find answers and gets more 
                than what she bargained for.
                  </p>
                  </div>
                  </div>
                
              }
            />
          </Col>
          <Col md={6} lg={6} className="card-col">
            <FlipCard
              frontContent={
                <div className='flip-card-content'>
                  <div className="flip-card-text">
                    <h2>Jayce Talis</h2>
                    </div>
                    <div className="flip-card-image">
                  <img src={CharaTwo} alt="Immagine" className="img-fluid" />
                  </div>
                </div>
              }
              backContent={
                <div className="flip-card-content">
                  <div className="flip-card-text invisible-scrollbar">
                  <p>
                Jayce Tails is a brilliant inventor who has 
                pledged his life to the defense of Piltover 
                and its unyielding pursuit of progress. With 
                his transforming hextech hammer in hand, Jayce 
                uses his strength, courage, and considerable 
                intelligence to protect his hometown. While 
                revered throughout the city as a hero, he hasn’t 
                taken well to the attention heroism brings. 
                Still, Jayce’s heart is in the right place, 
                and even those who envy his natural skills are 
                grateful for his protection in the City of Progress. 
                He is currently the Head of the Council of Piltover.
                  </p>
                </div>
                </div>
              }
            />
          </Col>
       
        <Col md={6} lg={6} className="card-col">
            <FlipCard
              frontContent={
                <div className="flip-card-content">
                <div className="flip-card-text">
                    <h2>Viktor</h2>
                    </div>
                    <div className="flip-card-image">
                  <img src={CharaThree} alt="Immagine" className="img-fluid" />
                </div>
                </div>     
              }
              backContent={
                <div className="flip-card-content">
                <div className="flip-card-text invisible-scrollbar">
                  <p>
                Viktor is an ambitious Zaunite inventor 
                who resides in Piltover, working as the partner 
                of Jayce Talis. Once brought into the Academy 
                as the assistant to Heimerdinger, Viktor worked 
                his way up from the undercity in hopes of 
                improving lives, but his research was complicated 
                upon discovering he was terminally ill. Nevertheless, 
                Viktor does not let his disease stop him and he 
                remains steadfast in finding a cure.
                  </p>
                </div>
                </div>
              }
            />
          </Col>

          <Col md={6} lg={6} className="card-col">
            <FlipCard
              frontContent={
                <div className="flip-card-content">                
                <div className="flip-card-text">
                   <h2>Mel Medarda</h2>
                </div>
                <div className="flip-card-image">
                  <img src={CharaFour} alt="Immagine" className="img-fluid" />
                 </div>
                </div>
              }
              backContent={
                <div className="flip-card-content">
                <div className="flip-card-text invisible-scrollbar">
                  <p>
                Mel Medarda is a Noxian aristocrat based 
                in Piltover Crest icon Piltover and a member 
                of Piltover's ruling council. A disowned 
                heir of the Medarda Clan, Mel is an ambitious 
                politician willing to do anything to put herself 
                at the top. Using her political prowess, 
                the actions she made have forever changed the 
                course of Piltover's history.
                  </p>
                </div>
                </div>
              }
            />
          </Col>
          </Row>
      </Container>

      <div className="banner-container">
        <img src={Zaun} alt="Banner" className="banner-image img-fluid" />
        <div className="character-banner-text">Zaun</div>
      </div>

      <Container>
        <Row>
        <Col md={6} lg={6} className="card-col">
            <FlipCard
              frontContent={
                <div className="flip-card-content">                
                <div className="flip-card-text">
                   <h2>Vi</h2>
                </div>
                <div className="flip-card-image">
                  <img src={CharaFive} alt="Immagine" className="img-fluid" />
                 </div>
                </div>
              }
              backContent={
                <div className="flip-card-content">
                <div className="flip-card-text invisible-scrollbar">
                  <p>
                When her parents were killed by Piltover 
                enforcers, Violet (commonly known as Vi) 
                and her sister Powder were taken in by Vander. 
                After a series of events following a heist gone 
                bad, Vi was separated from her sister and sent 
                to prison, only to be released years later by 
                a recently-dismissed enforcer who needs help 
                hunting down a dangerous Zaunite.
                  </p>
                </div>
                </div>
              }
            />
          </Col>

          <Col md={6} lg={6} className="card-col">
            <FlipCard
              frontContent={
                <div className="flip-card-content">                
                <div className="flip-card-text">
                   <h2>Ekko</h2>
                </div>
                <div className="flip-card-image">
                  <img src={CharaSix} alt="Immagine" className="img-fluid" />
                 </div>
                </div>
              }
              backContent={
                <div className="flip-card-content">
                <div className="flip-card-text invisible-scrollbar">
                  <p>
                Ekko is one of many children who grew up in the Lanes. 
                Upon the death of his mentor and disappearance of his 
                friends, Ekko finds a way to survive on his own. Using 
                his own invention, the Z-Drive, he explores the branching 
                possibilities of reality to craft the perfect moment. 
                Though he revels in this freedom, when there's a threat 
                to his friends, he'll do anything to defend them. 
                To outsiders, Ekko seems to achieve the impossible the 
                first time, every time.
                  </p>
                </div>
                </div>
              }
            />
          </Col>

          <Col md={6} lg={6} className="card-col">
            <FlipCard
              frontContent={
                <div className="flip-card-content">                
                <div className="flip-card-text">
                   <h2>Jinx</h2>
                </div>
                <div className="flip-card-image">
                  <img src={CharaSeven} alt="Immagine" className="img-fluid" />
                 </div>
                </div>
              }
              backContent={
                <div className="flip-card-content">
                <div className="flip-card-text invisible-scrollbar">
                  <p>
                Jinx, born as Powder, is a notorious Zaunite 
                criminal and Vi's younger sister. When she was 
                a little girl, her parents were killed in a 
                failed uprising against Piltover, leading Vander, 
                the unspoken leader of the undercity, to adopt 
                both her and Vi as his own daughters. After a 
                series of events forced Jinx and her sister apart 
                in more ways than one, she was fundamentally and 
                irrevocably changed, transforming her into the 
                demented killer she is today.
                  </p>
                </div>
                </div>
              }
            />
          </Col>

          <Col md={6} lg={6} className="card-col">
            <FlipCard
              frontContent={
                <div className="flip-card-content">                
                <div className="flip-card-text">
                   <h2>Silco</h2>
                </div>
                <div className="flip-card-image">
                  <img src={CharaEight} alt="Immagine" className="img-fluid" />
                 </div>
                </div>
              }
              backContent={
                <div className="flip-card-content">
                <div className="flip-card-text invisible-scrollbar">
                  <p>
                Silco was a drug lord Zaunite and Jinx's foster father. 
                A brutal and murderous tyrant, he tried to free the 
                Undercity from Piltover's control and wanted to do 
                anything to achieve that goal. His ambition and desire 
                to achieve power will lead him to become the leader of 
                the chemical barons who silently control Zaun.
                  </p>
                </div>
                </div>
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardSection;


