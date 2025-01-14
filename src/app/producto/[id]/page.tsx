"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster


const productos = [
  {
    id: 1,
    nombre: "Combo Descartables de la Vaca Lola",
    descripcion: "Combo completo de artículos descartables temáticos de la Vaca Lola para fiestas infantiles.",
    precio: "$9.50",
    color: "#EF87B5",
    imagenes: ["/images/combo_vaca_lola.jpg", "/images/categoria1.webp"], // Asegúrate de que la imagen esté en la carpeta correcta
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
    descripcion: "Combo completo de artículos descartables temáticos de la Vaca Lola para fiestas infantiles.",
    precio: "$9.50",
    color: "#EF87B5",
    variaciones: ["Talla S", "Talla M", "Talla L"],
    imagenes: ["/images/mini.jpg", "/images/categoria1.webp"], // Asegúrate de que la imagen esté en la carpeta correcta
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
    descripcion: "Combo completo de artículos descartables temáticos de la Vaca Lola para fiestas infantiles.",
    precio: "$9.50", 
    color: "#EF87B5",
    imagenes: ["/images/mike_crack.jpg"],// Asegúrate de que la imagen esté en la carpeta correcta
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
    imagenes: ["/images/super_mario.jpg"],// Asegúrate de que la imagen esté en la carpeta correcta
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
    imagenes: [
      "/images/globo_rojo.jpg", // Asegúrate de que la imagen esté en la carpeta correcta
      "/images/globo_azul.jpg",
      "/images/globo_morado.jpg",
      "/images/globo_verde.jpg"
    ],
    especificaciones: `
      Incluye:
      - Precio unitario: $0.10
      - Precio por docena: $1.00
    `
  }
]
  
  // Agrega más productos aquí
  const ProductoPage = () => {
    const params = useParams();
    const productoId = params?.id ? parseInt(Array.isArray(params.id) ? params.id[0] : params.id, 10) : null;
    const producto = productos.find((p) => p.id === productoId);
    const { cart, addToCart } = useCart();
      const [imagenSeleccionada, setImagenSeleccionada] = useState(producto?.imagenes?.[0] || "");
  const [cantidad, setCantidad] = useState(1);
  
    if (!producto) {
      return <p>Producto no encontrado</p>;
    }
  
   const handleAddToCart = () => {
      const existingItem = cart.find((item) => item.id === producto.id);
 
      if (existingItem) {
        toast.error("Este producto ya está en el carrito.");
      } else {
        addToCart({
          id: producto.id,
          name: producto.nombre,
          price: parseFloat(producto.precio.replace("$", "")),
          quantity: cantidad,
          imagen: producto.imagenes[0],
        });
        toast.success("Producto añadido al carrito.");
      }
    };
  
    const handleIncrease = () => {
      setCantidad((prev) => prev + 1);
    };
  
    const handleDecrease = () => {
      setCantidad((prev) => (prev > 1 ? prev - 1 : 1));
    };
  
    return (
      <div className="container mx-auto sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 pt-40 bg-gray-100">
        <Toaster position="top-right" reverseOrder={false} /> {/* Add Toaster here */}
        <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-md shadow-lg">
          {/* Galería de Imágenes */}
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="w-full h-80 relative mb-4">
              {imagenSeleccionada ? (
                <Image src={imagenSeleccionada} alt={producto.nombre} layout="fill" objectFit="contain" className="rounded-md" />
              ) : (
                <p>Imagen no disponible</p>
              )}
            </div>
            <div className="flex space-x-2">
              {producto.imagenes.map((imagen, index) => (
                <button key={index} onClick={() => setImagenSeleccionada(imagen)}>
                  <Image src={imagen} alt={`Imagen ${index + 1}`} width={60} height={60} className="rounded-md cursor-pointer border hover:border-[#F39200]" />
                </button>
              ))}
            </div>
          </div>
  
          {/* Información del Producto */}
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-[#F39200]">{producto.nombre}</h1>
            <p className="text-lg text-gray-600">{producto.descripcion}</p>
            <p className="text-2xl font-semibold text-[#EF87B5]">{producto.precio}</p>
  
            {/* Selección de Cantidad */}
            <div className="flex items-center space-x-4">
              <button onClick={handleDecrease} className="px-3 py-1 bg-black rounded text-lg hover:bg-gray-700">
                -
              </button>
              <span className="text-lg font-bold text-black">{cantidad}</span>
              <button onClick={handleIncrease} className="px-3 py-1 bg-black rounded text-lg hover:bg-gray-700">
                +
              </button>
            </div>
  
            {/* Botón Añadir al Carrito */}
            <button onClick={handleAddToCart} className="mt-4 w-full bg-[#EF87B5] text-white py-3 rounded-md hover:bg-[#F39200] transition-colors">
              Añadir al Carrito
            </button>
          </div>
        </div>
  
        {/* Especificaciones del Producto */}
        <div className="mt-8 bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Detalles del Producto</h2>
          <p className="text-gray-600">{producto.especificaciones}</p>
        </div>
      </div>
    );
  };
  
  export default ProductoPage;