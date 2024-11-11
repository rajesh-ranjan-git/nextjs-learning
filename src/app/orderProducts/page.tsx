"use client";

import { useRouter } from "next/navigation";

export default function OrderProducts() {
  const orderRouter = useRouter();

  const handlePlaceOrderWithPush = () => {
    console.log("Order Placed successfully...");
    orderRouter.push("/products");
  };

  const handlePlaceOrderWithReplace = () => {
    console.log("Order Placed successfully with replace...");
    orderRouter.replace("/profile");
  };

  const handlePlaceOrderWithBack = () => {
    console.log("Order Placed successfully with forward...");
    orderRouter.back();
  };

  const handlePlaceOrderWithForward = () => {
    console.log("Order Placed successfully with forward...");
    orderRouter.forward();
  };
  return (
    <>
      <h1>Order Product</h1>
      <button
        className="p-2 m-2 rounded bg-red-500 text-white"
        onClick={handlePlaceOrderWithPush}
      >
        Place Order with Push
      </button>
      <button
        className="p-2 m-2 rounded bg-red-500 text-white"
        onClick={handlePlaceOrderWithReplace}
      >
        Place Order with Replace
      </button>
      <button
        className="p-2 m-2 rounded bg-red-500 text-white"
        onClick={handlePlaceOrderWithBack}
      >
        Place Order with Back
      </button>
      <button
        className="p-2 m-2 rounded bg-red-500 text-white"
        onClick={handlePlaceOrderWithForward}
      >
        Place Order with Forward
      </button>
    </>
  );
}
