function Comments(props) {
  const { commentsToShow } = props;
  // If we're in a route that filters by :ingredient, be sure to filter the shown recipes
  //   if (isFilteredByIngredient) {
  //     quotesToShow = props.recipes.filter((quote) =>
  //       quote.ingredients.includes(props.ingredient)
  //     );
  //   }

  //   const totalPreparationTime = quotesToShow.reduce(
  //     (accumulator, currentValue) => {
  //       accumulator += currentValue.cookingTime;
  //       return accumulator;
  //     },
  //     0
  //   );
  if (commentsToShow === undefined) {
    return (
      <div>
        <p>No Comments</p>
      </div>
    );
  } else
    return (
      <div>
        <h3>All Comments</h3>
        <ul>
          {commentsToShow.map((comment) => (
            <div key={comment.id}>
              <h4>- {comment.body}</h4>
            </div>
          ))}
        </ul>
      </div>
    );
}

export default Comments;
