import {Cover} from "../components/Cover.jsx";
import {Col, Container, Row} from "react-bootstrap";
import {PizzaCard} from "../components/pizza/PizzaCard.jsx";
import {useContext} from "react";
import {GlobalContext} from "../context/global/GlobalContext.js";

export const Home = () => {

  const {pizzas, isLoading} = useContext(GlobalContext)

  return (
    <>
      <Cover/>
      <Container className="d-flex justify-content-center my-4">
        <Row>
          {
            isLoading
              ? "Cargando..."
              : pizzas.map(pizza => (
                <Col
                  key={pizza.id}
                  className="d-flex justify-content-center my-2"
                >
                  <PizzaCard pizza={pizza}/>
                </Col>
              ))
          }
        </Row>
      </Container>
    </>
  );
};