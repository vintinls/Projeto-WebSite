import React from 'react';
import '../footer/Footer.css'; 

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 DEVHIGH e Festa do Pijama Petrópolis. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
