import React from 'react';
import { Target, Eye, Gift, Cake, Cookie } from 'lucide-react';
import Link from 'next/link';

const MissionVisionSection = () => {
  const categories = [
    { 
      icon: <Gift className="w-12 h-12" />,
      title: "Artículos de Fiesta",
      description: "Todo para decorar y ambientar tu fiesta.",
      color: "bg-pink-100 text-pink-500"
    },
    {
      icon: <Cake className="w-12 h-12" />,
      title: "Combos Temáticos",
      description: "Conjuntos completos para tus celebraciones.",
      color: "bg-orange-100 text-orange-500"
    },
    {
      icon: <Cookie className="w-12 h-12" />,
      title: "Bocaditos",
      description: "Deliciosos complementos para tu evento.",
      color: "bg-purple-100 text-purple-500"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      {/* Misión y Visión */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-[#F39200] mr-3" />
              <h2 className="text-2xl font-bold text-[#F39200]">Misión</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Crear momentos inolvidables para los clientes a través de la creación del kit perfecto para fiestas de cumpleaños infantiles que los clientes deseen, teniendo estos kit un diseño innovador y personalizado para cada cliente, así logrando no ser la tienda típica de eventos de cumpleaños.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Eye className="w-8 h-8 text-[#EF87B5] mr-3" />
              <h2 className="text-2xl font-bold text-[#EF87B5]">Visión</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Convertir la marca a nivel provincial como la marca de productos y eventos de cumpleaños para aquellos que buscan productos exclusivos y personalizados, destacándose por sus diseños personalizados y compromiso en la calidad de sus productos, convirtiéndola en una marca conocida a nivel nacional.
            </p>
          </div>
        </div>
      </div>

      {/* Categorías Destacadas */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#F39200] mb-12">
          Categorías Destacadas
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              href="/tienda" 
              key={index}
              className="group"
            >
              <div className={`p-6 rounded-xl ${category.color} transition-all duration-300 transform group-hover:scale-105 text-center`}>
                <div className="mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {category.title}
                </h3>
                <p className="text-sm opacity-90">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/tienda"
            className="inline-block px-8 py-3 bg-[#F39200] text-white font-semibold rounded-full hover:bg-[#F39200]/90 transition-colors duration-300"
          >
            Ver todas las categorías
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSection;