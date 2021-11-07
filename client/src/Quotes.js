import { Link } from '@reach/router';
import AddQuote from './AddQuote';

function Quotes(props) {
  const { quotesToShow, addQuote } = props;
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

  return (
    <div>
      <h3>All Quotes</h3>

      <ul className='quotes-list'>
        {quotesToShow.map((quote) => (
          <li key={quote.id}>
            <div className='quoteListItem'>
              <Link to={`/quote/${quote.id}`}>" {quote.quote} "</Link>
            </div>
          </li>
        ))}
      </ul>
      <AddQuote addQuote={addQuote}></AddQuote>
      {/* Do not show the AddRecipe component if we're on a filtered view */}
    </div>
  );
}

export default Quotes;
