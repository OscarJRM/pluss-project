// components/CategoriaCard.tsx
import React from 'react';

interface CategoriaCardProps {
  nombre: string;
  color: string;
}

const CategoriaCard: React.FC<CategoriaCardProps> = ({ nombre, color }) => {
  return (
    <div className="p-6 rounded-lg shadow-lg text-white font-semibold text-center" style={{ backgroundColor: color }}>
      {nombre}
    </div>
  );
};

export default CategoriaCard;
