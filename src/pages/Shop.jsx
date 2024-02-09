import { Col, Container, Row } from "react-bootstrap";
import {  useContext } from "react";
import { products } from "../utils/products";
import ShopList from "../components/ShopList";
import Banner from "../components/Banner/Banner";
import { DataContainer } from "../App";
import "./pages.css"

const Shop = () => {
    const {addToCart} = useContext(DataContainer);
    return (
      <>
        <Banner title="product" />
        <section className="filter-bar">
          <Container className="filter-bar-contianer">
            <Row className="justify-content-center">
              <Col md={8}>
                <div className="search-container">
                  <input type="text" placeholder="Search..." />
                  <ion-icon
                    name="search-outline"
                    className="search-icon"
                  ></ion-icon>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <ShopList productItems={products} addToCart={addToCart} />
          </Container>
        </section>
      </>
    );
}

export default Shop;