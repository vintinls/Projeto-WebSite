import React, { useState, useEffect } from 'react';
import './Carousel.css';

import foto1 from '../../assets/foto1.jpg';
import foto2 from '../../assets/foto2.jpg';
import foto3 from '../../assets/foto3.jpg';
import foto4 from '../../assets/foto4.jpg';
import foto5 from '../../assets/foto5.jpg';
import foto6 from '../../assets/foto6.jpg';
import foto7 from '../../assets/foto7.jpg';
import foto8 from '../../assets/foto8.jpg';

const images = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = images.length;

  // Avança para o próximo conjunto de imagens
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % totalImages);
  };

  // Volta para o conjunto anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + totalImages) % totalImages);
  };

  // Muda automaticamente a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  // Garante que sempre haja 3 imagens visíveis
  const visibleImages = [
    images[currentIndex],
    images[(currentIndex + 1) % totalImages],
    images[(currentIndex + 2) % totalImages],
  ];

  return (
    <div className="carousel">
      <div className="carousel-images">
        {visibleImages.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${currentIndex + index + 1}`} className="carousel-image" />
        ))}
      </div>
      <div className="carousel-buttons">
        <button className="button" onClick={prevSlide}>❮</button>
        <button className="button" onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default Carousel;
