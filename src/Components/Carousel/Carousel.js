import Carousel from "react-bootstrap/Carousel";
import steel1 from '../../Assets/Images/steel1.jpg'
import steel2 from "../../Assets/Images/steel2.jpg";
import steel3 from "../../Assets/Images/steel3.jpg";


const HomeCarousel = () => {
  return (
    <div>
      <Carousel className="carousel" fade>
        <Carousel.Item>
          <img className="d-block" src={steel1} alt="First slide" />
          <Carousel.Caption>
            {/*<h3>First slide label</h3>*/}
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={steel2} alt="Second slide" />

          <Carousel.Caption>
           {/* <h3>Second slide label</h3>*/}
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={steel3} alt="Third slide" />

          <Carousel.Caption>
            {/*<h3>Third slide label</h3>*/}
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
