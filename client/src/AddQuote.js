import { useState } from 'react';

function AddQuote(props) {
  const { addQuote } = props;

  const [quote, setQuote] = useState('');
  const [source, setSource] = useState('');
  const [user, setUser] = useState('');

  // Conditional rendering
  return (
    <div className='add-quotes'>
      <h3>Add Quote</h3>

      <div>
        <label htmlFor='quote'>Quote</label>
        <textarea
          name='quote'
          id='quote'
          onChange={(event) => setQuote(event.target.value)}
          type='text'
        />
      </div>

      <div>
        <label htmlFor='source'>Source</label>
        <input
          name='source'
          id='source'
          onChange={(event) => setSource(event.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor='user'>User</label>
        <input
          name='user'
          id='user'
          onChange={(event) => setUser(event.target.value)}
          type='text'
        />
      </div>

      <button
        type='submit'
        onClick={(event) => {
          addQuote(quote, source, user);
        }}
      >
        Add Quote
      </button>
    </div>
  );
}

export default AddQuote;
