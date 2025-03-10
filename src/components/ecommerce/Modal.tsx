import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ModalProps {
  product: Product;
  onClose: () => void;
  addToCart: (product: Product, quantity: number) => void;
}

const Modal: React.FC<ModalProps> = ({ product, onClose, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-5xl h-[500px] shadow-lg overflow-auto flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-3xl">
            &times;
          </button>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-8 ">
          {/* Left: Product Image */}
          <div className="w-full md:w-1/2 flex justify-center shadow-lg">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full max-h-96 object-cover rounded-md"
            />
          </div>

          {/* Right: Product Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <p className="text-gray-700 text-lg mb-2">${product.price.toFixed(2)}</p>
              <p className="text-gray-600 mb-4">Category: <span className="font-semibold">{product.category}</span></p>

              {/* Size Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Ukuran</label>
                <select className="w-full p-2 border bg-white border-gray-300 rounded-md">
                  <option>Pilih Ukuran</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>

              {/* Color Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Warna</label>
                <select className="w-full p-2 border bg-white border-gray-300 rounded-md">
                  <option>Pilih Warna</option>
                  <option>Seperti Di Gambar</option>
                  <option>Putih Krim</option>
                  <option>Coklat </option>
                </select>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center mb-6">
                <button 
                  onClick={decreaseQuantity} 
                  className="px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-1 border-t border-b border-gray-300">{quantity}</span>
                <button 
                  onClick={increaseQuantity} 
                  className="px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => {
                addToCart(product, quantity);
                onClose();
              }}
              className="w-full bg-primary text-white py-3 rounded-lg text-lg hover:bg-primary-dark transition duration-300"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
