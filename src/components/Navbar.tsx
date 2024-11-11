"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Facebook, Instagram, Music2 } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 transition-all duration-300">
      {/* Barra superior */}
      <div className={`bg-[#F39200] text-white transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 group">
              <MapPin className="w-4 h-4 group-hover:animate-bounce" />
              <span className="text-sm hidden md:inline transform transition-transform duration-300 group-hover:translate-x-1">
                Vía a Guaranda Km 5, a 200 metros de la Iglesia de Santa Rosa, Ambato
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 group">
                <Phone className="w-4 h-4 transform transition-transform group-hover:rotate-12" />
                <span className="text-sm transform transition-transform duration-300 group-hover:scale-105">
                  +593 95 990 6175
                </span>
              </div>

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

      {/* Navbar principal con guirnalda decorativa */}
      <nav className={`bg-white shadow-md transition-all duration-300 relative ${isScrolled ? 'pt-6 pb-2' : 'pt-10 pb-4'}`}>
        {/* Guirnalda de banderines */}
        <div className="absolute top-0 left-0 w-full flex items-center justify-center overflow-hidden">
          <svg 
            className="w-full h-16" 
            viewBox="0 0 800 40"
            preserveAspectRatio="none"
          >
            {/* Línea decorativa */}
            <path 
              d="M0,10 Q100,20 200,10 T400,10 T600,10 T800,10"
              fill="none"
              stroke="#FFD700"
              strokeWidth="2"
            />
            
            {/* Banderines */}
            {[...Array(15)].map((_, i) => (
              <polygon
                key={i}
                points={`${i * 55 + 10},10 ${i * 55 + 35},35 ${i * 55 + 60},10`}
                fill={i % 3 === 0 ? '#EF87B5' : i % 3 === 1 ? '#2F97B3' : '#FEEB00'}
                className="transform origin-top transition-transform hover:scale-105"
              />
            ))}
          </svg>
        </div>

        <div className="container mx-auto px-6 flex items-center justify-between mt-4">
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
