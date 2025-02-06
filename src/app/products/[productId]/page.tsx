import { notFound } from "next/navigation";

const ProductDetails = ({ params }: { params: { productId: number } }) => {
  if (params.productId > 10) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center w-screen h-[62vh] text-5xl">
      Product Details for Product : {params.productId}
    </div>
  );
};

export default ProductDetails;
