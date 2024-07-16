import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/modal.css';

const NewVideo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    imageUrl: '',
    videoUrl: '',
    description: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Video</h2>
        <form onSubmit={handleFormSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleFormChange}
            />
          </label>
          <label>
            Category:
            <select
              name="category"
              value={formData.category}
              onChange={handleFormChange}
            >
              <option value="">Select</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="innovation">Innovation</option>
              <option value="management">Management</option>
            </select>
          </label>
          <label>
            Image URL:
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleFormChange}
            />
          </label>
          <label>
            Video URL:
            <input
              type="text"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleFormChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleFormChange}
            />
          </label>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default NewVideo;
