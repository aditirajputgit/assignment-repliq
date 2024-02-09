import {  useContext, useState } from "react";
import Banner from "../components/Banner/Banner";
import { DataContainer } from "../App";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
    const {selectedProduct,setSelectedProduct,addToCart} =useContext(DataContainer);
    /* params is add to get the id number  */
    const {id} =useParams();
    if(!selectedProduct) {
        const storedProduct =localStorage.getItem(`selectedProduct-${id}`);
        setSelectedProduct(JSON.parse(storedProduct));
    }
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };
    const handelAdd =(selectedProduct,quantity)=> {
        addToCart(selectedProduct,quantity);
    }
    return ( 
        <>
            <Banner title={selectedProduct?.productName} />
            <section className="product-page">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <img loading="lazy" src={selectedProduct?.imgUrl} alt=""/>
                        </Col>
                        <Col md={6}>
                            <h2>{selectedProduct?.productName}</h2>
                            <div className="rate">
                                <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                </div>
                                <span>{selectedProduct?.avgRating} ratings</span>
                            </div>
                            <div className="info">
                                <span className="price">${selectedProduct?.price}</span>
                                <span>category:{selectedProduct?.category}</span>
                            </div>
                            <p>{selectedProduct?.shortDesc}</p>
                            <input className="qty-input" type="number" placeholder="Qty" value={quantity} onChange={handleQuantityChange} />
                            <button aria-label="Add" type="submit" className="add" onClick={() => handelAdd(selectedProduct,quantity)}>Add To Cart</button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default ProductDetails;