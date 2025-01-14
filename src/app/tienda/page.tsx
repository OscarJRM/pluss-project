"use client";
import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import ProductoCard from "@/components/ProductoCard";
import { ChevronLeft, ChevronRight, Search, Gift, Star } from "lucide-react";
import { CustomArrowProps } from "react-slick";



const categorias = [
  {
    nombre: "Combos descartables",
    color: "#EF87B5",
    imagen: "/images/categoria1.webp",
  },
  { nombre: "Globos", color: "#F39200", imagen: "/images/categoria2.webp" },
  {
    nombre: "Decorativos plásticos y de tela",
    color: "#2F97B3",
    imagen: "/images/categoria3.webp",
  },
  { nombre: "Velas", color: "#C9572F", imagen: "/images/categoria4.webp" },
  {
    nombre: "Decorativos de papel",
    color: "#EF87B5",
    imagen: "/images/categoria5.webp",
  },
  {
    nombre: "Piñatas",
    color: "#F39200",
    imagen: "/images/categoria6.webp",
    featured: true,
  },
  {
    nombre: "Ajuar de novios",
    color: "#2F97B3",
    imagen: "/images/categoria7.webp",
  },
  {
    nombre: "Ajuar de 15 años",
    color: "#C9572F",
    imagen: "/images/categoria8.webp",
  },
  { nombre: "Tarjetas", color: "#EF87B5", imagen: "/images/categoria9.webp" },
  {
    nombre: "Juguetería y rellenos",
    color: "#F39200",
    imagen: "/images/categoria10.webp",
  },
];

