"use client";
import React, { useState } from "react";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { Card, CardContent } from "@/components/UI/card";
import { Label } from "@/components/UI/label";
import { RadioGroup, RadioGroupItem } from "@/components/UI/radio-group";
import { Upload } from "lucide-react";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("money");
  const [tradeImage, setTradeImage] = useState<File | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setTradeImage(event.target.files[0]);
    }
  };

  const handleCheckout = () => {
    alert("Checkout berhasil!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <Card>
        <CardContent className="p-6 space-y-4">
          <Label>Total Harga: $120</Label>
          <RadioGroup
            value={paymentMethod}
            onValueChange={setPaymentMethod}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="money" id="money" />
              <Label htmlFor="money">Bayar dengan Uang</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="trade" id="trade" />
              <Label htmlFor="trade">Tukar Tambah Baju</Label>
            </div>
          </RadioGroup>

          {paymentMethod === "trade" && (
            <div>
              <Label htmlFor="tradeImage">Upload Foto Baju</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-2"
              />
              {tradeImage && (
                <img
                  src={URL.createObjectURL(tradeImage)}
                  alt="Baju untuk tukar tambah"
                  className="mt-4 h-40 object-cover rounded-md"
                />
              )}
            </div>
          )}

          <Button className="w-full mt-4" onClick={handleCheckout}>
            Checkout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutPage;
