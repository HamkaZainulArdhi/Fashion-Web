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
          <h3 className="font-bold">Free Ongkir</h3>
          <p className="text-sm text-gray-500">Untuk Pembelian pertama</p>
        </div>
      </div>

      {/* Call Us Anytime */}
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
          <Phone className="w-6 h-6 text-yellow-600" />
        </div>
        <div>
          <h3 className="font-bold">Customer Service</h3>
          <p className="text-sm text-gray-500">789-230</p>
        </div>
      </div>

      {/* Chat With Us */}
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
          <MessageCircle className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="font-bold">Butuh Sesuatu?</h3>
          <p className="text-sm text-gray-500">Hubungi Kami via WhatApps</p>
        </div>
      </div>

      {/* Gift Cards */}
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
          <Gift className="w-6 h-6 text-yellow-600" />
        </div>
        <div>
          <h3 className="font-bold">CashBack 60%</h3>
          <p className="text-sm text-gray-500">Setiap Pembelian 3 Produk</p>
        </div>
      </div>
    </div>
  );
};
