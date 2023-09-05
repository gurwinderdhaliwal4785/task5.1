import React from 'react';

function PostForm({ postType, onPostContentChange }) {
  return (
    <div>
      <h2>{postType === 'question' ? 'Ask a Question' : 'Write an Article'}</h2>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your post content here..."
        onChange={(e) => onPostContentChange(e.target.value)}
      />
    </div>
  );
}

export default PostForm;
