import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <h1>Vetamart</h1>
            </div>
            <p>
              Come and vist you will find deals here and all product are
              available. Sit diam duis mauris nulla cursus. Erat et lectus vel
              ut sollicitudin elit at amet.
            </p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>
                {" "}
                5/10 (2nd Floor), Block E, Lalmatia, Mohammadpur, Dhaka-1207{" "}
              </li>
              <li>Email: aditirajput200017@gmail.com</li>
              <li>Phone: +91 920 86 52 </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
