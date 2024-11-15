// components/CartSidebar.tsx
"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white p-4 shadow-lg transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <h2 className="text-xl font-bold mb-4">Carrito</h2>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 mb-4">
                <Image src={item.imagen} alt={item.name} width={50} height={50} className="rounded-md" />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>{item.quantity} x {item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-600">Eliminar</button>
              </div>
            ))}
            <button onClick={clearCart} className="bg-red-500 text-white py-2 rounded w-full">Vaciar carrito</button>
          </div>
        )}
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white py-2 rounded w-full">Continuar comprando</button>
      </div>
    </>
  );
};

export default CartSidebar;
