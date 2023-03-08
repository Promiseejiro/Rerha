import Carousel from "react-bootstrap/Carousel";
import image from "../../image/image1.jpg";

function Autocarosel() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img className="carosel-image" src={image} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carosel-image" src={image} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carosel-image" src={image} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Autocarosel;
