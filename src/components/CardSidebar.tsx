"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart, updateCartItemQuantity } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white p-4 shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-2xl font-bold text-black mb-4">Carrito</h2>

        {/* Cart Content */}
        {cart.length === 0 ? (
          <p className="text-black">Tu carrito está vacío</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 mb-4">
                {/* Product Image */}
                <div className="w-16 h-16">
                  <Image
                    src={item.imagen}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-md object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-grow">
                  <h3 className="font-semibold text-black">{item.name}</h3>
                  <p className="text-black">${item.price.toFixed(2)} x {item.quantity}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    {/* Decrease Quantity */}
                    <button
                      onClick={() =>
                        updateCartItemQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="px-2 py-1 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
                    >
                      -
                    </button>

                    {/* Quantity Display */}
                    <span className="px-4 py-1 bg-gray-100 text-black rounded">
                      {item.quantity}
                    </span>

                    {/* Increase Quantity */}
                    <button
                      onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 font-semibold hover:underline"
                >
                  Eliminar
                </button>
              </div>
            ))}

            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="bg-red-500 text-white py-2 rounded w-full hover:bg-red-600 transition"
            >
              Vaciar carrito
            </button>
          </div>
        )}

        {/* Continue Shopping Button */}
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white py-2 rounded w-full hover:bg-blue-600 transition"
        >
          Continuar comprando
        </button>
      </div>
    </>
  );
};

export default CartSidebar;
