import React from 'react';

function PostTypeSelector({ postType, onPostTypeChange }) {
  return (
    <div>
      <label>Post Type:</label>
      <select value={postType} onChange={(e) => onPostTypeChange(e.target.value)}>
        <option value="question">Question</option>
        <option value="article">Article</option>
      </select>
    </div>
  );
}

export default PostTypeSelector;
