"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import ProductoCard from '@/components/ProductoCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categorias = [
  { nombre: "Combos descartables", color: "#EF87B5", imagen: "/images/categoria1.webp" },
  { nombre: "Globos", color: "#F39200", imagen: "/images/categoria2.webp" },
  { nombre: "Decorativos plásticos y de tela", color: "#2F97B3", imagen: "/images/categoria3.webp" },
  { nombre: "Velas", color: "#C9572F", imagen: "/images/categoria4.webp" },
  { nombre: "Decorativos de papel", color: "#EF87B5", imagen: "/images/categoria5.webp" },
  { nombre: "Piñatas", color: "#F39200", imagen: "/images/categoria6.webp" },
  { nombre: "Ajuar de novios", color: "#2F97B3", imagen: "/images/categoria7.webp" },
  { nombre: "Ajuar de 15 años", color: "#C9572F", imagen: "/images/categoria8.webp" },
  { nombre: "Tarjetas", color: "#EF87B5", imagen: "/images/categoria9.webp" },
  { nombre: "Juguetería y rellenos", color: "#F39200", imagen: "/images/categoria10.webp" }
];

const productos = [
  { 
    id: 1, 
    nombre: "Combo Descartables de la Vaca Lola",
    categoria: "Combos descartables",
    descripcion: "Combo completo de artículos descartables temáticos de la Vaca Lola para fiestas infantiles.",
    precio: "$9.50", 
    color: "#EF87B5",
    imagen: "/images/combo_vaca_lola.jpg", // Asegúrate de que la imagen esté en la carpeta correcta
    especificaciones: `
      Incluye:
      - Sorpresa: $1.75
      - Bandeja: $1.75
      - Platos: $1.50
      - Invitación: $1.50
      - Vasos: $1.50
      - Sombreros: $1.50
    `
  },
  { 
    id: 2, 
    nombre: "Combo Descartables de Minnie", 
    categoria: "Combos descartables",
    descripcion: "Combo completo de artículos descartables temáticos de la Vaca Lola para fiestas infantiles.",
    precio: "$9.50", 
    color: "#EF87B5",
    imagen: "/images/mini.jpg", // Asegúrate de que la imagen esté en la carpeta correcta
    especificaciones: `
      Incluye:
      - Sorpresa: $1.75
      - Bandeja: $1.75
      - Platos: $1.50
      - Invitación: $1.50
      - Vasos: $1.50
      - Sombreros: $1.50
    `
  },
  { 
    id: 3, 
    nombre: "Combo Descartables de Micke Crack", 
    categoria: "Combos descartables",
    descripcion: "Combo completo de artículos descartables temáticos de la Vaca Lola para fiestas infantiles.",
    precio: "$9.50", 
    color: "#EF87B5",
    imagen: "/images/mike_crack.jpg",// Asegúrate de que la imagen esté en la carpeta correcta
    especificaciones: `
      Incluye:
      - Sorpresa: $1.75
      - Bandeja: $1.75
      - Platos: $1.50
      - Invitación: $1.50
      - Vasos: $1.50
      - Sombreros: $1.50
    `
  },
  { 
    id: 4, 
    nombre: "Combo Descartables de Super Mario", 
    categoria: "Combos descartables",
    descripcion: "Combo completo de artículos descartables temáticos de Super Mario para fiestas infantiles.",
    precio: "$9.50", 
    color: "#EF87B5",
    imagen: "/images/super_mario.jpg",// Asegúrate de que la imagen esté en la carpeta correcta
    especificaciones: `
      Incluye:
      - Sorpresa: $1.75
      - Bandeja: $1.75
      - Platos: $1.50
      - Invitación: $1.50
      - Vasos: $1.50
      - Sombreros: $1.50
    `
  },
  {
    id: 5,
    nombre: "Globos R9 x 100",
    categoria: "Globos",
    descripcion: "Bolsa de 100 globos de alta calidad, perfectos para decoraciones festivas.",
    precio: "$4.00",
    color: "#F39200",
    imagen: "/images/globo_rojo.jpg", // Asegúrate de que la imagen esté en la carpeta correcta
    especificaciones: `
      Incluye:
      - Precio unitario: $0.10
      - Precio por docena: $1.00
    `
  }
];

// Flechas personalizadas
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#F39200] hover:text-orange-600 z-10"
    >
      <ChevronRight size={32} />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#F39200] hover:text-orange-600 z-10"
    >
      <ChevronLeft size={32} />
    </button>
  );
}

export default function TiendaPage() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter((producto) => producto && producto.categoria === categoriaSeleccionada)
    : productos;

  const manejarFiltrado = (categoria: string) => {
    setCategoriaSeleccionada(categoriaSeleccionada === categoria ? null : categoria);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 pt-40 bg-gray-100">
      {/*<h1 className="text-3xl font-bold text-center text-[#F39200] mb-8">Tienda</h1>*/}

      {/* Carrusel de categorías */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#EF87B5] mb-4 text-center">Categorías</h2>
        <Slider {...settings}>
          {categorias.map((categoria) => (
            <div key={categoria.nombre} className="p-2">
              <div
                onClick={() => manejarFiltrado(categoria.nombre)}
                className={`p-4 rounded-lg shadow-lg cursor-pointer text-center h-48 flex flex-col items-center justify-between
                  ${categoriaSeleccionada === categoria.nombre ? 'bg-gray-300' : 'bg-white'}`}
                style={{ borderColor: categoria.color, borderWidth: categoriaSeleccionada === categoria.nombre ? '2px' : '0' }}
              >
                <img src={categoria.imagen} alt={categoria.nombre} className="w-32 h-32 object-cover rounded-md mb-2" />
                <p className="font-semibold truncate w-full text-center" style={{ color: categoria.color }}>{categoria.nombre}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Lista de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productosFiltrados.map((producto) => (
          <Link key={producto.id} href={`/producto/${producto.id}`} legacyBehavior>
        <a>
          <ProductoCard producto={{ ...producto,descripcion: undefined, especificaciones: undefined }} />
        </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
