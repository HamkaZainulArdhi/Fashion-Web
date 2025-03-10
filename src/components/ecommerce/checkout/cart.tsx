// Cart.tsx
"use client";
import React from 'react';
import { SideNav } from './sidenav';
import { Footer } from './footer';

// Type definitions
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color: string;
  size: string;
  category: string;
}

// Cart Item Component
interface CartItemProps {
  item: CartItem;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}

const CartItemComponent: React.FC<CartItemProps> = ({ item, incrementQuantity, decrementQuantity }) => {
  return (
    <div className="border-t py-4">
      <div className="grid grid-cols-4 gap-4 items-center">
        <div className="col-span-2 flex items-center gap-4">
          <div className="  md:w-24 md:h-32 overflow-hidden rounded-md">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className=" text-sm text-gray-500">{item.category}</div>
            <h3 className=" font-medium">{item.name}</h3>
            <div className=" text-sm mt-1">
              <div><span className="text-gray-500">Warna:</span> {item.color}</div>
              <div><span className="text-gray-500">Size:</span> {item.size}</div>
            </div>
          </div>
        </div>
        <div className="text-center">Rp. {item.price.toFixed(2)}</div>
        <div className="flex items-center justify-center">
          <div className="flex border rounded">
            <button 
              className="px-3 py-1 bg-gray-100" 
              onClick={() => decrementQuantity(item.id)}
            >
              -
            </button>
            <span className="px-3 py-1">{item.quantity}</span>
            <button 
              className="px-3 py-1 bg-gray-100" 
              onClick={() => incrementQuantity(item.id)}
            >
              +
            </button>
          </div>
        </div>
        <div className="text-center text-xs md:text-lg font-medium  text-yellow-500">
          Total Rp. {(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([
    {
      id: 1,
      name: "Floral Print Wrap Dress",
      price: 20.50,
      quantity: 2,
      image: "/images/ecommerce/product-10.jpg",
      color: "Hijau",
      size: "42",
      category: "Tas"
    },
    {
      id: 2,
      name: "Floral Print Wrap Dress",
      price: 30.50,
      quantity: 1,
      image: "/images/ecommerce/product-1.jpg",
      color: "Biru",
      size: "42",
      category: "Kebaya"
    }
  ]);
  
  const incrementQuantity = (id: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };
  
  const decrementQuantity = (id: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const cartSubtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const discount = 4.00;
  
  return (
    <div className=" py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-1">Checkout Belanjamu</h1>
        <p className="text-gray-600 mb-8">{cartItems.reduce((total, item) => total + item.quantity, 0)} items di Keranjangmu.</p>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left side - Cart items */}
          <div className="lg:w-2/3 bg-white rounded-lg shadow-md h-1/3 p-6">
            <h2 className="sr-only">Product List</h2>
            <div className="grid grid-cols-4 gap-4 mb-4 font-semibold">
              <div className="col-span-2">Produk</div>
              <div className="text-center">Harga</div>
              <div className="text-center">Jumlah</div>
              <div className="text-center hidden lg:block">Total Harga</div>
            </div>
            
            {cartItems.map((item) => (
              <CartItemComponent 
                key={item.id}
                item={item}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
              />
            ))}
          </div>
          
          {/* Right side - Cart summary */}
          <SideNav 
            cartSubtotal={cartSubtotal} 
            discount={discount} 
          />
        </div>
        
        {/* Bottom service features */}
        <Footer />
      </div>
    </div>
  );
};

export default ShoppingCart;