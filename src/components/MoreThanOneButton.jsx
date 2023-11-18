import {Button, ButtonGroup} from "react-bootstrap";

export const MoreThanOneButton = ({addPizza, currentPizza, subPizza, removePizza}) => {
  return (
    <ButtonGroup className="width-fixed-140">
      {
        currentPizza?.quantity > 1
          ? <Button
            onClick={subPizza}
            variant="danger"
            className="d-flex justify-content-center align-items-center width-fixed-20"
          >-1</Button>
          : <Button
            onClick={removePizza}
            variant="danger"
            className="d-flex justify-content-center align-items-center width-fixed-20"
          ><i className="bi bi-trash3"></i></Button>
      }
      <div
        className="btn btn-outline-secondary d-flex justify-content-center align-items-center disabled text-dark width-fixed-40">
        {currentPizza?.quantity}
      </div>
      <Button
        onClick={addPizza}
        variant="success"
        className="d-flex justify-content-center align-items-center width-fixed-20"
      >
        +1
      </Button>
    </ButtonGroup>
  );
};