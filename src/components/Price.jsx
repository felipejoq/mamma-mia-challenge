import {clpFormat} from "../helpers/currencyFormatters.js";
import {Badge} from "react-bootstrap";

export const Price = ({price, size}) => {

  if (size === "lg") {
    return (
      <div className="fs-4 border border-success p-2 text-success rounded text-center">
        {clpFormat(price)} <small className="fw-light">c/u</small>
      </div>
    )
  }

  return (
    <Badge bg="success">
      {clpFormat(price)} <small className="fw-light">c/u</small>
    </Badge>
  );
};