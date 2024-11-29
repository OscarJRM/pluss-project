"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HeroCarousel2 = () => {
  const slides = [
    {
      image: '/images/bigImg1.jpg', // Cambia a tus imágenes
      heading: 'Bienvenidos a Tu Tienda de Fiestas y Decoración',
      text: 'Encuentra todo lo que necesitas para hacer de tu celebración un momento inolvidable. Desde globos y piñatas hasta decoración para bodas y quinceañeras. ¡Explora nuestras categorías y ponte en contacto con nosotros para realizar tus pedidos!',
    },
    {
      image: '/images/bigImg2.jpg',
      heading: 'Todo para tus fiestas y eventos',
      text: 'Tenemos la mejor variedad de artículos para fiestas, desde decoraciones hasta bocaditos. ¡Haz de tu evento algo inolvidable!',
    },
    {
      image: '/images/slide3.jpg',
      heading: 'Explora nuestra Tienda Online',
      text: 'Descubre productos de alta calidad y personalizados para cualquier ocasión. Encuentra justo lo que necesitas para tu fiesta perfecta.',
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="relative min-h-[700px] pt-32 ">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        showDots
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-[700px] bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>

            {/* Text Content */}
            <div className="relative z-10 text-white px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                {slide.heading}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
                {slide.text}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroCarousel2;
