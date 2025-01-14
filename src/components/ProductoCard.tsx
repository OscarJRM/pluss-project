"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Heart, Eye, Check } from 'lucide-react';

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
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: producto.id,
      name: producto.nombre,
      price: parseFloat(producto.precio.replace('$', '')),
      quantity: 1,
      imagen: producto.imagen,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div 
      className="relative group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen y Overlay */}
      <div className="relative aspect-square">
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          className="object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-2">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
            >
              <Eye size={20} className="text-gray-700" />
            </button>
            <button
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
            >
              <Heart size={20} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-4">
        <div className="min-h-[80px]">
          <h2 className="text-lg font-semibold mb-1 text-gray-800 line-clamp-2">
            {producto.nombre}
          </h2>
          <p className="text-[#F39200] font-bold text-xl mb-2">
            {producto.precio}
          </p>
        </div>

        {/* Descripción Expandible */}
        {showDetails && producto.descripcion && (
          <p className="text-sm text-gray-600 mb-3 animate-fadeIn">
            {producto.descripcion}
          </p>
        )}

        {/* Botón de Añadir al Carrito */}
        <button
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`
            w-full px-4 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2
            transition-all duration-300 transform
            ${isAdded 
              ? 'bg-green-500 text-white' 
              : 'bg-[#F39200] text-white hover:bg-[#EF87B5]'}
          `}
        >
          {isAdded ? (
            <>
              <Check size={18} />
              <span>¡Agregado!</span>
            </>
          ) : (
            <>
              <ShoppingCart size={18} />
              <span>Añadir al carrito</span>
            </>
          )}
        </button>

        {/* Especificaciones Expandibles */}
        {showDetails && producto.especificaciones && (
          <div className="mt-3 text-sm text-gray-500 animate-fadeIn">
            <div className="border-t pt-2">
              <pre className="whitespace-pre-wrap font-sans">
                {producto.especificaciones}
              </pre>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default ProductoCard;