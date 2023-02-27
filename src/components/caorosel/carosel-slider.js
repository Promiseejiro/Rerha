import Carousel from "react-bootstrap/Carousel";
import image from "../../image/image1.jpg";

function Autocarosel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="First slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="Second slide" />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="Third slide" />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Autocarosel;
