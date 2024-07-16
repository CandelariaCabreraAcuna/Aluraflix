import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import ModalForm from '../modals/ModalForm';
import '../Styles/home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    imageUrl: '',
    videoUrl: '',
    description: ''
  });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setPosts(posts.filter(post => post.id !== id));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleEdit = (post) => {
    setFormData(post);
    setEditingIndex(post.id);
    setShowModal(true);
  };

  const handleSave = (updatedPost) => {
    if (editingIndex !== null) {
      setPosts(posts.map(post => (post.id === editingIndex ? updatedPost : post)));
    } else {
      setPosts([...posts, updatedPost]);
    }
    setEditingIndex(null);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEditingIndex(null);
    setFormData({
      title: '',
      category: '',
      imageUrl: '',
      videoUrl: '',
      description: ''
    });
  };

  const categorizedPosts = (category) => posts.filter(post => post.category === category);

  return (
    <div>
      <Header />
      <main className="main-container">
        <h2>Welcome to Aluraflix</h2>
        <ModalForm
          show={showModal}
          onHide={handleModalClose}
          onSave={handleSave}
          formData={formData}
          setFormData={setFormData}
          editingIndex={editingIndex}
        />

        {['frontend', 'backend', 'innovation', 'management'].map(category => (
          <div key={category} className="section-container">
            <h3 style={{ color: 'royalblue' }}>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className="card-container">
              {categorizedPosts(category).map(post => (
                <Card
                  key={post.id}
                  id={post.id}
                  imageUrl={post.imageUrl}
                  onDelete={handleDelete}
                  onEdit={() => handleEdit(post)}
                />
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
