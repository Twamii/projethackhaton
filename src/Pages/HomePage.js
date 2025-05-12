import { useState } from "react";
import NavbarScroll from "../Composants/Navbar";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faShield, faThumbsUp, faStar} from '@fortawesome/free-solid-svg-icons';
import photo1 from '../images/Pinata1.jpg';
import photo2 from '../images/Pinata4.jpg';
import photo3 from '../images/Pinata3.jpg';
import photo4 from '../images/Pinata6.jpg';
import photo5 from '../images/Pinata7.jpg';


function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);


  const handleCircleClick = (index) => {
    setActiveIndex(index);
  };

  const slides = [
    "Special 50% Off",
    "Special 40% Off",
    "Special 30% Off",
    "Special 20% Off",
  ];

  const [carouselImages, setCarouselImages] = useState([
    { src: photo1, alt: 'Photo 1', title: 'Cat on Radiator' },
    { src: photo2, alt: 'Photo 2', title: 'Cat on Tree' },
    { src: photo3, alt: 'Photo 3', title: 'Cat on Desk' },
    { src: photo4, alt: 'Photo 4', title: 'Cat in House' },
    { src: photo5, alt: 'Photo 5', title: 'Cat in Box' }
  ]);


  return (
    <div>
      <NavbarScroll />
      <Container>
        <Row>
          <Col xs={12} md={9} className="d-flex align-items-center py-5">
            <div className="homecard ps-5">
              <p className="pt-5 schooltext"><b>BACK TO SCHOOL</b></p>
              <h2 className="schooltitle"><b>{slides[activeIndex]}</b></h2>
              <p className="studenttext">for our student community</p>
              <div className="py-2">
                <small className="textblock">
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris.`}
                </small>
              </div>
              <div>
                <Button className="buttoncolorhome py-2 px-4 mt-4">
                  Get the deal <i className="fas fa-arrow-right ms-3"></i>
                </Button>
                <Button className="buttoncolorhome2 py-2 px-4 mt-4 ms-4">
                  See other promos
                </Button>
              </div>

              <div className="d-flex gap-3 py-5 pagination">
                {[0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className={index === activeIndex ? "circle active" : "circle"}
                    onClick={() => handleCircleClick(index)}
                  ></div>
                ))}
              </div>
            </div>
          </Col>

          <Col xs={12} md={3} className="d-flex align-items-center">
            <div className="homecard2">
              <h2 className="cardtitle2">Best Seller</h2>
              <p className="cardtext2"><small>Based sales this week</small></p>
              <div className="imagecontent carousel-wrapper">
                <Carousel controls={true} indicators={false} interval={3000}
                  activeIndex={carouselIndex}
                  onSelect={(selectedIndex) => setCarouselIndex(selectedIndex)}>
                  {carouselImages.map((img, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="carouselimage"
                        src={img.src}
                        alt={img.alt}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <p className="booktitle">{carouselImages[carouselIndex]?.title}</p>
              <p className="booktext"><small>ADVENTURE, SCIENCE, COMEDY</small></p>
              <Button className="px-4 bookbutton"><span className="text-muted text-decoration-line-through">60.00</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>USD 45.25</b></Button>
            </div>
          </Col>
        </Row>

        <Row className="py-5">
          
          <Col xs={12} md={3} className="d-flex justify-content-center justify-content-md-start mb-5 mb-md-0">
            <div className="d-flex">
              <div className="d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faTruckFast} size="lg" className="truckicon" />
              </div>
              <div className="truckiconpadding lh-sm">
                <p className="mb-1 fw-bold icontitle" >Quick Delivery</p>
                <small className="text-muted textblock iconsubtitle">
                  {`Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor .`}
                </small>
              </div>
            </div>
          </Col>

          <Col xs={12} md={3} className="d-flex justify-content-center justify-content-md-start mb-5 mb-md-0">
            <div className="d-flex">
              <div className="d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faShield} size="lg" className="truckicon" />
              </div>
              <div className="truckiconpadding lh-sm">
                <p className="mb-1 fw-bold icontitle" >Secure Payment</p>
                <small className="text-muted textblock iconsubtitle">
                  {`Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor .`}
                </small>
              </div>
            </div>
          </Col>

          <Col xs={12} md={3} className="d-flex justify-content-center justify-content-md-start mb-5 mb-md-0">
            <div className="d-flex">
              <div className="d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faThumbsUp} size="lg" className="truckicon" />
              </div>
              <div className="truckiconpadding lh-sm">
                <p className="mb-1 fw-bold icontitle" >Best Quality</p>
                <small className="text-muted textblock iconsubtitle">
                  {`Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor .`}
                </small>
              </div>
            </div>
          </Col>

          <Col xs={12} md={3} className="d-flex justify-content-center justify-content-md-start mb-5 mb-md-0">
            <div className="d-flex">
              <div className="d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faStar} size="lg" className="truckicon" />
              </div>
              <div className="truckiconpadding lh-sm">
                <p className="mb-1 fw-bold icontitle">Return Guarantee</p>
                <small className="text-muted textblock iconsubtitle">
                  {`Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor .`}
                </small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default HomePage;
