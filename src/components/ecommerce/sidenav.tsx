import React from 'react';
import { useRouter } from "next/navigation";

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

interface SidenavProps {
  selectedCategory: string;
  sortOrder: string;
  categories: { id: string; name: string }[];
  sortOptions: { id: string; name: string }[];
  handleCategoryChange: (categoryName: string) => void;
  handleSortChange: (sortName: string) => void;
  cart: CartItem[];
  cartTotal: number;
  toggleCartMenu: () => void;
  isCartOpen: boolean;
  removeFromCart: (productId: number) => void;
  addToCart: (product: Product) => void;
  deleteFromCart: (productId: number) => void;
  cartMenuRef: React.RefObject<HTMLDivElement>;
}

const Sidenav: React.FC<SidenavProps> = ({
  selectedCategory,
  sortOrder,
  categories,
  sortOptions,
  handleCategoryChange,
  handleSortChange,
  cart,
  cartTotal,
  toggleCartMenu,
  isCartOpen,
  removeFromCart,
  addToCart,
  deleteFromCart,
  cartMenuRef,
  
}) => {
  const router = useRouter();

  return (
    <div className=" md:block md:w-64 lg:w-72">
      <div className="sticky top-8 bg-white rounded-lg shadow p-4 lg:p-8">
        {/* Shopping Cart Button */}
        <div className="relative mb-4">
          <button 
            onClick={toggleCartMenu}
            className="w-full bg-primary text-white py-2 px-4 rounded-lg flex items-center justify-between cart-toggle-button"
          >
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Shopping Cart</span>
            </div>
            <span className="bg-white text-primary rounded-full h-6 w-6 flex items-center justify-center font-bold">
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </button>

          {/* Cart Dropdown */}
          {isCartOpen && (
            <div 
              ref={cartMenuRef}
              className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-30 border border-gray-200 max-h-80 overflow-auto"
            >
              <div className="p-4">
                <h3 className="font-medium text-lg border-b pb-2 mb-3">Your Cart</h3>
                
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">Your cart is empty</p>
                ) : (
                  <>
                    {cart.map((item) => (
                      <div key={item.product.id} className="flex items-start py-3 border-b">
                        <div className="h-16 w-16 bg-gray-100 rounded flex-shrink-0 mr-3">
                          <img src={item.product.image} alt={item.product.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate">{item.product.name}</h4>
                          <p className="text-sm text-primary font-bold mt-1">${item.product.price.toFixed(2)}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center border rounded">
                              <button 
                                onClick={() => removeFromCart(item.product.id)} 
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                -
                              </button>
                              <span className="px-2 text-sm">{item.quantity}</span>
                              <button 
                                onClick={() => addToCart(item.product)} 
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>
                            <button 
                              onClick={() => deleteFromCart(item.product.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="mt-4 pt-2 border-t">
                      <div className="flex justify-between font-medium text-lg">
                        <span>Total:</span>
                        <span>Rp. {cartTotal.toFixed(2)}</span>
                      </div>
                      <button
                          className="w-full mt-4 bg-primary text-white py-2 rounded-lg"
                          onClick={() => router.push("/checkout")}
                        >
                          Checkout sekarang
                        </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="mb-6 lg:mb-8">
          <h2 className="font-medium text-lg lg:text-xl text-gray-800 mb-4 lg:mb-6">Categories</h2>
          <div className="space-y-3 lg:space-y-4">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="flex items-center cursor-pointer"
                onClick={() => handleCategoryChange(category.name)}
              >
                <div className={`h-5 w-5 lg:h-6 lg:w-6 rounded-full border-2 flex items-center justify-center ${selectedCategory === category.name ? 'border-primary bg-purple-100' : 'border-gray-300'}`}>
                  {selectedCategory === category.name && (
                    <div className="h-3 w-3 lg:h-4 lg:w-4 rounded-full bg-primary"></div>
                  )}
                </div>
                <label className="ml-3 text-gray-700 cursor-pointer text-sm lg:text-base">
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Sort by Price */}
        <div>
          <h2 className="font-medium text-lg lg:text-xl text-gray-800 mb-4 lg:mb-6">Sort by Price</h2>
          <div className="space-y-3 lg:space-y-4">
            {sortOptions.map((option) => (
              <div 
                key={option.id} 
                className="flex items-center cursor-pointer"
                onClick={() => handleSortChange(option.name)}
              >
                <div className={`h-5 w-5 lg:h-6 lg:w-6 rounded-full border-2 flex items-center justify-center ${sortOrder === option.name ? 'border-primary bg-purple-100' : 'border-gray-300'}`}>
                  {sortOrder === option.name && (
                    <div className="h-3 w-3 lg:h-4 lg:w-4 rounded-full bg-primary"></div>
                  )}
                </div>
                <label className="ml-3 text-gray-700 cursor-pointer text-sm lg:text-base">
                  {option.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;