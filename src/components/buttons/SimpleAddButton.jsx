import {Button} from "react-bootstrap";

export const SimpleAddButton = ({addPizza, currentPizza}) => {
  return (
    <Button
      onClick={addPizza}
      variant="success"
      size="lg"
      className=""
    >
      <i
        className="bi bi-basket"></i> Añadir {currentPizza && currentPizza?.quantity > 0 ? `(${currentPizza?.quantity})` : ""}
    </Button>
  );
};