import React from 'react';
import logo from '../../assets/logo.png';
import instagramIcon from '../../assets/instagram.png';
import whatsappIcon from '../../assets/whatsapp.png';
import '../header/Header.css';


function Header() {
  return (
    <header>
      <img src={logo} alt="Logo da Empresa" className="logo" />
      <h1>Festa Do Pijama Petrópolis</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/avaliacoes">Avaliações</a></li>
        </ul>
      </nav>
      <div className="social-icons">
        <a href="https://www.instagram.com/festadopijamapetropolis/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
        </a>
      </div>
    </header>
  );
}

export default Header;
