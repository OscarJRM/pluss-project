import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/api/placeholder/1920/600')",
        }}
      />

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="bg-white/90 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <div className="relative aspect-video">
              <div className="absolute -top-6 -left-6">
                <div className="animate-bounce">
                  <div className="w-12 h-12 rounded-full bg-[#F39200]" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6">
                <div className="animate-bounce delay-300">
                  <div className="w-12 h-12 rounded-full bg-pink-400" />
                </div>
              </div>
              <h1 className="text-7xl font-bold text-center py-12 bg-gradient-to-r from-[#F39200] to-pink-500 bg-clip-text text-transparent">
                PLUSS
              </h1>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              TENEMOS TODO LO QUE IMAGINAS PARA TUS FIESTAS
            </h2>
            
            <p className="text-lg md:text-xl">
              En <span className="text-[#F39200] font-bold">PLUSS</span> te ofrecemos magníficos e irresistibles artículos de alta calidad y personalizados para hacer de tu evento algo especial. Tenemos todo lo que necesitas para decoración, animación, bocaditos y mucho más. Haremos de tu boda, cumpleaños, baby shower, despedida o cualquier otro evento una experiencia inolvidable.
            </p>

            <div className="flex gap-4">
              <Link 
                href="/tienda"
                className="inline-block px-8 py-4 bg-[#F39200] text-white font-bold rounded-full hover:bg-[#F39200]/90 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                VER PRODUCTOS
              </Link>
              <Link 
                href="/contacto"
                className="inline-block px-8 py-4 bg-white text-[#F39200] font-bold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                CONTÁCTANOS
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 animate-spin-slow">
          <div className="w-16 h-16 rounded-full border-4 border-[#F39200] opacity-50" />
        </div>
        <div className="absolute bottom-10 left-20 animate-bounce">
          <div className="w-8 h-8 rounded-full bg-pink-400 opacity-50" />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-pulse">
          <div className="w-12 h-12 rounded-full bg-[#F39200] opacity-30" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;