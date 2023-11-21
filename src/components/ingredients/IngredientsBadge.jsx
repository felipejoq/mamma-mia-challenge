import {Badge} from "react-bootstrap";

export const IngredientsBadge = ({ingredients = []}) => {
  return (
    <div className="item-ingredients d-flex gap-2 flex-wrap">
      <Badge bg="secondary">Ingredientes</Badge>
      {
        ingredients.map(ingredient => (
          <Badge key={ingredient} bg="success">{ingredient}</Badge>
        ))
      }
    </div>
  );
};