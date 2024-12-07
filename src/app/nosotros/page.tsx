import React from 'react';
import { Heart, Star, Users, Medal, ShoppingBag, Clock } from 'lucide-react';

const NosotrosPage = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Pasión",
      description: "Amamos lo que hacemos y nos dedicamos a hacer realidad tus celebraciones soñadas."
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Calidad",
      description: "Seleccionamos cuidadosamente cada producto para garantizar la mejor experiencia."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Servicio",
      description: "Nuestro equipo está comprometido a brindarte una atención personalizada y excepcional."
    }
  ];

  const highlights = [
    {
      icon: <Medal className="w-10 h-5 text-[#F39200]" />,
      stat: "5+ años",
      text: "de experiencia"
    },
    {
      icon: <ShoppingBag className="w-10 h-5 text-[#F39200]" />,
      stat: "1000+",
      text: "productos"
    },
    {
      icon: <Clock className="w-10 h-5 text-[#F39200]" />,
      stat: "24/7",
      text: "atención"
    }
  ];

  return (
    <div className="min-h-screen pt-32 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/bigImg1.jpg')",
              opacity: 0.5
            }}
          />
        </div>
        
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Nuestra Historia</h1>
          <p className="max-w-2xl text-lg">
            En Pluss, nos dedicamos a hacer realidad tus sueños festivos. Desde nuestro inicio, 
            nos hemos comprometido a ofrecer los mejores productos y servicios para tus celebraciones.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold text-[#F39200] mb-4">Misión</h2>
            <p className="text-gray-700 leading-relaxed">
              Ser la empresa líder en la provisión de artículos y servicios para fiestas, 
              comprometidos con la excelencia y la innovación, garantizando momentos inolvidables 
              para nuestros clientes a través de productos de calidad y un servicio excepcional.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold text-[#F39200] mb-4">Visión</h2>
            <p className="text-gray-700 leading-relaxed">
              Convertirnos en la referencia nacional en el mercado de artículos para fiestas, 
              expandiendo nuestra presencia y manteniendo los más altos estándares de calidad 
              y servicio, siendo reconocidos por nuestra innovación y compromiso con la felicidad 
              de nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#F39200] mb-12">
            Nuestros Valores
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="bg-[#F39200] py-10    ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="text-center text-white transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{item.stat}</div>
                <div className="text-lg">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-4 animate-bounce">
          <div className="w-4 h-4 rounded-full bg-pink-400 opacity-50" />
        </div>
        <div className="absolute top-1/2 right-8 animate-pulse">
          <div className="w-6 h-6 rounded-full bg-[#F39200] opacity-30" />
        </div>
      </div>
    </div>
  );
};

export default NosotrosPage;