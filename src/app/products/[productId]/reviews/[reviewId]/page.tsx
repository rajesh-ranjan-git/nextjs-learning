import { notFound } from "next/navigation";

type Props = { params: { productId: number; reviewId: number } };

export const generateMetadata = ({ params }: Props) => {
  return { title: `iPhone ${params.productId} Review ${params.reviewId}` };
};

const ReviewDetails = ({ params }: Props) => {
  if (params.productId > 16) {
    notFound();
  }

  if (params.reviewId > 10) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center h-[43.5vh] text-5xl">
      Review {params.reviewId} for iPhone {params.productId}
    </div>
  );
};

export default ReviewDetails;
