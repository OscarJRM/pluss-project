"use client"
import React, { useState } from 'react';
import { 
  Cake, Gift, Cookie, PartyPopper, 
  Palette, Music, Star, Crown,
  Heart, Calendar, Clock, Users
} from 'lucide-react';

const NuestrosServiciosPage = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [visibleDetails, setVisibleDetails] = useState<number | null>(null);

  // Use a separate state for controlling visibility with delay
  const handleMouseEnter = (index: number) => {
    setActiveService(index);
    setVisibleDetails(index);
  };

  const handleMouseLeave = (index:number) => {
    setActiveService(null);
    // Delay hiding the details to allow for smooth transition
    setTimeout(() => {
      if (visibleDetails === index) {
        setVisibleDetails(null);
      }
    }, 300);
  };

  const mainServices = [
    {
      icon: <Gift size={32} />,
      color: "bg-[#F39200]",
      title: "Artículos de Fiesta",
      description: "Todo lo necesario para decorar y ambientar tu celebración.",
      details: [
        "Globos y decoraciones",
        "Temáticas variadas",
        "Personalización disponible"
      ]
    },
    {
      icon: <Cake size={32} />,
      color: "bg-[#EF87B5]",
      title: "Animación Infantil",
      description: "Entretenimiento profesional para los más pequeños.",
      details: [
        "Animadores expertos",
        "Juegos divertidos",
        "Shows temáticos"
      ]
    },
    {
      icon: <Cookie size={32} />,
      color: "bg-[#2F97B3]",
      title: "Bocaditos",
      description: "Deliciosos aperitivos para complementar tu evento.",
      details: [
        "Dulces y salados",
        "Opciones vegetarianas",
        "Presentación elegante"
      ]
    },
    {
      icon: <PartyPopper size={32} />,
      color: "bg-[#C9572F]",
      title: "Piñatería",
      description: "Gran variedad de piñatas y juguetes para tu fiesta.",
      details: [
        "Diseños personalizados",
        "Rellenos variados",
        "Todos los tamaños"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      title: "Calidad Premium",
      description: "Productos y servicios de la más alta calidad"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Atención Personalizada",
      description: "Servicio adaptado a tus necesidades específicas"
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-500" />,
      title: "Disponibilidad",
      description: "Flexibilidad de horarios para tu conveniencia"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "Puntualidad",
      description: "Compromiso con los tiempos acordados"
    }
  ];

  return (
    <div className="min-h-screen pt-32 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F39200]/80 to-pink-500/80">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/bigImg2.jpg')",
              opacity: 0.3
            }}
          />
        </div>
        
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="max-w-2xl text-lg">
            Hacemos realidad la fiesta de tus sueños con servicios completos y personalizados 
            para cada ocasión especial.
          </p>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {mainServices.map((service, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className={`rounded-2xl p-6 h-full bg-white shadow-lg 
              transform transition-all duration-500 ease-in-out
              ${activeService === index ? 'scale-105' : 'hover:scale-102'}`}
            >
              <div className={`${service.color} text-white p-4 rounded-full w-max mb-6 
                transform transition-transform duration-500 ease-in-out
                ${activeService === index ? 'rotate-12' : ''}`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              <div className={`space-y-2 transition-all duration-500 ease-in-out
                ${visibleDetails === index ? 
                  'opacity-100 max-h-[200px] transform translate-y-0' : 
                  'opacity-0 max-h-0 transform translate-y-4 overflow-hidden'}`}
              >
                {service.details.map((detail, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center space-x-2 transition-all duration-300"
                    style={{
                      transitionDelay: `${idx * 100}ms`
                    }}
                  >
                    <div className={`w-2 h-2 rounded-full ${service.color}`} />
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Proceso de Servicio */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#F39200] mb-12">
            Nuestro Proceso
          </h2>
          
          <div className="relative">
            {/* Línea conectora */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[#F39200] transform -translate-y-1/2 hidden md:block" />
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "01", text: "Consulta Inicial", icon: <Users /> },
                { number: "02", text: "Planificación", icon: <Calendar /> },
                { number: "03", text: "Preparación", icon: <Palette /> },
                { number: "04", text: "Realización", icon: <Crown /> }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center 
                    border-4 border-[#F39200] text-[#F39200] font-bold text-xl relative z-10">
                    {step.number}
                  </div>
                  <div className="text-center">
                    <div className="text-gray-800 font-semibold mb-2">{step.text}</div>
                    <div className="text-[#F39200]">{step.icon}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#F39200] mb-12">
            ¿Por qué elegirnos?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F39200] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para hacer tu fiesta inolvidable?
          </h2>
          <button className="bg-white text-[#F39200] px-8 py-3 rounded-full font-bold 
            transform hover:scale-105 transition-all duration-300 shadow-lg">
            Contáctanos Ahora
          </button>
        </div>
      </section>

      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-4 animate-bounce">
          <div className="w-4 h-4 rounded-full bg-pink-400 opacity-50" />
        </div>
        <div className="absolute bottom-1/4 right-8 animate-pulse">
          <div className="w-6 h-6 rounded-full bg-[#F39200] opacity-30" />
        </div>
        <Music className="absolute top-1/3 right-1/4 w-8 h-8 text-[#F39200] opacity-30 animate-bounce" />
        <PartyPopper className="absolute bottom-1/3 left-1/4 w-8 h-8 text-pink-400 opacity-30 animate-pulse" />
      </div>
    </div>
  );
};

export default NuestrosServiciosPage;