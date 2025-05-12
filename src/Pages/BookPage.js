import NavbarScroll from "../Composants/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import './BookPage.css'

function BookPage() {
  return (
    <div>
      <NavbarScroll />
      <Container>
        <Row>
          <Col xs={12} md={6} className="d-flex align-items-center py-5">

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BookPage;