const productos = [
  {
    id: 1,
    nombre: "Combo Descartables de la Vaca Lola",
    categoria: "Combos descartables",
    descripcion:
      "Combo completo de artículos descartables temáticos de la Vaca Lola para fiestas infantiles.",
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
    `,
  },
  {
    id: 2,
    nombre: "Combo Descartables de Minnie",
    categoria: "Combos descartables",
    descripcion:
      "Combo completo de artículos descartables temáticos de la Vaca Lola para fiestas infantiles.",
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
    `,
  },
  {
    id: 3,
    nombre: "Combo Descartables de Micke Crack",
    categoria: "Combos descartables",
    descripcion:
      "Combo completo de artículos descartables temáticos de la Vaca Lola para fiestas infantiles.",
    precio: "$9.50",
    color: "#EF87B5",
    imagen: "/images/mike_crack.jpg", // Asegúrate de que la imagen esté en la carpeta correcta
    especificaciones: `
      Incluye:
      - Sorpresa: $1.75
      - Bandeja: $1.75
      - Platos: $1.50
      - Invitación: $1.50
      - Vasos: $1.50
      - Sombreros: $1.50
    `,
  },
  {
    id: 4,
    nombre: "Combo Descartables de Super Mario",
    categoria: "Combos descartables",
    descripcion:
      "Combo completo de artículos descartables temáticos de Super Mario para fiestas infantiles.",
    precio: "$9.50",
    color: "#EF87B5",
    imagen: "/images/super_mario.jpg", // Asegúrate de que la imagen esté en la carpeta correcta
    especificaciones: `
      Incluye:
      - Sorpresa: $1.75
      - Bandeja: $1.75
      - Platos: $1.50
      - Invitación: $1.50
      - Vasos: $1.50
      - Sombreros: $1.50
    `,
  },
  {
    id: 5,
    nombre: "Ajuar de 15 años",
    categoria: "Ajuar de 15 años",
    descripcion: "Elegante ajuar para celebración de quinceañeras, con diseño único y materiales de calidad.",
    precio: "$50.00",
    color: "#C9572F",
    imagen: "/images/varios/ajuar15.jpg",
    especificaciones: `
      Incluye:
      - Vestido
      - Accesorios
      - Decoraciones temáticas
    `,
  },
  {
    id: 6,
    nombre: "Arreglo floral decorativo",
    categoria: "Decorativos plásticos y de tela",
    descripcion: "Arreglo floral ideal para eventos especiales y decoración de interiores.",
    precio: "$20.00",
    color: "#2F97B3",
    imagen: "/images/varios/arreglo.jpg",
    especificaciones: `
      Incluye:
      - Flores artificiales de alta calidad
      - Base decorativa
    `,
  },
  {
    id: 7,
    nombre: "Confeti multicolor",
    categoria: "Decorativos de papel",
    descripcion: "Confeti biodegradable multicolor, perfecto para fiestas y celebraciones.",
    precio: "$3.00",
    color: "#EF87B5",
    imagen: "/images/varios/confeti.jpg",
    especificaciones: `
      Incluye:
      - 1 bolsa de confeti de 100 gramos
    `,
  },
  {
    id: 8,
    nombre: "Guirnaldas festivas",
    categoria: "Decorativos de papel",
    descripcion: "Guirnaldas coloridas para decorar cualquier evento especial.",
    precio: "$5.00",
    color: "#EF87B5",
    imagen: "/images/varios/guirnaldas.jpg",
    especificaciones: `
      Incluye:
      - 5 guirnaldas de diferentes colores
      - Material resistente y duradero
    `,
  },
  {
    id: 9,
    nombre: "Piñata de Plim Plim",
    categoria: "Piñatas",
    descripcion: "Piñata temática de Plim Plim, ideal para fiestas infantiles.",
    precio: "$15.00",
    color: "#F39200",
    imagen: "/images/varios/plin.jpg",
    especificaciones: `
      Incluye:
      - Material resistente
      - Capacidad para 2 kg de dulces
    `,
  },
  {
    id: 10,
    nombre: "Velas decorativas",
    categoria: "Velas",
    descripcion: "Set de velas numeradas para pasteles de cumpleaños.",
    precio: "$2.50",
    color: "#C9572F",
    imagen: "/images/varios/velas.jpg",
    especificaciones: `
      Incluye:
      - Números del 0 al 9
      - Base segura para colocación
    `,
  },
  {
    id: 11,
    nombre: "Tarjetas de 15 años",
    categoria: "Tarjetas",
    descripcion: "Tarjetas personalizadas para quinceañeras, ideales para invitaciones y recuerdos.",
    precio: "$12.00",
    color: "#EF87B5",
    imagen: "/images/varios/tarjeta15.jpg",
    especificaciones: `
      Incluye:
      - 20 tarjetas personalizables
      - Sobres decorativos
    `,
  },
  {
    id: 12,
    nombre: "Piñata de Mikecrack",
    categoria: "Piñatas",
    descripcion: "Piñata temática de Mikecrack, perfecta para fiestas infantiles de fans del personaje.",
    precio: "$18.00",
    color: "#F39200",
    imagen: "/images/varios/mikecrack.jpg",
    especificaciones: `
      Incluye:
      - Material duradero y resistente
      - Capacidad para 3 kg de dulces o juguetes
    `,
  }
];
// Añadimos algunos productos de piñatas destacados
const pinatasDestacadas = [
  {
    id: 101,
    nombre: "Piñata Paw Patrol",
    categoria: "Piñatas",
    precio: "$6.00",
    color: "#F39200",
    imagen: "/images/piniatas/paw.png",
    descripcion: "Piñata temática de la Patrulla Canina",
  },
  {
    id: 102,
    nombre: "Piñata Mickey Mouse",
    categoria: "Piñatas",
    precio: "$9.00",
    color: "#F39200",
    imagen: "/images/piniatas/mickey.png",
    descripcion: "Piñata temática de Mickey Mouse", 
  },
  {
    id: 103,
    nombre: "Piñata Messi",
    categoria: "Piñatas",
    precio: "$16.00",
    color: "#F39200",
    imagen: "/images/piniatas/messi.png",
    descripcion: "Elegante piñata de princesa con corona",
  },
];

function NextArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg text-[#F39200] hover:text-orange-600 z-10 transition-all duration-300 hover:scale-110"
    >
      <ChevronRight size={24} />
    </button>
  );
}

function PrevArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg text-[#F39200] hover:text-orange-600 z-10 transition-all duration-300 hover:scale-110"
    >
      <ChevronLeft size={24} />
    </button>
  );
}

export default function TiendaPage() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<
    string | null
  >(null);
  const [searchTerm, setSearchTerm] = useState("");

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter(
        (producto) => producto && producto.categoria === categoriaSeleccionada
      )
    : productos;

  const searchFiltered = productosFiltrados.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      producto.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleCategoriaClick = (categoria: string) => {
    if (categoriaSeleccionada === categoria) {
      setCategoriaSeleccionada(null);
    } else {
      setCategoriaSeleccionada(categoria);
    }
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con búsqueda */}
      <div className="bg-gradient-to-r from-[#F39200] to-[#EF87B5] py-8 pt-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-4xl font-bold text-white text-center">
              Encuentra todo para tu fiesta
            </h1>

            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Buscar productos o categorías..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F39200] text-gray-700 pl-12"
              />
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Sección destacada de Piñatas */}
        <div className="mb-16 bg-gradient-to-r from-[#F39200]/10 to-[#EF87B5]/10 rounded-3xl p-8">
          <div className="flex items-center mb-6">
            <Gift className="text-[#F39200] w-8 h-8 mr-3" />
            <h2 className="text-3xl font-bold text-[#F39200]">
              Piñatas Destacadas
            </h2>
          </div>

          <p className="text-gray-600 mb-8 max-w-2xl">
            Descubre nuestra colección exclusiva de piñatas artesanales. Cada
            pieza es única y está hecha con los mejores materiales para hacer tu
            celebración inolvidable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pinatasDestacadas.map((pinata) => (
              <div
                key={pinata.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-96">
                  <Image
                    src={pinata.imagen}
                    alt={pinata.nombre}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-[#F39200] text-white px-3 py-1 rounded-full text-sm">
                    Destacado
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {pinata.nombre}
                  </h3>
                  <p className="text-gray-600 mb-4">{pinata.descripcion}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#F39200] font-bold text-xl">
                      {pinata.precio}
                    </span>
                    <button className="bg-[#F39200] text-white px-4 py-2 rounded-full hover:bg-[#EF87B5] transition-colors duration-300">
                      Ver detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carrusel de categorías */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-[#EF87B5]">
              Explora por Categorías
              {categoriaSeleccionada && (
                <span className="ml-2 text-sm text-gray-500">
                  (Haz clic nuevamente en {categoriaSeleccionada} para ver todos
                  los productos)
                </span>
              )}
            </h2>
            <div className="flex items-center space-x-2">
              <Star className="text-yellow-400" size={20} />
              <span className="text-gray-600">Desliza para ver más</span>
            </div>
          </div>

          <Slider {...settings}>
            {categorias.map((categoria) => (
              <div key={categoria.nombre} className="p-2">
                <div
                  onClick={() => handleCategoriaClick(categoria.nombre)} 
                  className={`
                    p-4 rounded-xl shadow-lg cursor-pointer text-center h-48 flex flex-col items-center justify-between
                    transform transition-all duration-300 hover:scale-105
                     ${
                       categoriaSeleccionada === categoria.nombre
                         ? "ring-2 ring-[#F39200] bg-[#F39200]/10"
                         : "bg-white"
                     }
                    ${categoria.featured ? "border-2 border-[#F39200]" : ""}
                  `}
                >
                  <div className="relative w-32 h-32">
                    <Image
                      src={categoria.imagen}
                      alt={categoria.nombre}
                      fill
                      className="object-cover rounded-lg"
                    />
                    {categoria.featured && (
                      <div className="absolute -top-2 -right-2 bg-[#F39200] text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                  </div>
                  <p
                    className="font-semibold"
                    style={{ color: categoria.color }}
                  >
                    {categoria.nombre}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Lista de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchFiltered.map((producto) => (
            <Link
              key={producto.id}
              href={`/producto/${producto.id}`}
              legacyBehavior
            >
              <a className="transform hover:scale-105 transition-all duration-300">
                <ProductoCard producto={producto} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
