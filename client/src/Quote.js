import AddComment from './AddComment';
import Comments from './Comments';

function Quote(props) {
  const { id, getQuote, likes, like, liked, addComment } = props;
  const quote = getQuote(id);

  // Conditional rendering
  if (quote === undefined) {
    return <p>Nothing here {id}</p>;
  } else
    return (
      <>
        <div></div>
        <h5>User: {quote.user}</h5>
        <h3>"{quote.quote}"</h3>
        <h6 className='source'>
          Source: {quote.source === '' ? 'Unknown.' : quote.source}
        </h6>

        <div>
          <h5>Likes: {likes}</h5>
          <button onClick={like}>{liked === false ? 'Like' : 'Dislike'}</button>
        </div>

        <Comments commentsToShow={quote.comments}></Comments>
        <AddComment addComment={addComment}></AddComment>
      </>
    );
}

export default Quote;
