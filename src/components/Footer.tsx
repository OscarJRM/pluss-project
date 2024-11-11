// src/components/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F39200] text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Decoración de globos */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-pink-300 rounded-full opacity-75 transform -translate-x-10 -translate-y-10"></div>
        <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-300 rounded-full opacity-75"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-blue-300 rounded-full opacity-75"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información sobre la tienda */}
          <div>
            <h3 className="text-lg font-bold mb-2">Sobre Pluss</h3>
            <p className="text-sm mb-4">
              Aquí encuentras todo para tu fiesta: artículos de decoración, animación, bocaditos y mucho más para hacer tus eventos especiales.
            </p>
            <ul className="space-y-1">
              <li>📍 Dirección: Vía a Guaranda Km 5 a 200 metros de la Iglesia de Santa Rosa, Ambato</li>
              <li>📞 WhatsApp: +593 95 990 6175</li>
              <li>✉️ Email: contacto@tu-tienda.com</li>
            </ul>
          </div>

          {/* Ofrecemos */}
          <div>
            <h3 className="text-lg font-bold mb-2">Ofrecemos</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white text-[#F39200] px-2 py-1 rounded text-sm">Artículos de Fiesta y Decoración</span>
              <span className="bg-white text-[#F39200] px-2 py-1 rounded text-sm">Animación de Fiestas Infantiles</span>
              <span className="bg-white text-[#F39200] px-2 py-1 rounded text-sm">Bocaditos</span>
              <span className="bg-white text-[#F39200] px-2 py-1 rounded text-sm">Juguetería y Piñatería</span>
            </div>
          </div>

          {/* Redes sociales con íconos */}
          <div>
            <h3 className="text-lg font-bold mb-2">Síguenos en</h3>
            <div className="flex flex-col space-y-4 mt-2">
              <a href="https://wa.me/593959906175" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 flex items-center space-x-2">
                <i className="fab fa-whatsapp text-2xl"></i>
                <span>0959906175</span>
              </a>
              <a href="https://facebook.com/PlussFiestas" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 flex items-center space-x-2">
                <i className="fab fa-facebook text-2xl"></i>
                <span>Pluss Fiestas</span>
              </a>
              <a href="https://instagram.com/Pluss.fiestas" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 flex items-center space-x-2">
                <i className="fab fa-instagram text-2xl"></i>
                <span>Pluss.fiestas</span>
              </a>
              <a href="https://tiktok.com/@Pluss.fiestas" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 flex items-center space-x-2">
                <i className="fab fa-tiktok text-2xl"></i>
                <span>Pluss.fiestas</span>
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria y derechos reservados */}
        <div className="border-t border-white mt-8 pt-4 text-center text-sm text-white opacity-75">
          © 2024 Pluss. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
