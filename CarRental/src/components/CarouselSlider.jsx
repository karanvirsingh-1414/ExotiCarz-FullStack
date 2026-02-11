import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/back_2.jpg"
          alt="First slide"
          style={{ objectFit: "cover", filter: "brightness(60%)" }}
        />
        <Carousel.Caption>
          <h1 className="fontzy">You need Thrill</h1>
          <p>Thrill that exhilarates you</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/mclaren_slide.webp"
          alt="Second slide"
          style={{ objectFit: "cover", filter: "brightness(60%)" }}
        />
        <Carousel.Caption>
          <h1 className="fontzy">You need Speed</h1>
          <p>Speed that Frightens you</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/back_por.webp"
          alt="Third slide"
          style={{ objectFit: "cover", filter: "brightness(60%)" }}
        />
        <Carousel.Caption>
          <h1 className="fontzy">You need Class</h1>
          <p>Class that sets you APART</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/lambo login.jpg"
          alt="Fourth slide"
          style={{ objectFit: "cover", filter: "brightness(60%)" }}
        />
        <Carousel.Caption>
          <h1 className="fontzy">You need Endurance</h1>
          <p>Endurance that always motivates you</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/background2.png"
          alt="Fifth slide"
          style={{ objectFit: "cover", filter: "brightness(100%)" }}
        />
        <Carousel.Caption>
          <h1 className="fontzy">You need Exoticarz</h1>
          <p>Cars driven with perfection</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlider;
