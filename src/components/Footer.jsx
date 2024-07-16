import React from 'react';
import '../Styles/footer.css';
import Iconhome from '../assets/icons/icon_home.svg';
import IconPlus from '../assets/icons/icon_plus_ver_mobile.svg';
import Logoalura from '../assets/images/logo_aluraflix.svg';
import { useNavigate } from 'react-router-dom'; // Cambiado a useNavigate
import PropTypes from 'prop-types';

const Footer = () => {
  const navigate = useNavigate(); // Cambiado a useNavigate

  return (
    <footer>
      <div className="desktop-ver">
      <img className="logo-alura" src={Logoalura} alt='Aluraflix' />
      </div>
      <div className="mobile-ver">
      <button className='btn-footer'>
        <img src={Iconhome} alt='Home' />
        <span>Home</span>
      </button>
      <button className='btn-more' onClick={() => navigate('/nuevo-video')}>
        <img src={IconPlus} alt='Add video' />
      </button>
      </div>
    </footer>
  );
};

Footer.protoTypes = { 
  onNewVideoClick: PropTypes.func.isRequired,

};

export default Footer;