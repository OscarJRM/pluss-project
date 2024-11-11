"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Facebook, Instagram, Music2 } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto de scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 transition-all duration-300">
      {/* Barra superior con información de contacto */}
      <div className={`bg-[#F39200] text-white transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Información de ubicación */}
            <div className="flex items-center space-x-2 group">
              <MapPin className="w-4 h-4 group-hover:animate-bounce" />
              <span className="text-sm hidden md:inline transform transition-transform duration-300 group-hover:translate-x-1">
                Vía a Guaranda Km 5, a 200 metros de la Iglesia de Santa Rosa, Ambato
              </span>
            </div>

            {/* Contacto y redes sociales */}
            <div className="flex items-center space-x-6">
              {/* Teléfono con animación */}
              <div className="flex items-center space-x-2 group">
                <Phone className="w-4 h-4 transform transition-transform group-hover:rotate-12" />
                <span className="text-sm transform transition-transform duration-300 group-hover:scale-105">
                  +593 95 990 6175
                </span>
              </div>

              {/* Redes sociales */}
              <div className="flex space-x-4">
                <a href="https://facebook.com/PlussFiestas" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="transform transition-all duration-300 hover:scale-110 hover:text-blue-400">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com/Pluss.fiestas" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="transform transition-all duration-300 hover:scale-110 hover:text-pink-400">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://tiktok.com/@Pluss.fiestas" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="transform transition-all duration-300 hover:scale-110 hover:text-gray-200">
                  <Music2 className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar principal con logo y banderines */}
      <nav className={`bg-white shadow-md transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between relative">
          {/* Banderines decorativos */}
          <div className="absolute top-0 left-0 w-full h-8 bg-transparent flex justify-between overflow-hidden">
            <div className="bg-[#EF87B5] w-6 h-6 rotate-45 transform origin-bottom-left"></div>
            <div className="bg-[#FEEB00] w-6 h-6 rotate-45 transform origin-bottom-left"></div>
            <div className="bg-[#2F97B3] w-6 h-6 rotate-45 transform origin-bottom-left"></div>
            <div className="bg-[#EF87B5] w-6 h-6 rotate-45 transform origin-bottom-left"></div>
            <div className="bg-[#FEEB00] w-6 h-6 rotate-45 transform origin-bottom-left"></div>
            <div className="bg-[#2F97B3] w-6 h-6 rotate-45 transform origin-bottom-left"></div>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/plusslogo.jpg"
              alt="Logo de Pluss"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Enlaces de navegación */}
          <div className="flex justify-center space-x-8 text-[#F39200] font-semibold text-lg">
            {['Inicio', 'Nosotros', 'Tienda', 'Nuestros Servicios', 'Noticias', 'Contáctenos'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Inicio' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="relative font-semibold text-lg group"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#EF87B5]">
                  {item}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EF87B5] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
