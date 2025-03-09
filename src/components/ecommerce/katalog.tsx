"use client";
import React, { useState, useEffect, useRef } from 'react';
import Sidenav from './sidenav';
import Modal from './Modal';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const Katalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<string>('Low to High');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const filterMenuRef = useRef<HTMLDivElement>(null);
  const cartMenuRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);


const allProducts: Product[] = [
    // Women's Clothing
    { id: 1, name: 'Denim Sasirangan', price: 15.95, image: '/images/ecommerce/product-1.jpg', category: 'Women\'s clothing' },
    { id: 2, name: 'Sasirangan Outer', price: 18.50, image: '/images/ecommerce/product-2.jpg', category: 'Women\'s clothing' },
    { id: 3, name: 'Patchwork Dress', price: 12.99, image: '/images/ecommerce/product-3.jpg', category: 'Women\'s clothing' },
    { id: 4, name: 'Sasirangan Patchwork', price: 45.00, image: '/images/ecommerce/product-5.jpg', category: 'Women\'s clothing' },
    { id: 5, name: 'Sasirangan Tops', price: 22.50, image: '/images/ecommerce/product-9.jpg', category: 'Accessories' },

    // Men's Clothing
    { id: 6, name: 'Sasirangan Shirt', price: 25.99, image: '/images/ecommerce/product-4.jpg', category: 'Men\'s Clothing' },
    { id: 7, name: 'Shirt Sasirangan', price: 39.99, image: '/images/ecommerce/product-6.jpg', category: 'Men\'s Clothing' },
    { id: 8, name: 'Sasirangan Patchwork Denim', price: 55.00, image: '/images/ecommerce/product-7.jpg', category: 'Men\'s Clothing' },
    { id: 9, name: 'Recycled Shirt Sasirangan', price: 35.00, image: '/images/ecommerce/product-12.jpg', category: 'Men\'s Clothing' },

    // Accessories
    { id: 10, name: 'Sepatu Ecoprint', price: 29.99, image: '/images/ecommerce/product-8.jpg', category: 'Accessories' },
    { id: 11, name: 'Sasirangan Totebag', price: 16.75, image: '/images/ecommerce/product-10.jpg', category: 'Accessories' },
    { id: 12, name: 'Totebag Leather Kriem', price: 19.99, image: '/images/ecommerce/product-11.jpg', category: 'Accessories' },
];

const categories = [
    { id: 'all', name: 'All' },
    { id: 'mens', name: 'Men\'s Clothing' },
    { id: 'womens', name: 'Women\'s clothing' },
    { id: 'accessories', name: 'Accessories' },
];


  const sortOptions = [
    { id: 'low-high', name: 'Low to High' },
    { id: 'high-low', name: 'High to Low' },
  ];

  // Calculate cart 
  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    setCartTotal(total);
  }, [cart]);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterMenuRef.current && !filterMenuRef.current.contains(event.target as Node)) {
        setIsFilterMenuOpen(false);
      }
      if (cartMenuRef.current && !cartMenuRef.current.contains(event.target as Node) && 
          !(event.target as HTMLElement).closest('.cart-toggle-button')) {
        setIsCartOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter and sort products 
  useEffect(() => {
    let result = [...allProducts];
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Apply sorting
    if (sortOrder === 'Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else {
      result.sort((a, b) => b.price - a.price);
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, sortOrder]);

  // Handle category change
  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setIsFilterMenuOpen(false);
  };

  // Handle sort order change
  const handleSortChange = (sortName: string) => {
    setSortOrder(sortName);
    setIsFilterMenuOpen(false);
  };


  // Toggle cart menu
  const toggleCartMenu = () => {
    setIsCartOpen(!isCartOpen);
    setIsFilterMenuOpen(false);
  };

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const itemExists = prevCart.find(item => item.product.id === product.id);
      
      if (itemExists) {
        // Increase quantity if product already in cart
        return prevCart.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Add new product to cart
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart
  const removeFromCart = (productId: number) => {
    setCart(prevCart => {
      const itemIndex = prevCart.findIndex(item => item.product.id === productId);
      
      if (itemIndex >= 0) {
        const item = prevCart[itemIndex];
        
        if (item.quantity > 1) {
          // Decrease quantity
          return prevCart.map(item => 
            item.product.id === productId 
              ? { ...item, quantity: item.quantity - 1 } 
              : item
          );
        } else {
          // Remove product completely
          return prevCart.filter(item => item.product.id !== productId);
        }
      }
      
      return prevCart;
    });
  };

  // Delete product from cart
  const deleteFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  // Handle product click to open modal
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Handle closing modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-whitebg ">
      {/* Main Content */}
      <div className="container mx-auto py-4 px-4 flex flex-col md:flex-row">
        {/* Sidenav Component */}
        <Sidenav
          selectedCategory={selectedCategory}
          sortOrder={sortOrder}
          categories={categories}
          sortOptions={sortOptions}
          handleCategoryChange={handleCategoryChange}
          handleSortChange={handleSortChange}
          cart={cart}
          cartTotal={cartTotal}
          toggleCartMenu={toggleCartMenu}
          isCartOpen={isCartOpen}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
          deleteFromCart={deleteFromCart}
          cartMenuRef={cartMenuRef}
        />

        {/* Product Grid */}
        <div className="flex-1 mt-4 md:mt-0 md:ml-6 lg:ml-8 p-4 rounded-xl">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-xl shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
               <div className="h-36 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center group overflow-hidden">
                <div className="h-full w-full flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
                <div className="p-2 sm:p-3 md:p-4 mt-auto flex flex-col items-center text-center">
                  <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-900 mb-1 sm:mb-2 md:mb-4 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="mt-1 md:mt-2 flex items-center justify-between w-full">
                    <p className="text-sm sm:text-base md:text-lg font-medium text-primary">Rp. {product.price.toFixed(2)}</p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation(); // Mencegah event bubbling ke parent
                        addToCart(product);
                      }}
                      className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full bg-primary hover:bg-teal-600 flex items-center justify-center text-white"
                      aria-label="Add to cart"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty state ketika ga ada product */}
          {filteredProducts.length === 0 && (
            <div className="bg-white rounded-lg shadow p-6 md:p-8 text-center">
              <p className="text-gray-600">Produk yang cocok tidak ditemukan</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && selectedProduct && (
        <Modal product={selectedProduct} onClose={handleCloseModal} addToCart={addToCart} />
      )}
    </div>
  );
};

export default Katalog;