import {Alert, Badge, Button, Card, Col, Container, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {useContext, useEffect} from "react";
import {CartContext} from "../context/cart/CartContex.js";
import {PrevButton} from "../components/PrevButton.jsx";
import {ButtonAddPizzaToCart} from "../components/ButtonAddPizzaToCart.jsx";
import {clpFormat} from "../helpers/currencyFormatters.js";
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";
import {CartDetails} from "../components/CartDetails.jsx";

export const Cart = () => {

  const {cart} = useContext(CartContext);

  return (
    <Container className="margin-top-navbar bg-light rounded shadow-simple">
      <Row>
        <Col>
          <Card className="border-0 bg-light">
            <Card.Body>
              {
                cart.length === 0
                  ? (
                    <Alert variant="info">
                      <i className="bi bi-info-square-fill"></i> El carrito está vacío. Agregue productos primero.
                    </Alert>
                  )
                  : <CartDetails/>
              }
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <PrevButton/>
        </Col>
      </Row>
    </Container>
  );
};