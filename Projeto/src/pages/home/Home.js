import React from 'react';

// Importação das imagens
import foto1 from '../../assets/foto1.jpg';
import foto2 from '../../assets/foto2.jpg';
import foto3 from '../../assets/foto3.jpg';
import foto4 from '../../assets/foto4.jpg';
import foto5 from '../../assets/foto5.jpg';
import foto6 from '../../assets/foto6.jpg';
import foto7 from '../../assets/foto7.jpg';
import foto8 from '../../assets/foto8.jpg';

import '../home/Home.css'; // Certifique-se de que o caminho esteja correto

// Importando o componente Carousel
import Carousel from '../../components/carousel/Carousel';  // Ajuste o caminho conforme necessário

const Home = () => {
  const carouselImages = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8];

  return (
    <div>
      {/* Carrossel de Fotos */}
      <Carousel images={carouselImages} />

      <main>
        <section className="photo-text-sections">
          <div className="section-item">
            <img src={foto1} alt="Foto 1" className="section-image" />
            <div className="section-content">
              <img src="img/bandeirinha.png" alt="Cordão de Luz" className="section-decoration1" />
              <h2>Bem-Vindo a Festa do Pijama Petrópolis</h2>
              <p>Realizar uma festa do pijama é trazer magia à vida real! Além de super divertida, é uma oportunidade única para criar laços, fortalecer amizades e proporcionar momentos de alegria que ficarão na memória para sempre. Essa experiência estimula a criatividade das crianças e será lembrada com carinho por todos!</p>
            </div>
          </div>

          <div className="section-item">
            <img src={foto2} alt="Foto 2" className="section-image" />
            <div className="section-content">
              <img src="img/cordao_luz.png" alt="Cordão de Luz" className="section-decoration" />
              <h2>Tenda Lounge</h2>
              <p>Nossa tenda Lounge oferece um kit completo para proporcionar conforto e estilo, incluindo colchão, lençol, travesseiros, fronhas, mantas, e uma decoração encantadora com bandeirinhas, cordão de luzes de LED e um globo de luz para criar um ambiente especial. Também oferecemos a opção adicional de mesinhas para servir lanches ou café da manhã.</p>
              <a href="pages/TendaLouge/tendaLouge.html" className="ver-mais">Ver mais</a>
            </div>
          </div>

          <div className="section-item">
            <img src={foto3} alt="Foto 3" className="section-image" />
            <div className="section-content">
              <img src="img/bandeirinha.png" alt="Cordão de Luz" className="section-decoration2" />
              <h2>Cabanas Duplas</h2>
              <p>Nossas cabanas duplas medem 1,40 x 1,60 m e já incluem colchonetes de 0,60 x 1,60 m com 4 cm de altura, proporcionando conforto para até 2 crianças em cada cabana. Elas vêm com um kit completo que inclui colchão, lençol, travesseiros, fronhas, mantas, decoração no topo da cabana e um cordão de luz. O grande destaque é o globo de luz que levamos para a baladinha, que é a sensação entre a garotada!</p>
              <a href="pages/CabanasDuplas/cabanasDuplas.html" className="ver-mais">Ver mais</a>
            </div>
          </div>

          <div className="section-item">
            <img src="img/tenda_bangalo.jpg" alt="Foto 3" className="section-image" />
            <div className="section-content">
              <img src="img/cordao_luz.png" alt="Cordão de Luz" className="section-decoration3" />
              <h2>Tenda Bangalô</h2>
              <p>Nossa tenda Bangalô, com dimensões de 3x3 metros, oferece um kit completo para garantir o máximo de conforto e estilo. O kit inclui colchão, lençol, travesseiros, fronhas, mantas, além de uma decoração charmosa com bandeirinhas na tenda, cordão de luzes de LED e um globo de luz para criar um ambiente mágico e acolhedor.</p>
              <a href="pages/Bangalo/bangalo.html" className="ver-mais">Ver mais</a>
            </div>
          </div>

          <div className="section-item">
            <img src={foto4} alt="Foto 4" className="section-image" />
            <div className="section-content">
              <img src="img/bandeirinha.png" alt="Cordão de Luz" className="section-decoration4" />
              <h2>Pijamas e Personalizados</h2>
              <p>Além da nossa incrível festa do pijama com cabanas, também oferecemos uma linha de produtos personalizados para tornar o evento ainda mais inesquecível! Disponibilizamos kits exclusivos que incluem pijamas, malas, chinelos, bonés, almofadas de pipoca, kits de higiene, tapa-olhos, bolsas, sacolas, almofadas personalizadas 30x30, nécessaires ou estojos com escova e creme dental, maiôs e toalhas de banho. Todos os itens são cuidadosamente personalizados para trazer ainda mais charme e exclusividade à sua festa!</p>
              <a href="pages/pag4.html" className="ver-mais">Ver mais</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
