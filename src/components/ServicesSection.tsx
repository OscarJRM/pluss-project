import React from 'react';
import { Cake, Cookie, Gift } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Gift className="w-12 h-12" />,
      title: "Artículos de Fiesta y Decoración",
      description: "Todo lo que necesitas para decorar y ambientar tu fiesta con los mejores artículos y accesorios."
    },
    {
      icon: <Cake className="w-12 h-12" />,
      title: "Animación de Fiestas Infantiles",
      description: "Hacemos de tu evento algo especial con animación profesional para el entretenimiento de los más pequeños."
    },
    {
      icon: <Cookie className="w-12 h-12" />,
      title: "Bocaditos",
      description: "Deliciosos bocaditos y snacks para complementar tu celebración con las mejores opciones gastronómicas."
    },
    {
      icon: <Gift className="w-12 h-12" />,
      title: "Juguetería y Piñatería",
      description: "Gran variedad de juguetes y piñatas para hacer tu fiesta más divertida y memorable."
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-pink-500">
          Ofrecemos para tus Fiestas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full flex items-center justify-center bg-pink-100 mb-6 group-hover:bg-pink-200 transition-colors duration-300">
                <div className="text-pink-500 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              
              <p className="text-gray-600 max-w-xs">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;