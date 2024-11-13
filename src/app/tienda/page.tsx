// app/tienda/page.tsx
"use client";
import React, { useState } from 'react';
import CategoriaCard from '@/components/CategoriaCard';
import ProductoCard from '@/components/ProductoCard';

const categorias = [
  { nombre: "Combos descartables de personajes", color: "#EF87B5" },
  { nombre: "Globos", color: "#F39200" },
  { nombre: "Decorativos plásticos y de tela", color: "#2F97B3" },
  { nombre: "Velas", color: "#FEEB00" },
  { nombre: "Decorativos de papel", color: "#EF87B5" },
  { nombre: "Piñatas", color: "#F39200" },
  { nombre: "Ajuar de novios", color: "#2F97B3" },
  { nombre: "Ajuar de 15 años", color: "#FEEB00" },
  { nombre: "Tarjetas", color: "#EF87B5" },
  { nombre: "Juguetería y rellenos", color: "#F39200" }
];

const productos = [
  { id: 1, nombre: "Producto 1", categoria: "Combos descartables de personajes", precio: "$10", color: "#EF87B5", imagen: "/images/product1.jpg" },
  { id: 2, nombre: "Producto 2", categoria: "Globos", precio: "$5", color: "#F39200", imagen: "/images/product2.jpg" },
  { id: 3, nombre: "Producto 3", categoria: "Decorativos plásticos y de tela", precio: "$15", color: "#2F97B3", imagen: "/images/product3.jpg" },
  // Agrega más productos con sus imágenes
];

export default function TiendaPage() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter((producto) => producto.categoria === categoriaSeleccionada)
    : productos;

  const manejarFiltrado = (categoria: string | null) => {
    setCategoriaSeleccionada(categoria);
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-36 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8">Tienda</h1>

      {/* Lista de categorías */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => manejarFiltrado(null)}
          className={`p-2 px-4 rounded-lg ${!categoriaSeleccionada ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Todas
        </button>
        {categorias.map((categoria) => (
          <button
            key={categoria.nombre}
            onClick={() => manejarFiltrado(categoria.nombre)}
            className={`p-2 px-4 rounded-lg ${categoriaSeleccionada === categoria.nombre ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
            style={{ backgroundColor: categoriaSeleccionada === categoria.nombre ? categoria.color : '#f3f3f3' }}
          >
            {categoria.nombre}
          </button>
        ))}
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
