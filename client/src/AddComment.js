import { useState } from 'react';

function AddComment(props) {
  const { addComment } = props;

  const [comment, setComment] = useState('');

  // Conditional rendering
  return (
    <div>
      <h4>Add Comment</h4>

      <div>
        <textarea
          name='quote'
          id='quote'
          onChange={(event) => setComment(event.target.value)}
          type='text'
        />
      </div>

      <button
        type='submit'
        onClick={(event) => {
          addComment(comment);
        }}
      >
        Add Comment
      </button>
    </div>
  );
}

export default AddComment;
