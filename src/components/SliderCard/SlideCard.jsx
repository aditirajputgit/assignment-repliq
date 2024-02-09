import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./slidercard.css";


const SlideCard = ({title,desc,cover}) => {
  return (
    <>
      <div className="home-container">
        <Container className="box">
          <Row>
            <Col md={6}>
              <h1>{title}</h1>
              <p>{desc}</p>
              <Link to="/products">
                {" "}
                <button className="btn-primary">Visit Collections</button>{" "}
              </Link>
            </Col>
            <Col md={6}>
              <img src={cover} alt="#" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SlideCard
