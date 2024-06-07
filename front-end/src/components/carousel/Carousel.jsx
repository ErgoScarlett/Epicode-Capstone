import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slideOne from '../../assets/carousel-1.jpg';
import slideTwo from '../../assets/carousel-2.jpg';
import slideThree from '../../assets/carousel-3.jpg';
import slideFour from '../../assets/carousel-4.jpg';
import slideFive from '../../assets/carousel-5.jpg';
import './Carousel.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
        <h2 className="carousel-heading">Take a look at what awaits you</h2>
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={slideOne}
          alt="First slide"
        />        
      </Carousel.Item>

      <Carousel.Item>
      <img
          className="d-block w-100"
          src={slideTwo}
          alt="First slide"
        />        
      </Carousel.Item>

      <Carousel.Item>
      <img
          className="d-block w-100"
          src={slideThree}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
      <img
          className="d-block w-100"
          src={slideFour}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
      <img
          className="d-block w-100"
          src={slideFive}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;