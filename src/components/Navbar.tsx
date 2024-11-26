"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Facebook, Instagram, Music2, ShoppingCart } from 'lucide-react';
import CartSidebar from './CardSidebar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

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
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="flex justify-between items-center">
            {/* Dirección con enlace a Google Maps */}
            <div className="flex items-center space-x-2 group">
              <MapPin className="w-4 h-4 group-hover:animate-bounce" />
              <a
                href="https://maps.app.goo.gl/ZP15RCkkTqzUc2Ca9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hidden md:inline transform transition-transform duration-300 group-hover:translate-x-1 hover:underline"
              >
                Vía a Guaranda Km 5, a 200 metros de la Iglesia de Santa Rosa, Ambato
              </a>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 group">
                <Phone className="w-4 h-4 transform transition-transform group-hover:rotate-12" />
                <span className="text-sm transform transition-transform duration-300 group-hover:scale-105">
                  +593 95 990 6175
                </span>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/PlussFiestas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-110 hover:text-blue-400"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com/Pluss.fiestas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-110 hover:text-pink-400"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://tiktok.com/@Pluss.fiestas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-110 hover:text-gray-200"
                >
                  <Music2 className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar principal */}
      <nav className={`bg-white shadow-md transition-all duration-300 relative ${isScrolled ? 'pt-4 pb-2' : 'pt-6 pb-4'}`}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/plussLogo1.jpg"
              alt="Logo de Pluss"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Enlaces de navegación */}
          <div className="flex justify-center space-x-8 text-[#F39200] font-semibold ">
            {['Inicio', 'Nosotros', 'Tienda', 'Nuestros Servicios', 'Contáctenos'].map((item) => (
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

          {/* Icono de carrito de compras */}
          <button onClick={toggleCart} className="relative">
            <ShoppingCart className="text-[#F39200]" size={24} />
          </button>
        </div>
      </nav>

      {/* Sidebar del carrito */}
      <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
    </div>
  );
};

export default Navbar;
