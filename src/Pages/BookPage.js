import NavbarScroll from "../Composants/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import './BookPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Composants/Footerooter";

import {
  faTruckFast,
  faShield,
  faThumbsUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function Feature({ icon, title, subtitle }) {
  return (
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
}

function BookPage() {
  return (
    <div>
      <NavbarScroll />

      <Container>
        <Row className="py-5">
          <Feature
            icon={faTruckFast}
            title="Quick Delivery"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Feature
            icon={faShield}
            title="Secure Payment"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Feature
            icon={faThumbsUp}
            title="Best Quality"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Feature
            icon={faStar}
            title="Return Guarantee"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </Row>
      </Container>
      <div className="newsletter-section text-white py-4 px-3 mb-4">
        <Container>
          <Row className="align-items-center">
            <Col xs={12}>
              <p className="newsletter-heading text-center text-md-start">
                Subscribe our newsletter for newest books updates
              </p>
            </Col>

            <Col xs={12} md={6}>
              <form className="d-flex flex-column flex-md-row gap-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Type your email here"
                  required
                />
                <button type="submit" className="btn btn-light text-purple fw-bold">
                  Subscribe
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default BookPage;