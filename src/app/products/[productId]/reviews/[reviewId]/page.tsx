import { notFound } from "next/navigation";

export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} Details of Product {params.productId}
    </h1>
  );
}
