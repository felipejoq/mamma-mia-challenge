import {Badge, Button, Card, Col, Image, ListGroup, Row} from "react-bootstrap";
import {clpFormat} from "../helpers/currencyFormatters.js";
import {ButtonAddPizzaToCart} from "./ButtonAddPizzaToCart.jsx";
import {useContext} from "react";
import {CartContext} from "../context/cart/CartContex.js";
import {toast} from "sonner";
import {Link} from "react-router-dom";
import {Ingredients} from "./ingredients/Ingredients.jsx";

export const CartDetails = () => {

  const {cart, totalCart} = useContext(CartContext);

  return (
    <>
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
        <i className="bi bi-card-list"></i> Su pedido es:
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
                  <Row className="d-flex justify-content-between gap-4">
                    <Col className="d-flex gap-3">
                      <Link to={`/pizzas/${item.slug}`}>
                        <Image className="img-thumbnail" src={item.img}/>
                      </Link>
                      <div className="text-capitalize">
                        <div className="item-name fs-4">
                          <p className="mb-1">
                            {item.name}
                            <small
                              className="fs-14 bg-light text-muted p-1 rounded ms-2 fw-light border text-lowercase"
                            >
                              {clpFormat(item.price)} c/u
                            </small>
                          </p>
                        </div>
                        <Ingredients
                          type="badges"
                          ingredients={item.ingredients}/>
                      </div>
                    </Col>
                    <Col className="d-flex gap-2 align-items-center justify-content-end">
                      <div className="fs-4 text-success fw-bold">
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
        <ListGroup.Item
          className="d-flex flex-column justify-content-end align-items-center gap-4 my-4 border-0 bg-light">
          <div className="d-flex justify-content-center align-items-center gap-4 border border-success p-2 rounded">
            <div className="fs-4">
              <i className="bi bi-calculator"></i> Total:
            </div>
            <Badge bg="success" className="fs-4">
              {clpFormat(totalCart)}
            </Badge>
          </div>
          <Button
            onClick={() => toast.info('Función aun no implementada.')}
            className="fs-5"
            variant="secondary"
          >
            <i className="bi bi-bag-check-fill"></i> Ir a pagar
          </Button>
        </ListGroup.Item>
      </ListGroup>
      <hr/>
    </>
  );
};