import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; // Cambiado a useNavigate
import '../Styles/header.css';

const Header = ({ onNewVideoClick }) => {
  const navigate = useNavigate(); // Cambiado a useNavigate

  return (
    <header>
      <h1>Aluraflix</h1>
      <div className="container__buttons">
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/nuevo-video')}>Nuevo video</button>
      </div>
    </header>
  );
};

Header.propTypes = {
  onNewVideoClick: PropTypes.func.isRequired,
};

export default Header;
