import React from "react";
import { Truck, Phone, MessageCircle, Gift } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {/* Free Shipping */}
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
        <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
          <Truck className="w-6 h-6 text-pink-600" />
        </div>
        <div>
          <h3 className="font-bold">Free Shipping</h3>
          <p className="text-sm text-gray-500">When you spend $50+</p>
        </div>
      </div>

      {/* Call Us Anytime */}
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
          <Phone className="w-6 h-6 text-yellow-600" />
        </div>
        <div>
          <h3 className="font-bold">Call Us Anytime</h3>
          <p className="text-sm text-gray-500">+34 555 5555</p>
        </div>
      </div>

      {/* Chat With Us */}
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
          <MessageCircle className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="font-bold">Chat With Us</h3>
          <p className="text-sm text-gray-500">We offer 24-hour chat support</p>
        </div>
      </div>

      {/* Gift Cards */}
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
          <Gift className="w-6 h-6 text-yellow-600" />
        </div>
        <div>
          <h3 className="font-bold">Gift Cards</h3>
          <p className="text-sm text-gray-500">For your loved one, in any amount</p>
        </div>
      </div>
    </div>
  );
};
