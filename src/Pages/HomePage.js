import { useState } from "react";
import NavbarScroll from "../Composants/Navbar";
import CountdownTest from "../Composants/Countdown";
import Testimony from "../Composants/Testimony";
import Footer from "../Composants/Footer";
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
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

import HomePageData from "../Composants/Data/HomePageData";
import BookPage from "./BookPage";

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselIndexTwo, setCarouselIndexTwo] = useState(0);
  const [carouselIndexThree, setCarouselIndexThree] = useState(0);
  const [carouselIndexFour, setCarouselIndexFour] = useState(0);
  const [carouselIndexFive, setCarouselIndexFive] = useState(0);
  // const [selectedImage, setSelectedImage] = useState(HomePageData.bookImages.book30);
  const [selectedBook, setSelectedBook] = useState(HomePageData.books[0]); // Livre par défaut

  const handleImageClick = (book) => {
    setSelectedBook(book);
  };

  const getVisibleCards = () => {
    const total = HomePageData.cardImages.length;
    const left = (currentIndex - 1 + total) % total;
    const center = currentIndex;
    const right = (currentIndex + 1) % total;
    return [left, center, right].map((index) => ({
      ...HomePageData.cardImages[index],
      isCenter: index === center,
    }));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HomePageData.cardImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HomePageData.cardImages.length) % HomePageData.cardImages.length);
  };

  const handleArrowClick = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % HomePageData.recomendedImages.length);
  };

  const renderCarousel = () => (
    <Carousel
      controls={false}
      indicators={false}
      interval={3000}
      activeIndex={carouselIndex}
      onSelect={(selectedIndex) => setCarouselIndex(selectedIndex)}
    >
      {HomePageData.carouselImages.map((img, index) => (
        <Carousel.Item key={index}>
          <img className="carouselimage" src={img.src} alt={img.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );

  const handleclick = () => {
    setCarouselIndexTwo((prevIndex) => (prevIndex + 1) % HomePageData.recomendedImages.length);
  };

  const renderCarouselTwo = () => (
    <Carousel
      controls={false}
      indicators={false}
      interval={3000}
      activeIndex={carouselIndexTwo}
      onSelect={(selectedIndexTwo) => setCarouselIndexTwo(selectedIndexTwo)}
    >
      {HomePageData.recomendedImages.map((img, index) => (
        <Carousel.Item key={index}>
          <img className="carouselimage" src={img.src} alt={img.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );

  const handleclickTwo = () => {
    setCarouselIndexThree((prevIndex) => (prevIndex + 1) % HomePageData.recomendedImagesTwo.length);
  };

  const renderCarouselThree = () => (
    <Carousel
      controls={false}
      indicators={false}
      interval={3000}
      activeIndex={carouselIndexThree}
      onSelect={(selectedIndexThree) => setCarouselIndexThree(selectedIndexThree)}
    >
      {HomePageData.recomendedImagesTwo.map((img, index) => (
        <Carousel.Item key={index}>
          <img className="carouselimage" src={img.src} alt={img.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );

  const handleclickThree = () => {
    setCarouselIndexFour((prevIndex) => (prevIndex + 1) % HomePageData.popularImages.length);
  };

  const renderCarouselFour = () => (
    <Carousel
      controls={false}
      indicators={false}
      interval={3000}
      activeIndex={carouselIndexFour}
      onSelect={(selectedIndexFour) => setCarouselIndexFour(selectedIndexFour)}
    >
      {HomePageData.popularImages.map((img, index) => (
        <Carousel.Item key={index}>
          <img className="carouselimage" src={img.src} alt={img.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );

  const handleclickFour = () => {
    setCarouselIndexFive((prevIndex) => (prevIndex + 1) % HomePageData.popularImagesTwo.length);
  };

  const renderCarouselFive = () => (
    <Carousel
      controls={false}
      indicators={false}
      interval={3000}
      activeIndex={carouselIndexFive}
      onSelect={(selectedIndexFive) => setCarouselIndexFive(selectedIndexFive)}
    >
      {HomePageData.popularImagesTwo.map((img, index) => (
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
                <b>{HomePageData.slides[activeIndex]}</b>
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
                  {HomePageData.slides.map((_, index) => (
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
              <p className="booktitle">{HomePageData.carouselImages[carouselIndex]?.title}</p>
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
                <div className="rectangle1">{renderCarouselTwo()}</div>
                <div className="rectangle1">{renderCarouselThree()}</div>
                <div className="arrowiconcircle">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size="2xl"
                    className="arrowicon"
                    onClick={() => {
                      handleclick();
                      handleclickTwo();
                    }}
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
                <div className="rectangle1">{renderCarouselFour()}</div>
                <div className="rectangle1">{renderCarouselFive()}</div>
                <div className="arrowiconcircle">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size="2xl"
                    className="arrowicon"
                    onClick={() => {
                      handleclickThree();
                      handleclickFour();
                    }}
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
              <SpecialCards imageForSales={HomePageData.bookImages.book21} />
              <h4 className="specialcardstitle">Stay With Me</h4>
              <small className="specialcardsgenre">THRILLER</small>
              <div><b className="specialcardsmoney">$ 54.78</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-muted text-decoration-line-through">
                $70.00
              </span></div>
            </div>
          </Col>
          <Col xs={12} md={3} className="mb-5 mb-md-0">
            <div className="d-flex flex-column align-items-center">
              <SpecialCards imageForSales={HomePageData.bookImages.book22} />
              <h4 className="specialcardstitle">TIME</h4>
              <small className="specialcardsgenre">DRAMA, BIOGRAPHY</small>
              <div><b className="specialcardsmoney">$ 34.56</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-muted text-decoration-line-through">
                $50.00
              </span></div>
            </div>
          </Col>
          <Col xs={12} md={3} className="mb-5 mb-md-0">
            <div className="d-flex flex-column align-items-center">
              <SpecialCards imageForSales={HomePageData.bookImages.book23} />
              <h4 className="specialcardstitle">Green Thumb Poppy</h4>
              <small className="specialcardsgenre">THRILLER</small>
              <div><b className="specialcardsmoney">$ 14.56</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-muted text-decoration-line-through">
                $20.00
              </span></div>
            </div>
          </Col>
          <Col xs={12} md={3} className="mb-5 mb-md-0">
            <div className="d-flex flex-column align-items-center">
              <SpecialCards imageForSales={HomePageData.bookImages.book24} />
              <h4 className="specialcardstitle">Love Story</h4>
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
              <div className="salescard"><img src={HomePageData.bookImages.book25} className="salesimg" /><div className="sales">50%</div></div>
              <h4 className="specialcardstitle salestitle">Hearts Aglow</h4>
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
              <div className="salescard"><img src={HomePageData.bookImages.book26} className="salesimg" /><div className="sales">50%</div></div>
              <h4 className="specialcardstitle salestitle">The Story of The Tree</h4>
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
              <div className="salescard"><img src={HomePageData.bookImages.book27} className="salesimg" /><div className="sales">50%</div></div>
              <h4 className="specialcardstitle salestitle">Beneath The Sea</h4>
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
              <div className="salescard"><img src={HomePageData.bookImages.book28} className="salesimg" /><div className="sales">50%</div></div>
              <h4 className="specialcardstitle salestitle">Where Truth hides</h4>
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
              <div className="salescard"><img src={HomePageData.bookImages.book29} className="salesimg" /><div className="sales">50%</div></div>
              <h4 className="specialcardstitle salestitle">Walk Into the Shadow</h4>
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
      <div className="py-5"></div>
      <div className="bigrectangle py-5">
        <Container>
          <Row lassName="d-flex flex-column align-items-center gap-4 d-md-block">
            <Col xs={12} md={8} className="d-flex flex-column align-items-center align-items-md-start mb-4 mb-md-0">
              <div className="divtext">
                <h3 className="featuredtitle">Featured Books</h3>
                <p className="featuredtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore</p>
                <div className="featuredbookcard">
                  <div className="featuredbook">
                    <img src={selectedBook.image} alt="Selected book" />
                  </div>
                  <div className="featuredbookdescription">
                    <div className="featuredbookiconandtitle">
                      <FontAwesomeIcon icon={faBookmark} className="bookmarkicon" />
                      <div className="starcircle"><FontAwesomeIcon icon={faStar} className="starbookmarkicon" /></div>
                      <div className="featuredbooktexts">
                        <p className="featuredbooktitle">{selectedBook.title}</p>
                        <p className="featuredbookgenre">{selectedBook.genre}</p>
                      </div>
                    </div>
                    <p className="synopsis">Synopsis</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="featuredbookauthorblock">
                      <div className="featuredbookauthoranddate">
                        <p className="featuredbookwrittenby">Writen by</p>
                        <p className="featuredbookauthor">{selectedBook.author}</p>
                      </div>
                      <div className="featuredbookauthoranddate">
                        <p className="featuredbookwrittenby">Year</p>
                        <p className="featuredbookauthor">{selectedBook.year}</p>
                      </div>
                    </div>
                    <div className="d-flex gap-5 pt-4">
                      <div className="pt-2">
                        <b className="moneysize">{selectedBook.price}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-decoration-line-through moneysize2">{selectedBook.oldPrice}</span>
                      </div>&nbsp;
                      <Button className="buttoncolorhome py-2 px-4">
                        <FontAwesomeIcon icon={faCartShopping} className="purchaseicon" />ADD
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} className="ml-auto d-flex justify-content-end">
              <div className="row row-cols-2">
                {HomePageData.books.map((book) => (
                  <div key={book.id} className="col mb-4">
                    <div
                      className="featuredbookimage"
                      onClick={() => handleImageClick(book)}
                    >
                      <img
                        src={book.image}
                        alt={book.title}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-5"></div>
      <Testimony />
      <div className="py-5"></div>
      <Container>
        <Row className="py-5">
          <Col>
            <h3 className="salesbigtitle text-center text-md-start">Latest News</h3>
            <p className="latestnews-text text-center text-md-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <div className="d-flex flex-column align-items-center align-items-md-start latestnews-card">
              <div className="latestnews-imgcard"><img src={HomePageData.bookImages.book35} className="latestnews-img" /></div>
              <h4 className="latestnews-title">Why reading is important for our children?</h4>
              <p className="latestnews-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
              <small className="latestnews-continue">Continue reading</small>
              <div className="latestnews-end">
                <p className="latestnews-author">Lidya Humble</p>
                <p className="latestnews-description">2 days ago</p>
              </div>
            </div>
          </Col>
           <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <div className="d-flex flex-column align-items-center align-items-md-start latestnews-card">
              <div className="latestnews-imgcard"><img src={HomePageData.bookImages.book36} className="latestnews-img" /></div>
              <h4 className="latestnews-title">Benefits of reading: Smart, Diligent, Happy</h4>
              <p className="latestnews-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
              <small className="latestnews-continue">Continue reading</small>
              <div className="latestnews-end">
                <p className="latestnews-author">Steffanny William</p>
                <p className="latestnews-description">5 August 2020</p>
              </div>
            </div>
          </Col>
           <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <div className="d-flex flex-column align-items-center align-items-md-start latestnews-card">
              <div className="latestnews-imgcard"><img src={HomePageData.bookImages.book37} className="latestnews-img" /></div>
              <h4 className="latestnews-title">What books you should read in 2020?</h4>
              <p className="latestnews-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
              <small className="latestnews-continue">Continue reading</small>
              <div className="latestnews-end">
                <p className="latestnews-author">James Wong</p>
                <p className="latestnews-description">3 August 2020</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="py-4"></div>
      <BookPage />
      <Footer/>
    </div>
  );
}

export default HomePage;
