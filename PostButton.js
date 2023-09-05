import React from 'react';

function PostButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Post</button>
    </div>
  );
}

export default PostButton;
