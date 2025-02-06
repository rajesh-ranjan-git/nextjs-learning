import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};

const Products = () => {
  return (
    <div className="flex justify-center items-center w-screen h-[62vh] text-5xl">
      Products Page
    </div>
  );
};

export default Products;
