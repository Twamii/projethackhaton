import NavbarScroll from "../Composants/Navbar";
import { Container, Row, Col } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <NavbarScroll />
      <Container>
        <Row>
          <Col xs={12} md={8} className="d-flex align-items-center py-5">
            <div className="homecard ps-5">
              <p className="pt-5 schooltext"><b>BACK TO SCHOOL</b></p>
              <h2><b>Special 50% Off</b></h2>
              <p className="studenttext">for our student community</p>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod<br />
                tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim<br /> veniam, quis nostrud exercitation ullamco laboris
              </small>
            </div>
          </Col>
          <Col xs={6} md={4} className="d-flex align-items-center">
            <p>Coucouuu</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
