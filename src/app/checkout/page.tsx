import CartItemComponent from "@/components/ecommerce/checkout/cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout Page | SustainStyles",
  description: "Sustainable fashion checkout page",
};

const CheckoutPage = () => {
  return (
      <div className="bg-whitebg">
        <CartItemComponent />
      </div>
  );
};

export default CheckoutPage;
