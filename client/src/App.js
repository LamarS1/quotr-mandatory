import { Router, Link } from '@reach/router';
import { useEffect, useState } from 'react';
import Quotes from './Quotes';
import Quote from './Quote';
import './style.css';

const API_URL = process.env.REACT_APP_API;

function App() {
  const [quotes, setQuotes] = useState([]);
  let [likes, setLikes] = useState(0);
  let [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${API_URL}/quotes`;
      const response = await fetch(url);
      const data = await response.json();
      setQuotes(data);
      data.forEach((element) => {
        console.log(element.quote + ' ' + element.id);
      });
    };
    fetchData();
  }, []);

  function getQuote(id) {
    const quote = quotes.find((quote) => quote.id === parseInt(id));
    return quote;
  }

  function addQuote(quote, source, user) {
    const data = {
      quote: quote,
      source: source,
      user: user,
      likes: 0,
      id: quotes.length + 1,
    };

    const postData = async () => {
      const url = `${API_URL}/quotes`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const reply = await response.json();
      console.log(reply);
    };
    postData();
    window.location.reload(false);
  }

  function addComment(comment, quoteId) {
    const newComment = async () => {
      const url = `${API_URL}/quote/${quoteId}`;
      console.log(url);

      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
      });
      const reply = await response.json();
      console.log(reply);
    };
    newComment();
    window.location.reload(false);
  }

  function likePost() {
    setLiked(true);

    setLikes(likes + 1);
  }
  function dislikePost() {
    setLiked(false);
    setLikes(likes - 1);
  }

  return (
    <>
      <header className='header'>
        <h1 className='site-title'>
          <Link to='/'>Quotr</Link>
        </h1>
      </header>

      <br></br>
      <br></br>
      <br></br>

      <Router>
        <Quotes path='/' quotesToShow={quotes} addQuote={addQuote} />
        <Quote
          path='/quote/:id'
          getQuote={getQuote}
          liked={liked}
          likes={likes}
          like={liked === false ? likePost : dislikePost}
          addComment={addComment}
        />
      </Router>
    </>
  );
}

export default App;
