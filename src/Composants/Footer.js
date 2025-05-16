import { Container, Row, Col } from "react-bootstrap";
import '../Pages/BookPage.css';

function Footer() {
  return (
    <footer className="bg-light text-dark py-5">
      <Container>
        <Row>
            <Col xs={12} md={3}>
            <h5>Book Store Website</h5>
            <p className="mb-2">
              Bookoe is a Book Store Website. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <p className="mb-1">© 2020 All Rights Reserved</p>
            <p className="mb-0">Made with ♥ by Peterdraw</p>
          </Col>
          <Col xs={12} md={3}>
            <h5>Books Categories</h5>
            <ul className="list-unstyled">
              <li>Action</li>
              <li>Adventure</li>
              <li>Comedy</li>
              <li>Crime</li>
              <li>Drama</li>
              <li>Fantasy</li>
              <li>Horror</li>
              <li>Mystery</li>
              <li>Romance</li>
              <li>TV Series</li>
              <li>View more</li>
            </ul>
          </Col>

          <Col xs={12} md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>About us</li>
              <li>Contact us</li>
              <li>Login</li>
              <li>Sign Up</li>
              <li>FAQ</li>
              <li>Shipment</li>
            </ul>
          </Col>

          <Col xs={12} md={3}>
            <h5>Our Store</h5>
        
            <ul className="list-unstyled">
              <li>832 Thompson Drive</li>
              <li>CA 94107, United States</li>
              <li>+123 345123 556</li>
              <li>support@bookoe.id</li>
            </ul>
          </Col>

          
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;