import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../Img/Banner111certo.png';
import Banner2 from '../Img/Banner2certo.png'; 
import Banner3 from '../Img/Banner3certo.png'; 

function Banner() {
  return (
    <Carousel> 
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-image" 
          src={Banner1}
          alt="Novo app!"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-image"
          src={Banner2}
          alt="Roleta de Descontos!"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-image"
          src={Banner3}
          alt="Novo app!"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;