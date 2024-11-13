// components/ProductoCard.tsx
import React from 'react';
import Image from 'next/image';

interface ProductoCardProps {
  producto: {
    id: number;
    nombre: string;
    precio: string;
    color: string;
    imagen: string;
  };
}

const ProductoCard: React.FC<ProductoCardProps> = ({ producto }) => {
  const handleAddToCart = () => {
    alert(`Añadido al carrito: ${producto.nombre}`);
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
      <p className="text-lg mb-4">{producto.precio}</p>
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
