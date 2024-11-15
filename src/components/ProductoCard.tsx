// components/ProductoCard.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

interface ProductoCardProps {
  producto: {
    id: number;
    nombre: string;
    precio: string;
    color: string;
    imagen: string;
    descripcion?: string;
    especificaciones?: string;
  };
}

const ProductoCard: React.FC<ProductoCardProps> = ({ producto }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: producto.id,
      name: producto.nombre,
      price: parseFloat(producto.precio.replace('$', '')), // Convert price to a number
      quantity: 1,
      imagen: producto.imagen,
    });
  };

  return (
    <div className="p-4 rounded-lg shadow-lg text-gray-800 font-semibold text-center bg-white">
      <Image
        src={producto.imagen}
        alt={producto.nombre}
        width={150}
        height={150}
        className="object-cover rounded-md mx-auto mb-4"
      />
      <h2 className="text-xl mb-2">{producto.nombre}</h2>
      <p className="text-lg mb-1">{producto.precio}</p>
      {producto.descripcion && <p className="text-sm mb-2 text-gray-600">{producto.descripcion}</p>}
      {producto.especificaciones && (
        <p className="text-sm text-gray-500 mb-4 whitespace-pre-wrap">{producto.especificaciones}</p>
      )}
      <button
        onClick={handleAddToCart}
        className="bg-[#F39200] text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductoCard;
