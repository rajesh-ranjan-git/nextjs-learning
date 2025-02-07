"use client";

import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    productId: number;
  };
};

const getRandomNumber = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ProductDetails = ({ params }: Props) => {
  const randomNumber = getRandomNumber(2);

  if (randomNumber === 1) {
    throw new Error("Error occurred while loading product details!");
  }

  if (params.productId > 16) {
    notFound();
  }

  const reviewsList = [
    "Review 1",
    "Review 2",
    "Review 3",
    "Review 4",
    "Review 5",
    "Review 6",
    "Review 7",
    "Review 8",
    "Review 9",
    "Review 10",
  ];

  return (
    <div className="flex flex-col justify-center items-center h-[43.5vh]">
      <h1 className="p-2 text-5xl align-middle">
        Product Details for Product : {params.productId}
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-2 m-4 w-1/3 text-2xl">
        {reviewsList.map((reviewItem) => (
          <Link
            href={`/products/${params.productId}/reviews/${
              reviewItem.split(" ")[1]
            }`}
            key={reviewItem}
            className="hover:bg-white p-2 border border-black rounded-lg hover:text-black"
          >
            {reviewItem}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
