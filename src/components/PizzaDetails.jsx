import {Card, Col, Row} from "react-bootstrap";
import {IngredientsList} from "./IngredientsList.jsx";
import {Price} from "./Price.jsx";
import {ButtonAddPizzaToCart} from "./ButtonAddPizzaToCart.jsx";
import {PrevButton} from "./PrevButton.jsx";

export const PizzaDetails = ({pizza}) => {

  return (
    <>
      <Row className="d-flex justify-content-center align-items-center rounded-2 w-100 bg-light">
        <Col xl className="img-pizza-info">
          <img src={pizza.img} alt={pizza.name} className="rounded"/>
        </Col>
        <Col xl>
          <Card className="rounded-0 border-0 bg-light">
            <Card.Body>
              <Card.Title>
                <h1 className="fs-2 text-capitalize">
                  {pizza.name}
                </h1>
              </Card.Title>
              <hr/>
              <p>
                {pizza.desc}
              </p>
              <hr/>
              {
                pizza.ingredients
                && <IngredientsList ingredients={pizza.ingredients}/>
              }
              <hr/>
              <Row className="d-flex justify-content-between align-items-stretch">
                <Col>
                  <Price price={pizza.price} size="lg"/>
                </Col>
                <Col className="d-flex justify-content-between align-items-stretch">
                  <ButtonAddPizzaToCart pizza={pizza}/>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <PrevButton />
      </Row>
    </>
  );
};