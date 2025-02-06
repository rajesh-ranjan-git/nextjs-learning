import { notFound } from "next/navigation";

const ReviewDetails = ({
  params,
}: {
  params: { productId: number; reviewId: number };
}) => {
  if (params.productId > 10) {
    notFound();
  }

  if (params.reviewId > 10) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center w-screen h-[62vh] text-5xl">
      Review {params.reviewId} for Product {params.productId}
    </div>
  );
};

export default ReviewDetails;
