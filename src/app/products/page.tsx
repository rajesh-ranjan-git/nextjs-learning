import NavLinks from "@/components/navLinks/navLinks";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
};

const Products = () => {
  return (
    <div className="flex flex-col items-center w-screen h-[54vh] text-5xl">
      <h1 className="my-auto align-middle">Products Page</h1>
    </div>
  );
};

export default Products;
