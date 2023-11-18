export const IngredientsList = ({ingredients}) => {
  return (
    <>
      <h3 className="fs-5">Ingredientes:</h3>
      {
        ingredients.map(ingredient => (
          <div className="ps-4 text-capitalize" key={ingredient}>
            🍕 {ingredient}
          </div>
        ))
      }
    </>
  );
};