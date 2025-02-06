import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    productId: number;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    resolve(`iPhone ${params.productId}`);
  });

  return {
    title: `${title}`,
  };
};

const ProductDetails = ({ params }: Props) => {
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
    <div className="flex flex-col justify-center items-center w-screen h-[43.5vh]">
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
