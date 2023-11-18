import {Button, ButtonGroup} from "react-bootstrap";

export const MoreThanOneButton = ({addPizza, currentPizza, subPizza, removePizza}) => {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button
        onClick={addPizza}
        variant="success"
      >+1</Button>
      <div className="btn btn-outline-secondary d-flex align-items-center disabled text-dark">
        {currentPizza?.quantity}
      </div>
      {
        currentPizza?.quantity > 1
          ? <Button
            onClick={subPizza}
            variant="danger"
          >-1</Button>
          : <Button
            onClick={removePizza}
            variant="danger"
          ><i className="bi bi-trash3"></i></Button>
      }

    </ButtonGroup>
  );
};