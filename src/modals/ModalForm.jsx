import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/modal.css';

const ModalForm = ({ show, onHide, onSave, formData, setFormData, editingIndex }) => {
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const method = editingIndex !== null ? 'PUT' : 'POST';
    const url = editingIndex !== null
      ? `http://localhost:3000/posts/${editingIndex}`
      : 'http://localhost:3000/posts';
      
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then((data) => {
        onSave(data);
        onHide();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onHide}>&times;</span>
        <h2>{editingIndex !== null ? 'Edit Video' : 'Add New Video'}</h2>
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

ModalForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  editingIndex: PropTypes.number
};

export default ModalForm;
