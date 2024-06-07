import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Characters.css';

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card-container">
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          <Card>
            {frontContent}
            <Button variant="outline-dark" onClick={handleFlip}>
              {isFlipped ? 'Hide Details' : 'Show Details'}
            </Button>
          </Card>
        </div>
        <div className="flip-card-back">
          <Card>
            {backContent}
            <Button variant="outline-dark" onClick={handleFlip}>
              {isFlipped ? 'Hide Details' : 'Show Details'}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

