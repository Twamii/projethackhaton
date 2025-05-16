import { Container, Row, Col } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Slider from "react-slick";

const avisClients = [
    {
        id: 1,
        nom: "Steve Henry",
        avis: "Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!",
        note: 5,
        date: "2025-03-18",
    },
    {
        id: 2,
        nom: "Bob Martin",
        avis: "Very bad website !!! It's full of lag !",
        note: 1,
        date: "2025-03-17",
    },
    {
        id: 3,
        nom: "Claire Bernard",
        avis: "I don't understand the hype around Bookoe, the books are really overpriced. You can find the same for half the price in others bookstores.",
        note: 2,
        date: "2025-03-16",
    },
    {
        id: 4,
        nom: "David Lefevre",
        avis: "Delivery was quick but the book arrived a bit damaged",
        note: 3,
        date: "2025-03-15",
    },
    {
        id: 5,
        nom: "Eva Petit",
        avis: "I never know this shop before, until my grandma tell me how excelent this book store",
        note: 4,
        date: "2025-03-14",
    },
];

function Testimony() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <Container id="avis">
            <Row>
                <Col className="text-center py-5">
                    <h3 className="testimony-title">Testimonials</h3>
                    <p className="py-3 avis-texte">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                    <Slider {...settings} className="py-3">
                        {avisClients.map((avis) => (
                            <div key={avis.id} className="avis-slide">
                                <h3>{avis.nom}</h3>
                                <p>{avis.avis}</p>
                                <div className="star-rating">
                                    {Array.from({ length: 5 }, (_, i) =>
                                        i < avis.note ? (
                                            <AiFillStar key={i} color="#FF754C" size={20} />
                                        ) : (
                                            <AiOutlineStar key={i} color="#ccc" size={20} />
                                        )
                                    )}
                                </div>

                                <div className="date">
                                    <em>{avis.date}</em>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Col>
            </Row>
        </Container>
    );
}

export default Testimony;