import { Metadata } from "next";
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
    title: `Product ${title}`,
  };
};

const ProductDetails = ({ params }: Props) => {
  if (params.productId > 16) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center w-screen h-[52vh] text-5xl">
      Product Details for Product : {params.productId}
    </div>
  );
};

export default ProductDetails;
