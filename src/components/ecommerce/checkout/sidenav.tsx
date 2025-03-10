// SideNav.tsx
import React from 'react';

interface SideNavProps {
  cartSubtotal: number;
  discount: number;
}

export const SideNav: React.FC<SideNavProps> = ({ cartSubtotal, discount }) => {
  const [provinsi, setProvinsi] = React.useState("");
  const [kota, setKota] = React.useState("");
  const [KodePos, setKodePos] = React.useState("");
  const [couponCode, setCouponCode] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("money");
  const [clothingImage, setClothingImage] = React.useState<string | null>(null);
  
  const cartTotal = cartSubtotal - discount;
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setClothingImage(event.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  
  return (
    <div className="lg:w-1/3 space-y-6">
      {/* Shipping calculator */}
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Pengiriman yang Dihitung</h2>
      <div className="space-y-4">
        <div>
          <div className="relative">
            <select
              className="w-full p-2 border rounded bg-gray-50 appearance-none pr-8"
              value={provinsi}
              onChange={(e) => setProvinsi(e.target.value)}
            >
              <option value="">Pilih Provinsi</option>
              <option value="Jawa Barat">Jawa Barat</option>
              <option value="Jawa Tengah">Jawa Tengah</option>
              <option value="Jawa Timur">Jawa Timur</option>
              <option value="DKI Jakarta">DKI Jakarta</option>
              <option value="Bali">Bali</option>
              <option value="Sumatera Utara">Sumatera Utara</option>
              <option value="Sulawesi Selatan">Sulawesi Selatan</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="flex-1 relative">
            <select
              className="w-full p-2 border rounded bg-gray-50 appearance-none pr-8"
              value={kota}
              onChange={(e) => setKota(e.target.value)}
            >
              <option value="">Pilih Kota / Kabupaten</option>
              <option value="Bandung">Bandung</option>
              <option value="Semarang">Semarang</option>
              <option value="Surabaya">Surabaya</option>
              <option value="Medan">Medan</option>
              <option value="Makassar">Makassar</option>
              <option value="Denpasar">Denpasar</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          <input
            type="text"
            placeholder="Kode Pos"
            className="flex max-w-sm p-1 border-2 rounded bg-white"
            value={KodePos}
            onChange={(e) => setKodePos(e.target.value)}
          />
        </div>

        <button className="w-full bg-primary text-white py-3 rounded hover:bg-blue-400 transition">
          Perbarui
        </button>
      </div>
    </div>

      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Kode Kupon</h2>
        <p className="text-gray-500 text-sm mb-4">
         Gunakan kode promo eksklusif untuk mendapatkan diskon spesial pada setiap pembelian berkelanjutan.
        </p>
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Kode kupon" 
            className="w-full p-2 border-2 rounded bg-white  text-white"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
        </div>
        <button className="w-full bg-primary text-white py-3 rounded hover:bg-blue-400 transition">
          Apply
        </button>
      </div>
      
      {/* Payment options */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Pilih Pembayaran</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <input 
              type="radio" 
              id="pay-money" 
              name="payment-method" 
              value="money"
              checked={paymentMethod === "money"}
              onChange={() => setPaymentMethod("money")}
              className="mr-2"
            />
            <label htmlFor="pay-money">Bayar Dengan Uang</label>
          </div>
          
          <div className="flex items-center">
            <input 
              type="radio" 
              id="pay-exchange" 
              name="payment-method" 
              value="exchange"
              checked={paymentMethod === "exchange"}
              onChange={() => setPaymentMethod("exchange")}
              className="mr-2"
            />
            <label htmlFor="pay-exchange">Bayar Dengan Bertukar Pakaianmu</label>
          </div>
          
          {paymentMethod === "exchange" && (
            <div className="mt-4 border-t pt-4">
              <p className="text-sm mb-2">Unggah foto pakaian yang ingin Anda tukar:</p>
              <div className="flex flex-col items-center">
                <label className="w-full cursor-pointer bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">Klik untuk mengunggah atau seret dan lepas</p>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleFileUpload}
                  />
                </label>
                
                {clothingImage && (
                  <div className="mt-4 w-full">
                    <p className="text-sm mb-2">Uploaded clothing item:</p>
                    <div className="w-full h-48 overflow-hidden rounded-lg">
                      <img src={clothingImage} alt="Uploaded clothing" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Cart total */}
      <div className="bg-primary text-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Cart Total</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Cart Subtotal</span>
            <span>Rp. {cartSubtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Ongkos Kirim</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="font-bold">-Rp. {discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Cart Total</span>
            <span>Rp. {cartTotal.toFixed(2)}</span>
          </div>
        </div>
        <button className="w-full bg-white border-2 text-primary font-bold  py-3 rounded mt-4 hover:bg-blue-500 transition">
          Apply
        </button>
      </div>
    </div>
  );
};