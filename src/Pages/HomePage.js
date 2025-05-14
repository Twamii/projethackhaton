import { useState } from "react";
import NavbarScroll from "../Composants/Navbar";
import CountdownTest from "../Composants/Countdown";
import ButtonTest from "../Composants/Button/ButtonTest";
import SpecialCards from "../Composants/Cards/Cards";
import { Container, Row, Col, Button, Carousel, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faShield,
  faThumbsUp,
  faStar,
  faRightLong,
  faArrowRight,
  faCartShopping,
  faLeftLong,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import photo1 from "../images/Pinata1.jpg";
import photo2 from "../images/Pinata4.jpg";
import photo3 from "../images/Pinata3.jpg";
import photo4 from "../images/Pinata6.jpg";
import photo5 from "../images/Pinata7.jpg";

const slides = [
  "Special 50% Off",
  "Special 40% Off",
  "Special 30% Off",
  "Special 20% Off",
];

const carouselImages = [
  { src: photo1, alt: "Photo 1", title: "Cat on Radiator" },
  { src: photo2, alt: "Photo 2", title: "Cat on Tree" },
  { src: photo3, alt: "Photo 3", title: "Cat on Desk" },
  { src: photo4, alt: "Photo 4", title: "Cat in House" },
  { src: photo5, alt: "Photo 5", title: "Cat in Box" },
];

const cardImages = [
  { src: photo1, alt: "Photo 1", title: "REWORK" },
  { src: photo2, alt: "Photo 2", title: "SECONDS [PART 1]" },
  { src: photo3, alt: "Photo 3", title: "Terrible Madness" }
]

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleCards = () => {
    const total = cardImages.length;
    const left = (currentIndex - 1 + total) % total;
    const center = currentIndex;
    const right = (currentIndex + 1) % total;
    return [left, center, right].map((index) => ({
      ...cardImages[index],
      isCenter: index === center,
    }));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cardImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cardImages.length) % cardImages.length);
  };




  const handleArrowClick = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const renderCarousel = () => (
    <Carousel
      controls={false}
      indicators={false}
      interval={3000}
      activeIndex={carouselIndex}
      onSelect={(selectedIndex) => setCarouselIndex(selectedIndex)}
    >
      {carouselImages.map((img, index) => (
        <Carousel.Item key={index}>
          <img className="carouselimage" src={img.src} alt={img.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );

  const renderFeature = (icon, title, subtitle) => (
    <Col xs={12} md={3} className="d-flex justify-content-center justify-content-md-start mb-5 mb-md-0">
      <div className="d-flex">
        <div className="d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={icon} size="lg" className="truckicon" />
        </div>
        <div className="truckiconpadding lh-sm">
          <p className="mb-1 fw-bold icontitle">{title}</p>
          <small className="text-muted textblock iconsubtitle">{subtitle}</small>
        </div>
      </div>
    </Col>
  );

  return (
    <div>
      <NavbarScroll />
      <Container>
        <Row>
          <Col xs={12} md={9} className="d-flex align-items-center py-5">
            <div className="homecard ps-5">
              <p className="pt-5 schooltext">
                <b>BACK TO SCHOOL</b>
              </p>
              <h2 className="schooltitle">
                <b>{slides[activeIndex]}</b>
              </h2>
              <p className="studenttext">for our student community</p>
              <div className="py-2">
                <small className="textblock">
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris.`}
                </small>
              </div>
              <div className="d-flex">
                <div className="buttongetthedeal">
                  <Button className="buttoncolorhome">
                    Get the deal <FontAwesomeIcon icon={faArrowRight} className="rightarrowicon" />
                  </Button>
                </div>
                <div className="py-2 mt-4  buttonscale">
                  <ButtonTest /></div>
              </div>
              <div className="">
                <div className="d-flex gap-3  pagination">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={index === activeIndex ? "circle active" : "circle"}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>
              </div></div>
          </Col>

          <Col xs={12} md={3} className="d-flex align-items-center">
            <div className="homecard2">
              <h2 className="cardtitle2">Best Seller</h2>
              <p className="cardtext2">
                <small>Based on sales this week</small>
              </p>
              <div className="imagecontent carousel-wrapper">{renderCarousel()}</div>
              <p className="booktitle">{carouselImages[carouselIndex]?.title}</p>
              <p className="booktext">
                <small>ADVENTURE, SCIENCE, COMEDY</small>
              </p>
              <Button className="px-4 bookbutton">
                <span className="text-muted text-decoration-line-through">
                  60.00
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>USD 45.25</b>
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="py-5">
          {renderFeature(
            faTruckFast,
            "Quick Delivery",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          )}
          {renderFeature(
            faShield,
            "Secure Payment",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          )}
          {renderFeature(
            faThumbsUp,
            "Best Quality",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          )}
          {renderFeature(
            faStar,
            "Return Guarantee",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          )}
        </Row>

        <Row className="py-5">
          <Col xs={12} md={6} className="d-flex justify-content-center mb-4 mb-md-0">
            <div className="orangerectangle ps-5">
              <h3 className="orangerectangletitle">Recomended For You</h3>
              <p className="textblock orangerectangletext">
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
              </p>
              <div className="d-flex gap-4 align-items-center justify-content-center">
                <div className="rectangle1">{renderCarousel()}</div>
                <div className="rectangle1">{renderCarousel()}</div>
                <div className="arrowiconcircle">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size="2xl"
                    className="arrowicon"
                    onClick={handleArrowClick}
                  /></div>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} className="d-flex justify-content-center">
            <div className="bluerectangle ps-5">
              <h3 className="orangerectangletitle">Popular in 2020</h3>
              <p className="textblock orangerectangletext">
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
              </p>
              <div className="d-flex gap-4 align-items-center justify-content-center">
                <div className="rectangle1">{renderCarousel()}</div>
                <div className="rectangle1">{renderCarousel()}</div>
                <div className="arrowiconcircle">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size="2xl"
                    className="arrowicon"
                    onClick={handleArrowClick}
                  /></div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12} className="d-flex flex-column justify-content-center align-items-center">
            <h3 className="offerstitle">Special Offers</h3><br />
            <p className="textblock text-center offerstext">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.`}
            </p>
          </Col>
        </Row>

        <Row className="py-5">
          {getVisibleCards().map((card, index) => {
            const isMobileOnly = !card.isCenter;

            return (
              <Col key={index} xs={12} md={4} className={`d-flex justify-content-center align-items-center ${isMobileOnly ? "d-none d-md-flex" : ""}`}>
                <Card className={`card ${card.isCenter ? "middlecard" : ""}`}>
                  <Card.Img variant="top" src={card.src} className="cardimg" />
                  <Card.Body>
                    <Card.Title className="cardtitlebook">{card.title}</Card.Title>
                    <Card.Text>
                      <div className="genre d-flex gap-2">
                        <div className="genre2">
                          Biography
                        </div>
                        <div className="genre2">
                          Thriller
                        </div>
                        <div className="genre2">
                          Horror
                        </div>
                      </div>
                    </Card.Text>
                    <Card.Text className="cardtitletext">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Card.Text className="cardtitleauthor">
                      Kevin Smiley
                    </Card.Text>
                    <div className="d-flex gap-5">
                      <Button className="buttoncolorhome py-2 px-4">
                        <FontAwesomeIcon icon={faCartShopping} className="purchaseicon" />Add to Cart
                      </Button>
                      <div className="pt-2">
                        <b className="moneysize">$18.78</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-decoration-line-through moneysize2">$25</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
          <div className="py-5 d-flex justify-content-center align-items-center gap-5">
            <div className="superarrowcircle" onClick={handlePrev}>
              <FontAwesomeIcon icon={faLeftLong} className="superarrow" />
            </div>
            <div className="superarrowcircle" onClick={handleNext}>
              <FontAwesomeIcon icon={faRightLong} className="superarrow" />
            </div>
          </div>
        </Row>
        <Row>
          <Col className="justify-content-center align-items-center text-center py-2">
            <h3 className="flashtitle">Flash Sale</h3>
            <p className="textblock flashtext">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.`}</p>
            <CountdownTest />
          </Col>
        </Row>
        <Row className="py-5">
          <Col xs={12} md={3} className="mb-5 mb-md-0">
            <div className="d-flex flex-column align-items-center">
              <SpecialCards />
              <h4 className="specialcardstitle">SECONDS</h4>
              <small className="specialcardsgenre">THRILLER</small>
              <div><b className="specialcardsmoney">$ 54.78</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-muted text-decoration-line-through">
                $70.00
              </span></div>
            </div>
          </Col>
          <Col xs={12} md={3} className="mb-5 mb-md-0">
            <div className="d-flex flex-column align-items-center">
              <SpecialCards />
              <h4 className="specialcardstitle">REWORK</h4>
              <small className="specialcardsgenre">DRAMA, BIOGRAPHY</small>
              <div><b className="specialcardsmoney">$ 34.56</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-muted text-decoration-line-through">
                $50.00
              </span></div>
            </div>
          </Col>
          <Col xs={12} md={3} className="mb-5 mb-md-0">
            <div className="d-flex flex-column align-items-center">
              <SpecialCards />
              <h4 className="specialcardstitle">Such a Fun Age</h4>
              <small className="specialcardsgenre">THRILLER</small>
              <div><b className="specialcardsmoney">$ 14.56</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-muted text-decoration-line-through">
                $20.00
              </span></div>
            </div>
          </Col>
          <Col xs={12} md={3} className="mb-5 mb-md-0">
            <div className="d-flex flex-column align-items-center">
              <SpecialCards />
              <h4 className="specialcardstitle">Battle Drive</h4>
              <small className="specialcardsgenre">DRAMA, BIOGRAPHY</small>
              <div><b className="specialcardsmoney">$ 76.12</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-muted text-decoration-line-through">
                $99.00
              </span></div>
            </div>
          </Col>
        </Row>
        <Row className="py-5">
          <Col>
            <h3 className="salesbigtitle text-center text-md-start">Books on Sale</h3>
          </Col>
        </Row>
        <Row className="gap-5">
          <Col xs={12} md={2} className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <div className="salescard"><div className="sales">50%</div></div>
              <h4 className="specialcardstitle salestitle">Battle Drive</h4>
              <small className="specialcardsgenre">ADVENTURE, SURVIVAL</small>
              <div className="d-flex justify-content-between align-items-center mt-2 w-100">
                <div className="starcolor">
                  <FontAwesomeIcon icon={faStar} /> &nbsp; 4.7
                </div>
                <div className="salesmoneysize">
                  <b className="salesmoney">$76.12</b>
                  &nbsp;
                  <span className="text-muted text-decoration-line-through">
                    $99.00
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={2} className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <div className="salescard"><div className="sales">50%</div></div>
              <h4 className="specialcardstitle salestitle">Battle Drive</h4>
              <small className="specialcardsgenre">ADVENTURE, SURVIVAL</small>
              <div className="d-flex justify-content-between align-items-center mt-2 w-100">
                <div className="starcolor">
                  <FontAwesomeIcon icon={faStar} /> &nbsp; 4.7
                </div>
                <div className="salesmoneysize">
                  <b className="salesmoney">$76.12</b>
                  &nbsp;
                  <span className="text-muted text-decoration-line-through">
                    $99.00
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={2} className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <div className="salescard"><div className="sales">50%</div></div>
              <h4 className="specialcardstitle salestitle">Battle Drive</h4>
              <small className="specialcardsgenre">ADVENTURE, SURVIVAL</small>
              <div className="d-flex justify-content-between align-items-center mt-2 w-100">
                <div className="starcolor">
                  <FontAwesomeIcon icon={faStar} /> &nbsp; 4.7
                </div>
                <div className="salesmoneysize">
                  <b className="salesmoney">$76.12</b>
                  &nbsp;
                  <span className="text-muted text-decoration-line-through">
                    $99.00
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={2} className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <div className="salescard"><div className="sales">50%</div></div>
              <h4 className="specialcardstitle salestitle">Battle Drive</h4>
              <small className="specialcardsgenre">ADVENTURE, SURVIVAL</small>
              <div className="d-flex justify-content-between align-items-center mt-2 w-100">
                <div className="starcolor">
                  <FontAwesomeIcon icon={faStar} /> &nbsp; 4.7
                </div>
                <div className="salesmoneysize">
                  <b className="salesmoney">$76.12</b>
                  &nbsp;
                  <span className="text-muted text-decoration-line-through">
                    $99.00
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={2} className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <div className="salescard"><div className="sales">50%</div></div>
              <h4 className="specialcardstitle salestitle">Battle Drive</h4>
              <small className="specialcardsgenre">ADVENTURE, SURVIVAL</small>
              <div className="d-flex justify-content-between align-items-center mt-2 w-100">
                <div className="starcolor">
                  <FontAwesomeIcon icon={faStar} /> &nbsp; 4.7
                </div>
                <div className="salesmoneysize">
                  <b className="salesmoney">$76.12</b>
                  &nbsp;
                  <span className="text-muted text-decoration-line-through">
                    $99.00
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
