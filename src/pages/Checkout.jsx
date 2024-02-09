import { useContext } from "react";
import { DataContainer } from "../App";
import { Col, Container, Row } from "react-bootstrap";
import "./pages.css";

const CheckOut = () => {
  const { CartItem } =
    useContext(DataContainer);
  const totalPrice = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  function addingItem() {
    return CartItem.map((item) => {
      const productQty = item.price * item.qty;
      return (
        <div className="cart-list" key={item.id}>
          <Row>
            <Col className="image-holder" sm={4} md={3}>
              <img src={item.imgUrl} alt="" />
            </Col>
            <Col sm={8} md={9}>
              <Row className="cart-content justify-content-center">
                <Col xs={12} sm={9} className="cart-details">
                  <h3>{item.productName}</h3>
                  <h4>
                    ${item.price}.00 * {item.qty}
                    <span>${productQty}.00</span>
                  </h4>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      );
    });
  }

  return (
    <section className="cart-items ">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>{addingItem()}</Col>
        </Row>
        <Col md={4}>
          <div className="cart-total">
            <div className=" d_flex">
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>

          <button className="pay-button">Pay</button>
        </Col>
      </Container>
    </section>
  );
};

export default CheckOut;
