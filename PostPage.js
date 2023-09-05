import React, { useState } from 'react';
import './PostPage.css'; // Replace with the correct path to your CSS file

function PostPage() {
  const [postType, setPostType] = useState('question');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [abstract, setAbstract] = useState('');

  const handlePost = () => {
    // Handle post logic (e.g., send data to the server)
    console.log('Post Type:', postType);
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Abstract:', abstract);
    console.log('Tags:', tags);
  };

  return (
    <div className="post-page">
      <div className="title">New Post</div>
      <div className="post-type">
        <span>Select post type:</span>
        <button
          className={`post-type-btn ${postType === 'question' ? 'selected' : ''}`}
          onClick={() => setPostType('question')}
        >
          Question
        </button>
        <button
          className={`post-type-btn ${postType === 'article' ? 'selected' : ''}`}
          onClick={() => setPostType('article')}
        >
          Article
        </button>
      </div>
      <div className="section-heading">What do you want to ask or share</div>
      <div className="post-type-description">
        <p className="black-text">
          This section is designed based on the type of the post. It could be developed by conditional rendering.
        </p>
        {postType === 'article' && (
          <p className="red-text">
            For posting an article, the following section would appear.
          </p>
        )}
      </div>
      <div className="input-field">
        <div className="input-heading">Title</div>
        <input
          type="text"
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {postType === 'article' && (
        <div className="input-field">
          <div className="input-heading">Abstract</div>
          <textarea
            rows="6"
            placeholder="Enter abstract..."
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
          ></textarea>
        </div>
      )}
      <div className="input-field">
        <div className="input-heading">
          {postType === 'article' ? 'Article Text' : 'Description'}
        </div>
        <textarea
          rows="6"
          placeholder={`Enter ${postType === 'article' ? 'article text' : 'description'}...`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="input-field">
        <div className="input-heading">Tags</div>
        <input
          type="text"
          placeholder="Add tags (comma-separated)..."
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <button className="post-button" onClick={handlePost}>
        Post
      </button>
    </div>
  );
}

export default PostPage;
