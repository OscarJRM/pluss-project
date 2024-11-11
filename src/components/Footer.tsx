// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      <div className="container mx-auto px-6">
        {/* Sección de enlaces principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Enlaces</h3>
            <ul>
              <li>
                <Link href="/" legacyBehavior>
                  <a className="hover:text-pink-400">Inicio</a>
                </Link>
              </li>
              <li>
                <Link href="/mision-vision" legacyBehavior>
                  <a className="hover:text-pink-400">Misión y Visión</a>
                </Link>
              </li>
              <li>
                <Link href="/tienda" legacyBehavior>
                  <a className="hover:text-pink-400">Tienda</a>
                </Link>
              </li>
              <li>
                <Link href="/contacto" legacyBehavior>
                  <a className="hover:text-pink-400">Contacto</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Contacto</h3>
            <ul>
              <li>
                WhatsApp: <a href="https://wa.me/593959906175" className="hover:text-green-500" target="_blank" rel="noopener noreferrer">+593 95 990 6175</a>
              </li>
              <li>Email: contacto@tu-tienda.com</li>
            </ul>
          </div>

          {/* Sección de redes sociales (opcional) */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Síguenos</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Facebook</a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sección de copyright */}
        <div className="text-center mt-8 text-sm text-gray-600">
          © 2024 Tu Tienda de Fiestas. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
