// app/tienda/page.tsx
"use client";
import React, { useState } from 'react';
import Slider from "react-slick";
import ProductoCard from '@/components/ProductoCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categorias = [
  { nombre: "Combos descartables", color: "#EF87B5", imagen: "/images/categoria1.webp" },
  { nombre: "Globos", color: "#F39200", imagen: "/images/categoria2.webp" },
  { nombre: "Decorativos plásticos y de tela", color: "#2F97B3", imagen: "/images/categoria3.jpg" },
  { nombre: "Velas", color: "#FEEB00", imagen: "/images/categoria4.jpg" },
  { nombre: "Decorativos de papel", color: "#EF87B5", imagen: "/images/categoria5.jpg" },
  { nombre: "Piñatas", color: "#F39200", imagen: "/images/categoria6.jpg" },
  { nombre: "Ajuar de novios", color: "#2F97B3", imagen: "/images/categoria7.jpg" },
  { nombre: "Ajuar de 15 años", color: "#FEEB00", imagen: "/images/categoria8.jpg" },
  { nombre: "Tarjetas", color: "#EF87B5", imagen: "/images/categoria9.jpg" },
  { nombre: "Juguetería y rellenos", color: "#F39200", imagen: "/images/categoria10.jpg" }
];

const productos = [
  { id: 1, nombre: "Producto 1", categoria: "Combos descartables de personajes", precio: "$10", color: "#EF87B5", imagen: "/images/product1.jpg" },
  { id: 2, nombre: "Producto 2", categoria: "Globos", precio: "$5", color: "#F39200", imagen: "/images/product2.jpg" },
  { id: 3, nombre: "Producto 3", categoria: "Decorativos plásticos y de tela", precio: "$15", color: "#2F97B3", imagen: "/images/product3.jpg" },
  // Agrega más productos con sus imágenes
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
    ? productos.filter((producto) => producto.categoria === categoriaSeleccionada)
    : productos;

  const manejarFiltrado = (categoria: string | null) => {
    setCategoriaSeleccionada(categoria);
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
    <div className="container mx-auto px-4 py-8 pt-36 bg-white">
      <h1 className="text-3xl font-bold text-center text-[#F39200] mb-8">Tienda</h1>

      {/* Carrusel de categorías */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#EF87B5] mb-4 text-center">Categorías</h2>
        <Slider {...settings}>
          {categorias.map((categoria) => (
            <div key={categoria.nombre} className="p-2">
              <div
                onClick={() => manejarFiltrado(categoria.nombre)}
                className="p-4 rounded-lg shadow-lg cursor-pointer text-center bg-white h-48 flex flex-col items-center justify-between"
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
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}
