import React, { useState, useEffect } from 'react';

const PostList = () => {
  const [frontendPosts, setFrontendPosts] = useState([]);
  const [backendPosts, setBackendPosts] = useState([]);
  const [innovationPosts, setInnovationPosts] = useState([]);
  const [managementPosts, setManagementPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setFrontendPosts(data.filter(post => post.category === 'frontend'));
        setBackendPosts(data.filter(post => post.category === 'backend'));
        setInnovationPosts(data.filter(post => post.category === 'innovation'));
        setManagementPosts(data.filter(post => post.category === 'management'));
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <div className="category">
        <h2>Frontend</h2>
        <ul>
          {frontendPosts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="category">
        <h2>Backend</h2>
        <ul>
          {backendPosts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="category">
        <h2>Innovación</h2>
        <ul>
          {innovationPosts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="category">
        <h2>Gestión</h2>
        <ul>
          {managementPosts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
