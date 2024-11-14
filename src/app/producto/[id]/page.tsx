"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

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
  // Agrega más productos aquí
];

const ProductoPage = () => {
  const params = useParams();
  const productoId = params?.id ? parseInt(Array.isArray(params.id) ? params.id[0] : params.id) : null;
  const producto = productos.find((p) => p.id === productoId);

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  const [imagenSeleccionada, setImagenSeleccionada] = useState(producto.imagenes ? producto.imagenes[0] : null);
  const [variacionSeleccionada, setVariacionSeleccionada] = useState(producto.variaciones ? producto.variaciones[0] : null);

  return (
    <div className="container mx-auto sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 pt-40 bg-gray-100">
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
          {producto.imagenes && (
            <div className="flex space-x-2">
              {producto.imagenes.map((imagen, index) => (
                <button key={index} onClick={() => setImagenSeleccionada(imagen)}>
                  <Image src={imagen} alt={`Imagen ${index + 1}`} width={60} height={60} className="rounded-md cursor-pointer border hover:border-[#F39200]" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Información del Producto */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-[#F39200]">{producto.nombre}</h1>
          <p className="text-lg text-gray-600">{producto.descripcion}</p>
          <p className="text-2xl font-semibold text-[#EF87B5]">{producto.precio}</p>

          {/* Variaciones */}
          {producto.variaciones && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Variaciones</h3>
              <div className="flex space-x-4">
                {producto.variaciones.map((variacion, index) => (
                  <button
                    key={index}
                    onClick={() => setVariacionSeleccionada(variacion)}
                    className={`px-4 py-2 rounded-md ${variacionSeleccionada === variacion ? "bg-[#F39200] text-white" : "bg-gray-200 text-gray-800"}`}
                  >
                    {variacion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Botón Añadir al Carrito */}
          <button className="mt-4 w-full bg-[#EF87B5] text-white py-3 rounded-md hover:bg-[#F39200] transition-colors">
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
