import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export const PrevButton = () => {

  const navigate = useNavigate();

  const toPrev = () => {
    navigate(-1)
  }

  return (
    <Button
      className="w-75 my-4"
      variant="outline-secondary"
      onClick={toPrev}
    >
      <i className="bi bi-arrow-left-square-fill"></i> Volver Atrás
    </Button>
  );
};