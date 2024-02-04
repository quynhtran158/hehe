import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import dis1 from "../img/dis1.jpeg";
import p1 from "../img/p1.jpg";
import p2 from "../img/p2.jpeg";

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={dis1} atl="" />
        <Carousel.Caption>
          <h3>WE SUPPORT</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={p1} atl="" />
        <Carousel.Caption>
          <h3>FOR OUR RIGHTS</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={p2} atl="" />
        <Carousel.Caption>
          <h3>SOCIAL GOOD</h3>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
