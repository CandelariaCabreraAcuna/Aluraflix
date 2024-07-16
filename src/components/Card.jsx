import React from 'react';
import PropTypes from 'prop-types';
import Icontrash from '../assets/icons/icon_trash.svg';
import Iconpencil from '../assets/icons/icon_pencil.svg';

const Card = ({ id, imageUrl, onDelete, onEdit }) => {
  const handleDelete = () => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        onDelete(id);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div style={styles.card}>
      <img src={imageUrl} alt="Custom" style={styles.image} />
      <div style={styles.buttons}>
        <button onClick={handleDelete} style={styles.button}>
          <img src={Icontrash} alt="Delete" style={styles.icon} />
          Eliminar
        </button>
        <button onClick={onEdit} style={styles.button}>
          <img className='icon' src={Iconpencil} alt="Edit" style={styles.icon} />
          Editar
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    width: '373px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px',
    background: '#000',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    background: '#000',
    color: '#fff',
  },
  icon: {
    width: '16px',
    height: '16px',
  },
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Card;
