import {Container} from "react-bootstrap";
import cover from "../assets/pizza-header.jpg"

export const Cover = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: "cover",
        marginTop: "62px"
      }}
      className="header-cover text-center">
      <Container fluid className="bg-header-cover p-4 d-flex flex-column justify-content-center container-header">
        <h1 className="text-white">¡La mejor Pizzería!</h1>
        <p className="text-white">Tenemos las mejores pizzas que podrá encontrar!</p>
      </Container>
    </div>
  );
};