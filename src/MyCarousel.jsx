import { Container , Carousel } from "react-bootstrap";
import nature1 from '../public/nature1.jpg';
import nature2 from '../public/nature2.jpg';
import nature3 from '../public/nature3.jpg';

function MyCarousel(){
    return(
        <>
          <Container fluid>
      <Carousel fade>
        <Carousel.Item>
        <Carousel.Caption>
            <h1>Shubham Sharma</h1>
        </Carousel.Caption>
          <img src={nature1} className="d-block w-100 height-100"></img>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption>
                <h1>Hemant Tyagi</h1>
            </Carousel.Caption>
          <img src={nature2} className="d-block w-100  height-10px"></img>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption>
                <h1>Hemant Tyagi</h1>
            </Carousel.Caption>
          <img src={nature3} className="d-block w-100  height-10px"></img>
        </Carousel.Item>
      </Carousel>
    </Container>

        </>
    )
}

export default MyCarousel;