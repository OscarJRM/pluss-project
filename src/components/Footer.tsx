import React from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
      <footer className="bg-[#F39200] text-white py-12 relative overflow-hidden">
        {/* Estrellas decorativas */}
        <div className="absolute inset-0">
          <Star className="absolute top-8 right-1/4 w-4 h-4 text-yellow-200 animate-pulse" />
          <Star className="absolute top-20 left-1/3 w-6 h-6 text-yellow-200 animate-bounce" />
          <Star className="absolute bottom-12 right-1/3 w-5 h-5 text-yellow-200 animate-pulse" />
          
          <Star className="absolute bottom-1/4 right-/4 w-5 h-5 text-yellow-200 animate-bounce" />
        </div>

        {/* Globos animados */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-16 h-16 bg-pink-300 rounded-full opacity-75 animate-bounce"></div>
          <div className="absolute top-8 right-8 w-24 h-24 bg-yellow-300 rounded-full opacity-75 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 bg-blue-300 rounded-full opacity-75 animate-bounce"></div>
          
          <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-green-300 rounded-full opacity-75 animate-bounce"></div>
          
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {/* Información sobre la tienda */}
          <div className="text-center max-w-sm transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-4 hover:text-yellow-200 transition-colors duration-300">Sobre Pluss</h3>
            <p className="text-sm mb-4 hover:text-white/90 transition-colors duration-300">
              Aquí encuentras todo para tu fiesta: artículos de decoración, animación, bocaditos y mucho más para hacer tus eventos especiales.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center justify-center space-x-2 hover:text-yellow-200 transition-colors duration-300">
                <span>📍</span>
                <span>Vía a Guaranda Km 5 a 200m de la Iglesia de Santa Rosa, Ambato</span>
              </li>
              <li className="flex items-center justify-center space-x-2 hover:text-yellow-200 transition-colors duration-300">
                <span>📞</span>
                <span>+593 95 990 6175</span>
              </li>
              <li className="flex items-center justify-center space-x-2 hover:text-yellow-200 transition-colors duration-300">
                <span>✉️</span>
                <span>contacto@tu-tienda.com</span>
              </li>
            </ul>
          </div>

          {/* Ofrecemos */}
          <div className="text-center max-w-sm transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-4 hover:text-yellow-200 transition-colors duration-300">Ofrecemos</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Artículos de Fiesta y Decoración",
                "Animación de Fiestas Infantiles",
                "Bocaditos",
                "Juguetería y Piñatería"
              ].map((item, index) => (
                <span 
                  key={index}
                  className="bg-white text-[#F39200] px-3 py-1.5 rounded-full hover:bg-yellow-200 hover:text-[#F39200] transform hover:scale-105 transition-all duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Redes sociales con íconos en dos columnas */}
          <div className="text-center max-w-sm transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-4 hover:text-yellow-200 transition-colors duration-300">Síguenos en</h3>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { icon: "fa-whatsapp", text: "WhatsApp", url: "https://wa.me/593959906175" },
                { icon: "fa-facebook", text: "Facebook", url: "https://facebook.com/PlussFiestas" },
                { icon: "fa-instagram", text: "Instagram", url: "https://instagram.com/Pluss.fiestas" },
                { icon: "fa-tiktok", text: "TikTok", url: "https://tiktok.com/@Pluss.fiestas" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center p-2 hover:bg-white/20 rounded-lg transition-all duration-300 group"
                >
                  <i className={`fab ${social.icon} text-2xl mb-1 group-hover:scale-110 transition-transform duration-300`}></i>
                  <span className="text-sm">{social.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea divisoria y derechos reservados */}
        <div className="border-t border-white/30 mt-8 pt-6 text-center">
          <p className="text-sm text-white/75 hover:text-white transition-colors duration-300">
            © 2024 Pluss. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;