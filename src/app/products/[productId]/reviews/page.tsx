import { notFound } from "next/navigation";

const Reviews = ({ params }: { params: { productId: number } }) => {
  if (params.productId > 10) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center w-screen h-[52vh] text-5xl">
      Reviews Page for Product {params.productId}
    </div>
  );
};

export default Reviews;
