import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
};

const Products = () => {
  const productsList = [
    "Product 6",
    "Product 7",
    "Product 8",
    "Product 10",
    "Product 11",
    "Product 12",
    "Product 13",
    "Product 14",
    "Product 15",
    "Product 16",
  ];
  return (
    <div className="flex flex-col justify-center items-center w-screen h-[56vh]">
      <h1 className="p-2 text-5xl align-middle">Products Page</h1>
      <div className="flex flex-wrap justify-center items-center gap-2 m-4 w-1/3 text-2xl">
        {productsList.map((productItem) => (
          <Link
            href={`/products/${productItem.split(" ")[1]}`}
            key={productItem}
            className="hover:bg-white p-2 border border-black rounded-lg hover:text-black"
          >
            {productItem}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
