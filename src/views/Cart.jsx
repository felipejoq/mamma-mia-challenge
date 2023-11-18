import {Badge, Button, Card, Col, Container, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {useContext} from "react";
import {CartContext} from "../context/cart/CartContex.js";
import {PrevButton} from "../components/PrevButton.jsx";
import {ButtonAddPizzaToCart} from "../components/ButtonAddPizzaToCart.jsx";
import {clpFormat} from "../helpers/currencyFormatters.js";

export const Cart = () => {

  const {cart, totalCart} = useContext(CartContext);

  return (
    <Container className="margin-top-navbar bg-light rounded shadow-simple">
      <Row>
        <Col>
          <Card className="border-0 bg-light">
            <Card.Body>
              <Card.Title>
                <h1 className="fs-3">
                  <i className="bi bi-basket"></i> Carrito de compras
                </h1>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Detalles de su pedido
              </Card.Subtitle>
              <hr/>
              <Card.Subtitle className="mb-2 fs-5 text-muted">
                <i className="bi bi-card-list"></i> Productos
              </Card.Subtitle>
              <ListGroup>
                {
                  cart.map(item => (
                    <ListGroup.Item
                      key={item.id}
                      className="d-flex justify-content-between align-items-center"
                    >
                      <Row className="w-100">
                        <Col>
                          <Row className="d-flex justify-content-between">
                            <Col className="d-flex justify-content-between gap-2">
                              <Image className="img-thumbnail" src={item.img}/>
                              <div className="text-capitalize">
                                <div className="item-name fs-4">
                                  {item.name}
                                </div>
                                <div className="item-ingredients d-flex gap-2">
                                  <Badge bg="secondary">Ingredientes</Badge>
                                  {
                                    item.ingredients.map(ingredient => (
                                      <Badge key={ingredient} bg="success">{ingredient}</Badge>
                                    ))
                                  }
                                </div>
                              </div>
                            </Col>
                            <Col className="d-flex gap-2 align-items-center justify-content-end">
                              <div className="fs-4">
                                {clpFormat(item.price * item.quantity)}
                              </div>
                              <div>
                                <ButtonAddPizzaToCart pizza={item}/>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))
                }
              </ListGroup>
              <ListGroup>
                <ListGroup.Item className="d-flex flex-column justify-content-end align-items-center gap-4 my-4 border-0 bg-light">
                  <div className="d-flex justify-content-center gap-4 border border-success p-2 rounded">
                    <div className="fs-4">
                      <i className="bi bi-basket"></i> Total:
                    </div>
                    <Badge bg="success" className="fs-4">
                      {clpFormat(totalCart)}
                    </Badge>
                  </div>
                  <Button className="fs-5" variant="secondary">
                    <i className="bi bi-bag-check-fill"></i> Ir a pagar
                  </Button>
                </ListGroup.Item>
              </ListGroup>
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