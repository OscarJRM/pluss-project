// app/page.tsx

import HeroSection from '@/components/HeroSection';
import React from 'react';

export default function HomePage() {
  return (
    <div>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <main className="flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold text-pink-400 mb-4">
          Bienvenidos a Tu Tienda de Fiestas y Decoración
        </h1>
        <p className="text-lg text-center max-w-2xl">
          Encuentra todo lo que necesitas para hacer de tu celebración un momento inolvidable. Desde globos y piñatas hasta decoración para bodas y quinceañeras. ¡Explora nuestras categorías y ponte en contacto con nosotros para realizar tus pedidos!
        </p>
      </main>
      
    </div>
    <HeroSection />
    </div>
  );
}
